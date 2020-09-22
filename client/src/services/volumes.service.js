import axios from 'axios';

const endpoint = 'volumes';
const api = process.env.VUE_APP_GOOGLE_BOOKS_API;
const apiKey = process.env.VUE_APP_API_KEY;

export default {
  getVolumes(searchTerm) {
    return axios.get(`${api}/${endpoint}?q=${searchTerm}&language=en&maxResults=20&key=${apiKey}`);
  }
}