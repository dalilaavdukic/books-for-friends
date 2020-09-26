import axios from 'axios';

export default {
  createRecommendations(recommendations) {
    console.log(recommendations);
    return axios.get(
      `http://localhost:3000/recommendations`
    );
  }
};
