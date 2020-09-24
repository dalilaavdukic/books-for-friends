import { SET_FOUND_BOOKS } from "./mutation-types";
import { ADD_BOOK_TO_RECOMMENDATIONS } from "./mutation-types";
import { REMOVE_BOOK_FROM_RECOMMENDATIONS} from "./mutation-types";
import { CLEAR_RECOMMENDATIONS} from "./mutation-types";

export default {
  [SET_FOUND_BOOKS](state, items) {
    state.foundBooks = items.map((volume) => {
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
    state.recommendations = {...state.recommendations, [book.id]: book};
  },
  [REMOVE_BOOK_FROM_RECOMMENDATIONS](state, book) {
    delete state.recommendations[book.id];
    state.recommendations = {...state.recommendations};
  },
  [CLEAR_RECOMMENDATIONS](state) {
    state.recommendations = {...{}};
  }
};
