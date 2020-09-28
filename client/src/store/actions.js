/* eslint-disable */

import volumesService from '@/services/volumes.service';
import recommendationsService from '@/services/recommendations.service';
import { SET_FOUND_BOOKS } from './mutation-types';
import { SET_GAPI_CLIENT } from './mutation-types';
import { SET_IS_SIGNED_IN } from './mutation-types';
import { SET_GOOGLE_AUTH } from './mutation-types';
import { SET_CURRENT_USER } from './mutation-types';

export default {
  getBooks({ commit }, searchTerm) {
    return new Promise((resolve, reject) => {
      volumesService
        .getVolumes(searchTerm)
        .then(response => {
          if (response.data.totalItems) {
            commit(SET_FOUND_BOOKS, response.data.items);
          } else {
            commit(SET_FOUND_BOOKS, []);
          }
          resolve(response);
        })
        .catch(error => {
          reject(error.response.data.error.message);
        });
    });
  },
  saveBooks({ getters }) {
    return recommendationsService.createRecommendations(
      getters.completeRecommendation
    );
  },
  initGapiClient({ commit, getters }) {
    const apiKey = process.env.VUE_APP_API_KEY;
    const clientId = process.env.VUE_APP_CLIENT_ID;
    const scope = process.env.VUE_APP_API_SCOPE;
    gapi.load('client:auth2', () => {
      gapi.client
        .init({
          apiKey: apiKey,
          clientId: clientId,
          scope: scope
        })
        .then(() => {
          commit(SET_GAPI_CLIENT, gapi);
          commit(SET_GOOGLE_AUTH, gapi.auth2.getAuthInstance());
          // initial state setup
          commit(SET_IS_SIGNED_IN, getters.googleAuth.isSignedIn.get());
          commit(
            SET_CURRENT_USER,
            getters.isSignedIn
              ? getters.googleAuth.currentUser.get().getBasicProfile()
              : undefined
          );
          // setup listener for whener sign in status changes
          getters.googleAuth.isSignedIn.listen(isSignedIn => {
            commit(SET_IS_SIGNED_IN, isSignedIn);
            commit(
              SET_CURRENT_USER,
              isSignedIn
                ? getters.googleAuth.currentUser.get().getBasicProfile()
                : undefined
            );
          });
        });
    });
  },
  signIn({ getters }) {
    getters.googleAuth.signIn();
  },
  signOut({ getters }) {
    getters.googleAuth.signOut();
  },
  getPrivateBookshelve({ commit,getters }) {
    const api = process.env.VUE_APP_GOOGLE_BOOKS_API;
    getters.gapi.client
      .request({
        path:
          `${api}/mylibrary/bookshelves/1001/volumes`,
        method: 'GET'
      })
      .then(response => {
        commit(SET_FOUND_BOOKS, response.result.items);
      });
  }
};
