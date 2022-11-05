<template>
  <nav id="nav" class="flex space-x-4">
    <!-- <router-link to="/">Home</router-link> -->
    <router-link class="navbar-item" to="/about">About</router-link>
    <router-link class="navbar-item" to="/work">Work</router-link>
    <router-link class="navbar-item" to="/history">History</router-link>
    <router-link class="navbar-item" to="/contact">Contact</router-link>
    <!-- <font-awesome-icon icon="fa-solid fa-brands fa-twitter" /> -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    console.log("test 1 - ", this.test1);
  },
  computed: {
    currentPath() {
      console.log(this.$router.currentRoute.value);
      return this.$router.currentRoute.value.path;
    },
  },
};
</script>
