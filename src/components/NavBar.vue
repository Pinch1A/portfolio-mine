<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  isRouter: {
    type: Boolean,
    default: false,
  },
});

const links = ref({
  about: {
    path: "/about",
    label: "About",
    sectionId: "#about",
    icon: "fa-dna",
  },
  history: {
    path: "/history",
    label: "History",
    sectionId: "#history",
    icon: "fa-medal",
  },
  contact: {
    path: "/contact",
    label: "Contact",
    sectionId: "#contact",
    icon: "fa-envelope-open",
  },
});
const route = useRoute();

const isActiveNavLink = (link: string) => {
  //We compare the given name with the route current name.
  console.log(route, link);
  return !!(route.fullPath === `/${link}`);
};
</script>

<template>
  <!-- -translate-y-5 -->
  <nav
    id="nav"
    class="flex px-4 md:px-8 space-x-4 md:space-x-8 z-10 text-orange-200 tracking-widest"
  >
    <template v-for="navLink in links" :key="navLink.path">
      <div class="bg-neutral px-1 py-2">
        <router-link
          v-if="props.isRouter"
          class="navbar-item"
          :class="[
            isActiveNavLink(navLink.label) && 'active-link exact-active-link',
          ]"
          :to="navLink.path"
        >
          <span class="text-[8px] underline-offset-0 no-underline">{{
            navLink.label
          }}</span>
        </router-link>
      </div>
    </template>
  </nav>
</template>
