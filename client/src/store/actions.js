/* eslint-disable */ 
import volumesService from '@/services/volumes.service';
import recommendationsService from '@/services/recommendations.service';
import { SET_FOUND_BOOKS } from './mutation-types';
import { SET_GAPI_CLIENT } from './mutation-types';
import { SET_IS_SIGNED_IN } from './mutation-types';
import { SET_GOOGLE_AUTH } from './mutation-types';

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
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: 'AIzaSyAN5moNYZ9vD4IuYqcsddBekmWo5FW5PYA',
        clientId: '302865508410-nbiuhuqjl51dul402lr6g2783boq4i7b.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/books'
      }).then(() => {
        commit( SET_GAPI_CLIENT, gapi);
        commit( SET_GOOGLE_AUTH, gapi.auth2.getAuthInstance());
        getters.googleAuth.isSignedIn.listen((isSignedIn) => {
          commit(SET_IS_SIGNED_IN, isSignedIn)
        });
      })
    });
  },
  signIn({ getters }) {
    getters.googleAuth.signIn();
  },
  signOut({ getters }) {
    getters.googleAuth.signOut();
  },
  getPrivateBookshelve({ getters }) {
    getters.gapi.client.request({
      path: 'https://www.googleapis.com/books/v1/users/102982485954716983138/bookshelves/1001/volumes',
      method: 'GET'
    }).then(response => {
      console.log(response)
    })
  }
};