<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToTop = () => {
  router.push("/");
};
</script>

<template>
  <button
    class="border-4 border-error p-2 h-8 w-8 text-center bg-neutral flex justify-center text-alert rounded hover:bg-error text-error transition ease-in hover:text-neutral fixed bottom-2 right-3"
    @click="scrollToTop"
    v-scroll-to="{ el: '#about', container: '#container', offset: -250 }"
  >
    <font-awesome-icon
      class="fa-xs text-center self-center flex"
      icon="fa-solid fa-arrows-up-to-line "
    ></font-awesome-icon>
  </button>
</template>
