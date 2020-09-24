<template>
  <div class="book-search-container">
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
    <div class="search-results">
      <div v-if="foundBooks.length && !errorOccured">
        <books-found></books-found>
      </div>
      <div v-if="errorOccured">An error occured, please try refining your search and try again.</div>
      <div v-if="noResults">Unfortunately, we couldn't find any books that match your search. Please try searching something else.</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BooksFound from "@/components/BooksFound";

export default {
  name: "BooksSearch",
  components: { BooksFound },
  data() {
    return {
      searchTerm: "",
      requestInProgress: false,
      errorOccured: false,
      noResults: false
    };
  },
  computed: {
    ...mapGetters(["foundBooks"]),
  },
  methods: {
    ...mapActions(["getBooks"]),
    searchBooks() {
      this.requestInProgress = true;
      this.noResults = false;
      this.getBooks(this.searchTerm)
        .then(() => {
          this.errorOccured = false;
          this.requestInProgress = false;
          this.noResults = this.foundBooks.length === 0;
        })
        .catch((error) => {
          this.requestInProgress = false;
          this.errorOccured = true;
          this.noResults = false;
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.book-search-container {
  padding-right: 2rem;
  .search-results {
    margin-top: 1rem;
    padding-right: 1rem;
    overflow-y: auto;
    height: calc(100vh - 16.5rem)
  }
}
</style>
