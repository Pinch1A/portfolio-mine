<template>
  <div class="flex flex-col min-h-20 w-full">
    <div class="flex text-accent pb-2 text-2xl">
      <h1>{{ experience.company.name }}</h1>
    </div>
    <div
      class="flex min-h-20 w-full h-20 border border-2 border-info"
      :class="[!experience.isRecent && 'bg-error']"
    ></div>
  </div>
</template>

<script>
import CodePreview from "./CodePreview.vue";

export default {
  name: "ExperienceItem",
  components: { CodePreview },
  props: ["experience"],
  mounted() {
    console.log("Experience Item Mounted", this.experience);
  },
};
</script>
