<template>
  <div id="app">
    <First msg="Hello Vue3 + Tailwind" />
  </div>
</template>

<script>
import First from "../components/First";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    First,
  },
  methods: {
    logger: function () {
      console.log("open event");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
