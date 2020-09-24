<template>
  <nav class="panel">
    <p class="panel-heading">Recommend to a friend</p>
    <div class="panel-block">
      <p class="control">
        <input
          :value="friendName"
          @input="updateFriendName"
          class="input"
          :class="{ 'is-danger': !formValid && formSubmitted }"
          type="text"
          placeholder="Recommend these books to..."
        />
        <small v-if="!formValid && formSubmitted" class="has-text-danger"
          >You must enter a friend's name</small
        >
      </p>
    </div>
    <div class="book-recommendations-container">
      <div class="panel-block" v-for="book in recommendations" :key="book.id">
        <book-recommendation-box :book="book"></book-recommendation-box>
      </div>
    </div>
    <div class="panel-block buttons">
      <button
        @click="saveRecommendations()"
        :disabled="noRecommendations"
        class="button is-primary"
      >
        Save
      </button>
      <button
        :disabled="noRecommendations"
        @click="clearRecommendationsList()"
        class="button"
      >
        Clear
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { CLEAR_RECOMMENDATIONS } from '@/store/mutation-types';
import { SET_FRIEND_NAME } from '@/store/mutation-types';
import BookRecommendationBox from '@/components/BookRecommendationBox';

export default {
  name: 'BooksRecommendations',
  components: { BookRecommendationBox },
  computed: {
    ...mapGetters(['recommendations', 'friendName']),
    noRecommendations: function () {
      for (let key in this.recommendations) {
        return false;
      }
      return true;
    },
    formValid: function () {
      return this.friendName !== '';
    },
  },
  data() {
    return {
      formSubmitted: false,
    };
  },
  methods: {
    ...mapMutations([CLEAR_RECOMMENDATIONS, SET_FRIEND_NAME]),
    clearRecommendationsList() {
      this[CLEAR_RECOMMENDATIONS]();
    },
    updateFriendName(e) {
      this[SET_FRIEND_NAME](e.target.value);
    },
    saveRecommendations() {
      this.formSubmitted = true;
      if (!this.formValid) return;
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
