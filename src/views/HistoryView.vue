<script setup lang="ts">
import { PortfolioType } from "@/types";
import { computed, PropType } from "vue";
import ExperienceItem from "../components/ExperienceItem.vue";

const props = defineProps({
  portfolioInfo: {
    type: Object as PropType<PortfolioType>,
    required: true,
  },
});

const orderedList = computed(() => {
  const list = { ...props.portfolioInfo.experiences }.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
  return list;
});
</script>

<template>
  <section id="history" class="flex flex-col w-full space-y-6 h-full px-2">
    <template v-for="(experience, index) in orderedList" :key="index">
      <ExperienceItem :experience="experience" />
    </template>
  </section>
</template>
