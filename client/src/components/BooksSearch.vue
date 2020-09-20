<template>
  <div class="column section">
    <form @submit.prevent="searchBooks()">
      <div class="field is-grouped">
        <div class="control is-expanded">
          <input class="input" type="text" placeholder="Search for books" />
        </div>
        <div class="control">
          <button type="submit" class="button is-info">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "BooksSearch",
  methods: {
    ...mapActions([
      'getBooks'
    ]),
    searchBooks() {
      this.getBooks('a search term');
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
