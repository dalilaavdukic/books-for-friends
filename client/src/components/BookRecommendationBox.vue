<template>
  <div class="book-rec">
    <div class="rec-title">
      <strong>{{ book.title }} </strong>
      <a @click="removeBook()" class="delete is-medium"></a>
    </div>
    <div v-if="book.authors">
      by
      <span v-for="(author, index) in book.authors" :key="index">
        {{ author }}
        <span v-if="index !== book.authors.length - 1">,</span>
      </span>
    </div>
    <div class="rec-notes">
      <div>Notes:</div>
      <p class="control">
        <textarea
          class="textarea is-small"
          rows="2"
          placeholder="Add notes about this book"
        ></textarea>
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { REMOVE_BOOK_FROM_RECOMMENDATIONS } from "@/store/mutation-types";

export default {
  name: "BookRecommendationBox",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations([
      REMOVE_BOOK_FROM_RECOMMENDATIONS,
    ]),
    removeBook() {
      this[REMOVE_BOOK_FROM_RECOMMENDATIONS](this.book);
    },
  },
};
</script>

<style lang="scss" scoped>
.book-rec {
  width: 100%;
  .rec-title {
    display: flex;
    justify-content: space-between;
  }
  .rec-notes {
    display: flex;
    width: 100%;
    margin: 1rem 0 0.5rem;
    .control {
      width: 100%;
      margin-left: 1rem;
    }
  }
}
</style>
