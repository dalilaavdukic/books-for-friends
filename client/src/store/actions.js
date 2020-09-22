import volumesService from "@/services/volumes.service";
import { SET_FOUND_BOOKS } from "./mutation-types";

export default {
  getBooks({commit}, searchTerm) {
    return new Promise((resolve, reject) => {
      volumesService.getVolumes(searchTerm).then(response => {
        if (response.data.totalItems) {
          commit(SET_FOUND_BOOKS, response.data.items)
        } else {
          commit(SET_FOUND_BOOKS, [])
        }
        resolve(response);
      }).catch((error) => {
        reject(error.response.data.error.message);
      })
    })
  }
}