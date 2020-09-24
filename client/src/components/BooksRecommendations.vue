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
    <div class="book-recommendations-container">
      <div class="panel-block" v-for="book in recommendations" :key="book.id">
        <book-recommendation-box :book="book"></book-recommendation-box>
      </div>
    </div>
    <div class="panel-block buttons">
      <button :disabled="noRecommendations" class="button is-primary">
        Save
      </button>
      <button
        :disabled="noRecommendations"
        @click="clearRecommendationsList()"
        class="button is-link is-outlined"
      >
        Clear
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { CLEAR_RECOMMENDATIONS } from '@/store/mutation-types';
import BookRecommendationBox from '@/components/BookRecommendationBox';

export default {
  name: 'BooksRecommendations',
  components: { BookRecommendationBox },
  computed: {
    ...mapGetters(['recommendations']),
    noRecommendations: function () {
      for (let key in this.recommendations) {
        return false;
      }
      return true;
    },
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
  overflow-y: auto;
  height: calc(100vh - 23.5rem);
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
