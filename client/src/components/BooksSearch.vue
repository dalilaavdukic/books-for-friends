<template>
  <div class="book-search-container">
    <form @submit.prevent="searchBooks()">
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input
            v-model="searchTerm"
            class="input"
            type="text"
            placeholder="Search for books"
          />
        </div>
        <div class="buttons has-addons">
          <button
            :disabled="!searchTerm || requestInProgress"
            type="submit"
            class="button is-info"
            :class="{ 'is-loading': requestInProgress }"
          >
            Search
          </button>
          <button
            @click="clearSearch()"
            type="button"
            :disabled="requestInProgress"
            class="button"
          >
            Clear
          </button>
        </div>
      </div>
    </form>
    <a class="bookshelf-recommendations" v-if="isSignedIn" @click="getBooksFromBookshelf()">Recommend from my private bookshelf</a>
    <div class="search-results" :class="{'is-signed-in': isSignedIn}">
      <div v-if="foundBooks.length && !errorOccured">
        <books-found></books-found>
      </div>
      <div v-if="errorOccured" class="notification is-danger is-light" :class="{'is-signed-in': isSignedIn}">
        <p>An error occured, please try refining your search and try again.</p>
      </div>
      <div v-if="noResults" class="notification is-warning is-light" :class="{'is-signed-in': isSignedIn}">
        <p>Unfortunately, we couldn't find any books that match your search. Please
        try searching something else.</p>
      </div>
      <div v-if="noBookshelf" class="notification is-warning is-light" :class="{'is-signed-in': isSignedIn}">
        <p>Unfortunately, we couldn't find any books on your bookshelf. Please
        try searching for books to recommend.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { CLEAR_FOUND_BOOKS } from '@/store/mutation-types';
import BooksFound from '@/components/BooksFound';

export default {
  name: 'BooksSearch',
  components: { BooksFound },
  data() {
    return {
      searchTerm: '',
      requestInProgress: false,
      errorOccured: false,
      noResults: false,
      noBookshelf: false
    };
  },
  computed: {
    ...mapGetters(['foundBooks', 'isSignedIn']),
  },
  methods: {
    ...mapActions(['getBooks', 'getPrivateBookshelf']),
    ...mapMutations([CLEAR_FOUND_BOOKS]),
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
    getBooksFromBookshelf() {
      this.requestInProgress = true;
      this.noBookshelf = false;
      this.getPrivateBookshelf()
        .then(() => {
          this.errorOccured = false;
          this.requestInProgress = false;
          this.noBookshelf = this.foundBooks.length === 0;
        })
        .catch((error) => {
          this.requestInProgress = false;
          this.errorOccured = true;
          this.noBookshelf = false;
          console.log(error);
        });
    },
    clearSearch() {
      this.searchTerm = '';
      this.noResults = false;
      this.errorOccured = false;
      this[CLEAR_FOUND_BOOKS]();
    }
  },
};
</script>

<style lang="scss" scoped>
.book-search-container {
  @media screen and (min-width: $tablet) {
    padding-right: 2rem;
    margin-bottom: 0;
  }
  .bookshelf-recommendations {
    margin-top: 0.5rem;
    display: block;
  }
  margin-bottom: 1rem;
  .search-results {
    margin-top: 1rem;
    @media screen and (min-width: $tablet) {
      padding-right: 1rem;
      overflow-y: auto;
      height: calc(100vh - 16.5rem);
      &.is-signed-in {
        height: calc(100vh - 18.25rem);
      }
    }
  }
  .buttons {
    flex-wrap: nowrap;
  }
  .notification {
    @media screen and (min-width: $tablet) {
      margin-left: 1rem;
      height: calc(100vh - 16.5rem);
      &.is-signed-in {
        height: calc(100vh - 18.25rem);
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
    }
  }
}
</style>
