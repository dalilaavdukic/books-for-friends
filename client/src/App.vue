<template>
  <div id="app">
    <books-navbar></books-navbar>
    <div class="columns">
      <books-search></books-search>
      <books-recommendations></books-recommendations>
    </div>
    <books-footer></books-footer>
  </div>
</template>

<script>
import "bulma/css/bulma.css";
import BooksNavbar from "@/components/BooksNavbar";
import BooksFooter from "@/components/BooksFooter";
import BooksSearch from "@/components/BooksSearch";
import BooksRecommendations from "@/components/BooksRecommendations";

export default {
  name: "App",
  components: { 
    BooksFooter, 
    BooksNavbar, 
    BooksSearch, 
    BooksRecommendations 
  },
};
</script>

<style lang="scss" scoped>
</style>
