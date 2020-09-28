<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <img
          src="../assets/images/books-for-friends.png"
          alt="Books"
          height="90"
          width="90"
        />
      </span>
      <span class="navbar-item app-title">Books For Friends</span>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a @click="signIn()" class="button is-primary">
              <strong>Sign in</strong>
            </a>
            <a @click="signOut()" class="button is-light">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'BooksNavbar',
  computed: {
    ...mapGetters(['isSignedIn'])
  },
  methods: {
    ...mapActions(['signIn', 'signOut'])
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 4rem;
  .navbar-item {
    img {
      max-height: 3rem;
    }
    &.app-title {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
</style>
