export default {
  foundBooks: state => {
    return state.foundBooks;
  },
  recommendations: state => {
    return state.recommendations;
  },
  friendName: state => {
    return state.friendName;
  },
  completeRecommendation: state => {
    return {
      name: state.friendName,
      books: state.recommendations
    }
  }
};
