<template>
  <form @submit.prevent="saveRecommendations()">
    <nav class="panel">
      <p class="panel-heading">Recommend to a friend</p>
      <div class="panel-block">
        <div class="rec-name-and-messages">
          <div v-if="errorOccured" class="notification is-danger is-light">
            <p>
              An error occured while trying to save these recommendations.
              Please try again.
            </p>
          </div>
          <div
            v-if="recommendationsSaved"
            class="notification is-success is-light"
          >
            <p>These recommendations have been saved successfully!</p>
          </div>
          <p class="control">
            <input
              :disabled="requestInProgress"
              :value="friendName"
              @input="updateFriendName"
              class="input"
              :class="{ 'is-danger': invalidFormSubmitted }"
              type="text"
              placeholder="Recommend these books to..."
            />
            <small v-if="invalidFormSubmitted" class="has-text-danger"
              >You must enter a friend's name</small
            >
          </p>
        </div>
      </div>
      <div
        class="book-recommendations-container"
        :class="{
          'showing-messages': errorOccured || recommendationsSaved,
          'showing-validation': invalidFormSubmitted,
        }"
      >
        <div class="panel-block" v-for="book in recommendations" :key="book.id">
          <book-recommendation-box
            @noteEdited="clearMessages()"
            :book="book"
          ></book-recommendation-box>
        </div>
      </div>
      <div class="panel-block buttons">
        <button
          type="submit"
          :disabled="noRecommendations || requestInProgress"
          class="button is-primary"
          :class="{ 'is-loading': requestInProgress }"
        >
          Save
        </button>
        <button
          :disabled="noRecommendations || requestInProgress"
          @click="clearRecommendationsList()"
          class="button"
        >
          Clear
        </button>
      </div>
    </nav>
  </form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
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
    invalidFormSubmitted: function () {
      return !this.formValid && this.formSubmitted;
    },
  },
  watch: {
    recommendations: function () {
      this.clearMessages();
    },
  },
  data() {
    return {
      formSubmitted: false,
      recommendationsSaved: false,
      requestInProgress: false,
      errorOccured: false,
    };
  },
  methods: {
    ...mapMutations([CLEAR_RECOMMENDATIONS, SET_FRIEND_NAME]),
    ...mapActions(['saveBooks']),
    clearRecommendationsList() {
      this.errorOccured = false;
      this.formSubmitted = false;
      this.recommendationsSaved = false;
      this[SET_FRIEND_NAME]('');
      this[CLEAR_RECOMMENDATIONS]();
    },
    updateFriendName(e) {
      this.clearMessages();
      this[SET_FRIEND_NAME](e.target.value);
    },
    clearMessages() {
      this.recommendationsSaved = false;
      this.errorOccured = false;
    },
    saveRecommendations() {
      this.formSubmitted = true;
      this.errorOccured = false;
      if (!this.formValid) return;
      this.requestInProgress = true;
      this.saveBooks()
        .then(() => {
          this.requestInProgress = false;
          this.recommendationsSaved = true;
        })
        .catch((error) => {
          this.requestInProgress = false;
          this.recommendationsSaved = false;
          this.errorOccured = true;
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.book-recommendations-container {
  width: 100%;
  @media screen and (min-width: $tablet) {
    overflow-y: auto;
    height: calc(100vh - 24.5rem);
    &.showing-messages {
      height: calc(100vh - 24rem - 9rem);
    }
    &.showing-validation {
      height: calc(100vh - 24rem - 2rem);
    }
  }
}
.panel-block {
  &.buttons {
    justify-content: space-between;
    padding-top: 1rem;
    border-top: solid 2px whitesmoke;
    .button {
      width: 48%;
    }
  }
}
.rec-name-and-messages {
  width: 100%;
  .notification {
    margin-bottom: 0.6rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
