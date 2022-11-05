<template>
  <div class="flex w-full mt-5 h-full">
    <router-view class="flex items-stretch max-h-full" />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  mounted() {
    console.log("Home Mounted");
  },
};
</script>
