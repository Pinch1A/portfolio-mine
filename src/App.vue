<template>
  <SplashScreen :isLoading="isLoading" />
  <div
    v-if="!isLoading"
    class="flex flex-col items-stretch min-h-full h-screen p-4"
  >
    <div class="flex items-stretch">
      <NavBar />
    </div>
    <router-view class="flex w-full items-stretch" />
  </div>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";
import NavBar from "./components/NavBar.vue";
// import HomeView from "./views/Home.vue";

export default {
  name: "App",
  components: { SplashScreen, NavBar },
  data() {
    return { isLoading: false };
  },
  mounted() {
    console.log("App Mounted");
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
};
</script>
