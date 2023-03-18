<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const links = ref({
  about: {
    path: "/about",
    label: "About",
    sectionId: "#about",
    icon: "fa-id-card",
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

const isActiveRoute = (sectionId: string) => {
  console.log(route.hash, sectionId);
  return route.hash === sectionId && "exact-active-link";
};
</script>

<template>
  <nav
    role="navigation"
    id="nav"
    class="flex justify-end px-4 space-x-4 text-secondary-content text-xs lowercase tracking-[.3rem] text-clip font-extralight fixed bg-neutral w-full border boder-b border-t-0 border-l-0 border-r-0 border-error z-10"
  >
    <template v-for="navLink in links" :key="navLink.path">
      <div class="bg-neutral px-1 py-2 flex flex-col self-center">
        <router-link
          class="navbar-item"
          :class="[isActiveRoute(navLink.sectionId)]"
          :to="navLink.sectionId"
          v-scroll-to="{ el: navLink.sectionId, container: '#container' }"
        >
          <font-awesome-icon :icon="`fa-solid ${navLink.icon} text-lg`" />
          {{ navLink.label }}
        </router-link>
      </div>
    </template>
  </nav>
</template>
