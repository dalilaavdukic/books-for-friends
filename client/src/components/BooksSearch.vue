<template>
  <div class="column section">
    <form @submit.prevent="searchBooks()">
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input v-model="searchTerm" class="input" type="text" placeholder="Search for books" />
        </div>
        <div class="control">
          <button
            :disabled="!searchTerm || requestInProgress"
            type="submit"
            class="button is-info"
            :class="{'is-loading': requestInProgress}"
          >Search</button>
        </div>
      </div>
    </form>
    <div v-if="foundBooks.length && !errorOccured">{{foundBooks}}</div>
    <div v-if="errorOccured">An error occured, please try refining your search and try again.</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "BooksSearch",
  data() {
    return {
      searchTerm: "",
      requestInProgress: false,
      errorOccured: false
    };
  },
  computed: {
    ...mapGetters(["foundBooks"])
  },
  methods: {
    ...mapActions(["getBooks"]),
    searchBooks() {
      this.requestInProgress = true;
      this.getBooks(this.searchTerm)
        .then(() => {
          this.errorOccured = false;
          this.requestInProgress = false;
        })
        .catch((error) => {
          this.requestInProgress = false;
          this.errorOccured = true;
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
