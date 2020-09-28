import { SET_FOUND_BOOKS } from './mutation-types';
import { ADD_BOOK_TO_RECOMMENDATIONS } from './mutation-types';
import { REMOVE_BOOK_FROM_RECOMMENDATIONS } from './mutation-types';
import { CLEAR_RECOMMENDATIONS } from './mutation-types';
import { CLEAR_FOUND_BOOKS } from './mutation-types';
import { EDIT_RECOMMENDATION } from './mutation-types';
import { SET_FRIEND_NAME } from './mutation-types';
import { SET_CURRENT_USER } from './mutation-types';
import { SET_IS_SIGNED_IN } from './mutation-types';
import { SET_GAPI_CLIENT } from './mutation-types';
import { SET_GOOGLE_AUTH } from './mutation-types';

export default {
  [SET_FOUND_BOOKS](state, items) {
    state.foundBooks = items.map(volume => {
      const bookInfo = volume.volumeInfo;
      return {
        id: volume.id,
        title: bookInfo.title,
        subtitle: bookInfo.subtitle,
        authors: bookInfo.authors,
        pageCount: bookInfo.pageCount,
        publishedDate: bookInfo.publishedDate,
        publisher: bookInfo.publisher,
        image: bookInfo.imageLinks?.smallThumbnail,
        description: bookInfo.description,
        shortDescription: bookInfo.description?.substring(0, 150)
      };
    });
  },
  [ADD_BOOK_TO_RECOMMENDATIONS](state, book) {
    state.recommendations = {
      ...state.recommendations,
      [book.id]: { ...book, notes: '' }
    };
  },
  [REMOVE_BOOK_FROM_RECOMMENDATIONS](state, book) {
    delete state.recommendations[book.id];
    state.recommendations = { ...state.recommendations };
  },
  [CLEAR_RECOMMENDATIONS](state) {
    state.recommendations = {};
  },
  [CLEAR_FOUND_BOOKS](state) {
    state.foundBooks = [];
  },
  [EDIT_RECOMMENDATION](state, payload) {
    state.recommendations[payload.bookId].notes = payload.notes;
  },
  [SET_FRIEND_NAME](state, name) {
    state.friendName = name;
  },
  [SET_CURRENT_USER](state, user) {
    state.currentUser = user;
  },
  [SET_IS_SIGNED_IN](state, isSignedIn) {
    state.isSignedIn = isSignedIn;
  },
  [SET_GAPI_CLIENT](state, gapiInstance) {
    state.gapi = gapiInstance;
  },
  [SET_GOOGLE_AUTH](state, authInstance) {
    state.googleAuth = authInstance;
  }
};
