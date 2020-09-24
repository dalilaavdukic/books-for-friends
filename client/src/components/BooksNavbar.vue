<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item">
        <img
          src="../assets/books-for-friends.png"
          alt="Books"
          height="90"
          width="90"
        />
      </span>
      <span class="navbar-item app-title">Books For Friends</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BooksNavbar',
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
