<template>
  <div>
    <book-details-box v-for="(book, index) in foundBooks" :key="index" :book="book"></book-details-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BookDetailsBox from "@/components/BookDetailsBox";

export default {
  name: "BooksFound",
  components: { BookDetailsBox },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["foundBooks"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
