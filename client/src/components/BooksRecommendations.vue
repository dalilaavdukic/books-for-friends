<template>
  <nav class="panel">
    <p class="panel-heading">Recommend to a friend</p>
    <div class="panel-block">
      <p class="control">
        <input
          class="input"
          type="text"
          placeholder="Recommend these books to..."
        />
      </p>
    </div>
    <div class="panel-block" v-for="book in recommendations" :key="book.id">
      {{ book.title }}
    </div>
    <div class="panel-block buttons">
      <button class="button is-primary">Save</button>
      <button
        @click="clearRecommendationsList()"
        class="button is-link is-outlined"
      >
        Clear
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { CLEAR_RECOMMENDATIONS } from "@/store/mutation-types";

export default {
  name: "BooksRecommendations",
  computed: {
    ...mapGetters(["recommendations"]),
  },
  methods: {
    ...mapMutations([CLEAR_RECOMMENDATIONS]),
    clearRecommendationsList() {
      this[CLEAR_RECOMMENDATIONS]();
    },
  },
};
</script>

<style lang="scss" scoped>
.book-recommendations-container {
  width: 100%;
}
.panel-block {
  &.buttons {
    justify-content: space-between;
    .button {
      width: 49%;
    }
  }
}
</style>
