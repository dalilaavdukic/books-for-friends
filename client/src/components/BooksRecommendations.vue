<template>
  <div class="book-recommendations-container">
    <div v-for="book in recommendations" :key="book.id">{{book.title}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BooksRecommendations",
  computed: {
    ...mapGetters(["recommendations"]),
  },
};
</script>

<style lang="scss" scoped>
</style>
