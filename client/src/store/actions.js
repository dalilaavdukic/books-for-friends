import volumesService from "@/services/volumes.service";
import { SET_FOUND_BOOKS } from "./mutation-types";

export default {
  getBooks({commit}, searchTerm) {
    return new Promise((resolve, reject) => {
      volumesService.getVolumes(searchTerm).then(response => {
        commit(SET_FOUND_BOOKS, response.data.items)
        resolve(response);
      }).catch((error) => {
        reject(error.response.data.error.message);
      })
    })
  }
}