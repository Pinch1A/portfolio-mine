<template>
  <div class="container mx-auto">
    <h1 class="text-6xl text-center">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "First",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
