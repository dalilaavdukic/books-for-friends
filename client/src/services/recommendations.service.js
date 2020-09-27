import axios from 'axios';

const endpoint = 'recommendations';
const api = process.env.VUE_APP_API;

export default {
  createRecommendations(recommendations) {
    return axios.post(
      `${api}/${endpoint}`, recommendations
    );
  }
};
