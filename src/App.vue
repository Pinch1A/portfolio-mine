<script setup lang="ts">
import { inject, onMounted, ref, markRaw } from "vue";
import SplashScreen from "./components/SplashScreen.vue";
import NavBar from "./components/NavBar.vue";
import NavBarScroll from "./components/NavBarScroll.vue";
import BaseTriangle from "./components/BaseTriangle.vue";
import ScrollTop from "./components/ScrollTop.vue";
import { PortfolioType, Sizes, TriangleDirection } from "./types";

const portfolioData: PortfolioType | undefined = inject("portfolioData");
const isLoading = ref<boolean>(true);
const isRouter = ref<boolean>(false);
const isScrollTopVisible = ref<boolean>(false);
const activeNav = ref<unknown>(null);

const sizes = Sizes;
const direction = TriangleDirection;

onMounted(() => {
  isLoading.value = false;
  activeNav.value = isRouter.value ? markRaw(NavBar) : markRaw(NavBarScroll);
});

const scrolling = (e: any) => {
  const scrollTop = e.target.scrollTop;

  if (scrollTop > 90) {
    console.log("Yay! Show Scroll To Top button");
    isScrollTopVisible.value = true;
  } else {
    isScrollTopVisible.value = false;
  }
};
</script>

<template>
  <BaseTriangle
    color="error"
    :size="sizes.TINY"
    :type="direction.UP"
    position-class="bottom-0 left-3 rotate-90"
  />
  <BaseTriangle
    color="error"
    :size="sizes.TINY"
    :type="direction.UP"
    position-class="top-7 left-3 rotate-45"
  />
  <div class="flex flex-col w-full items-stretch z-10">
    <component :is="activeNav" />
  </div>
  <main role="main">
    <SplashScreen v-if="isLoading" :isLoading="isLoading" />
    <div
      v-else
      @scroll="scrolling"
      id="container"
      class="flex flex-col items-stretch p-2 py-4 md:p-6 md:py-4 md:pt-2 min-h-full h-screen w-full overflow-auto"
    >
      <div class="h-full pb-5">
        <router-view
          class="flex w-full items-stretch pb-5"
          :portfolio-info="portfolioData"
          :is-router="isRouter"
        />
      </div>
      <ScrollTop v-if="isScrollTopVisible" />
    </div>
  </main>
</template>

<style>
#app {
  @apply bg-neutral;
}
</style>
