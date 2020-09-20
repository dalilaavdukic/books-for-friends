import axios from 'axios';

export default {
  getVolumes(searchTerm) {
    console.log(searchTerm);
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAN5moNYZ9vD4IuYqcsddBekmWo5FW5PYA');
  }
}