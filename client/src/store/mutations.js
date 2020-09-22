import { SET_FOUND_BOOKS } from "./mutation-types";

export default {
  [SET_FOUND_BOOKS](state, items) {
    state.foundBooks = items.map((volume) => {
      const bookInfo = volume.volumeInfo;
      return {
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
};
