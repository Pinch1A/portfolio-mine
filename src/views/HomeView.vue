<script setup lang="ts">
import { PortfolioType } from "@/types";
import { PropType } from "vue";
import AboutView from "./AboutView.vue";

defineProps({
  portfolioInfo: {
    type: Object as PropType<PortfolioType>,
    required: true,
  },
  isRouter: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    id="section-wrapper"
    class="flex flex-col w-full bg-neutral snap-y border border-t-0 border-b-0 border-error"
  >
    <AboutView class="relative h-screen" :portfolio-info="portfolioInfo" />
    <section
      id="history"
      class="h-screen bg-secondary-focus flex p-2 mx-2 my-1 snap-center"
    ></section>
    <section
      id="contact"
      class="h-screen bg-orange-400 flex p-2 mx-2 my-1 snap-center"
    ></section>
  </div>
</template>
