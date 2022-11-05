<template>
  <div class="container mx-auto">
    <h1 class="text-6xl text-center">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "BaseMessage",
  props: {
    msg: String,
  },
};
</script>
