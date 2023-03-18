<script setup lang="ts">
defineProps({
  mail: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section id="contact" class="flex flex-col w-full h-full p-6 text-primary">
    <h1>Get In Touch</h1>
    <!-- <font-awesome-icon icon="fa-solid fa-paper-plane" /> -->
    <div class="border border-accent px-3 py-2 text-accent">
      <a :href="`mailTo:${mail}?subject=Mail from Our Site`"> Say Ciao </a>
    </div>
  </section>
</template>
