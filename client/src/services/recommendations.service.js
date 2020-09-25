export default {
  createRecommendations(recommendations) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recommendations);
      }, 5000);
    });
  }
};
