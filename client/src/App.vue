<template>
  <div id="app">
    <books-navbar></books-navbar>
    <div class="main-content">
      <div class="left-content">
        <books-search></books-search>
      </div>
      <div class="right-content">
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
    margin: 2rem;
    margin-bottom: 1rem;
    .left-content, .right-content {
      width: 100%;
    }
  }
  .footer {
    padding: 2rem 0.5rem;
  }
}
</style>
