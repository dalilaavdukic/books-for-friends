<template>
  <div class="box" :class="{'has-background-success-light': hasBeenAdded}">
    <article class="media">
      <figure class="media-left">
        <p class="image is-96x96">
          <img v-if="book.image" :src="book.image" />
          <img v-else src="../assets/bookcover-placeholder.jpg" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <div>
            <strong>{{book.title}}</strong>
            <span v-if="book.subtitle">, {{book.subtitle}}</span>
          </div>
          <div v-if="book.authors">
            by
            <span v-for="(author, index) in book.authors" :key="index">
              {{author}}
              <span v-if="index !== book.authors.length - 1">,</span>
            </span>
          </div>
          <div>
            <small v-if="book.publisher">Published by {{book.publisher}},</small>
            <small v-if="book.publisheddate">{{book.publishedDate}}</small>
          </div>
          <div v-if="book.pageCount">
            <small>Pages: {{book.pageCount}}</small>
          </div>
          <div class="book-description-section">
            <div v-if="!showMore && book.shortDescription">
              {{book.shortDescription}}
              <a @click="toggleDescription()">...Show More</a>
            </div>
            <div v-if="showMore && book.description">
              {{book.description}}
              <br />
              <a @click="toggleDescription()">Show Less</a>
            </div>
          </div>
        </div>
      </div>
      <div class="media-right">
        <button @click="recommendBook()" v-if="!hasBeenAdded" class="button is-info">+</button>
        <button @click="removeBook()" v-else class="button is-danger">x</button>
      </div>
    </article>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex";
import { ADD_BOOK_TO_RECOMMENDATIONS } from "@/store/mutation-types";
import { REMOVE_BOOK_FROM_RECOMMENDATIONS } from "@/store/mutation-types";

export default {
  name: "BookDetailsBox",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showMore: false
    };
  },
  computed: {
    ...mapGetters(["recommendations"]),
    hasBeenAdded: function() {
      return Object.prototype.hasOwnProperty.call(this.recommendations, this.book.id);
    }
  },
  methods: {
    ...mapMutations([ADD_BOOK_TO_RECOMMENDATIONS, REMOVE_BOOK_FROM_RECOMMENDATIONS]),
    toggleDescription() {
      this.showMore = !this.showMore;
    },
    recommendBook() {
      if (!this.hasBeenAdded) {
        this[ADD_BOOK_TO_RECOMMENDATIONS](this.book);
      }
    },
    removeBook() {
      this[REMOVE_BOOK_FROM_RECOMMENDATIONS](this.book);
    }
  },
};
</script>

<style lang="scss" scoped>
.media {
  min-height: 10rem;
  .book-description-section {
    margin-top: 0.5rem;
  }
  .media-right {
    button {
      margin-left: 0.25rem;
      width: 3rem;
    }
  }
}
</style>
