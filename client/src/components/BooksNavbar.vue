<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <img
          src="../assets/images/books-for-friends.png"
          alt="Books"
        />
      </span>
      <span class="navbar-item app-title">Books For Friends</span>

      <a
        @click="toogleMenuVisibility()"
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
    <div class="navbar-menu" :class = "{'is-active': menuVisible}">
      <div class="navbar-end">
        <div v-if="isSignedIn" class="navbar-item">
          {{currentUser.name}}
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="!isSignedIn" @click="signIn()" class="button is-primary">
              <strong>Sign in with Google</strong>
            </a>
            <a v-else @click="signOut()" class="button is-info is-light">Sign out</a>
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
  data() {
    return {
      menuVisible: false
    }
  },
  computed: {
    ...mapGetters(['isSignedIn', 'currentUser'])
  },
  methods: {
    ...mapActions(['signIn', 'signOut']),
    toogleMenuVisibility() {
      this.menuVisible = !this.menuVisible;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {  
  @media screen and (min-width: $tablet) {
    min-height: 4rem;
  }
  .navbar-item {
    img {
      height: 45px;
      @media screen and (min-width: $tablet) {
        height: 90px;
        max-height: 3rem;
      }
    }
    &.app-title {
      font-size: 1.5rem;
      font-weight: bold;
      padding-left: 0;
      padding-right: 0;
      @media screen and (min-width: $tablet) {
        padding: 0.5rem 0.75rem;
      }
    }
  }
}
</style>
