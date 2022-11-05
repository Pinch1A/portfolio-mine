<template>
  <div class="flex flex-col w-full space-y-6 h-full">
    <template v-for="(experience, index) in experiences" :key="index">
      <ExperienceItem :experience="experience" />
    </template>
  </div>
</template>

<script>
import { inject } from "vue";
import ExperienceItem from "../components/ExperienceItem.vue";

export default {
  name: "HistoryView",
  components: { ExperienceItem },
  mounted() {
    console.log("History Mounted");
  },
  setup() {
    const { experiences } = inject("portfolioData");

    // Expose it to the template, if required
    return {
      experiences,
    };
  },
};
</script>
