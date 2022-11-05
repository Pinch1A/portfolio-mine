<template>
  <div class="flex flex-col w-full space-y-4">
    <ProfileCard />
  </div>
</template>

<script>
import ProfileCard from "../components/ProfileCard.vue";

export default {
  name: "AboutView",
  components: { ProfileCard },
  mounted() {
    console.log("About Mounted");
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 3000);
  },
};
</script>
