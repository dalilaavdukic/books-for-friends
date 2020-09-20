import volumesService from "@/services/volumes.service";

export default {
  getBooks({commit}, searchTerm) {
    return new Promise((resolve, reject) => {
      volumesService.getVolumes(searchTerm).then(response => {
        commit('SET_FOUND_BOOKS', response.data.items)
        resolve(response);
      }).catch(() => {
        reject();
      })
    })
  }
}