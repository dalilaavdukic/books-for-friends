<template>
  <div id="app">
    <books-navbar></books-navbar>
    <div class="main-content">
      <div>
        <books-search></books-search>
      </div>
      <div>
        <books-recommendations></books-recommendations>
      </div>
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
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main-content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex: 1 0 auto;
    div {
      margin: 1rem;
      width: 100%;
    }
  }
}
</style>
