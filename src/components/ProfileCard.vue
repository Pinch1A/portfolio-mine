<script setup lang="ts">
import { computed, PropType } from "vue";
import { ProfileInfoType } from "@/types";

const props = defineProps({
  profileInfo: {
    type: Object as PropType<ProfileInfoType>,
    required: true,
  },
});

const getImgUrl = (pic: string) => require("../assets/img/" + pic);

const borderAnimationClass = "";

const skillTextClass = computed(
  () =>
    "opacity-0 group-hover:opacity-100 group-hover:delay:200 text-lg text-primary-focus"
);

const imgUrl = computed(() => getImgUrl(props.profileInfo.profilePicture));
</script>

<template>
  <div
    class="flex p-3 max-w-[38rem] md:max-w-[60rem] md:w-[90%] mx-auto rounded-xl group motion-safe:transition-all motion-safe:duration-700 shadow-lg group-hover:shadow-lg z-10"
  >
    <figure
      role="figure"
      :aria-label="profileInfo.owner"
      :label="profileInfo.owner"
      class="w-60 h-60 m-2 bg-red-500 rounded-full outline outline-2 outline-offset-2 outline-error before:content-[''] before:absolute before:block before:pointer-events-none before:rounded-full before:h-full before:w-full before:bg-neutral before:-z-[1] before:shadow-lg group-hover:before:scale-[1.5] motion-safe:before:transition-all motion-safe:transform-gpu motion-safe:before:duration-500 before:origin-center group-hover:blur-none"
    >
      <img
        class="p-1 h-full w-full rounded-full max-w-full bg-neutral object-cover z-20 blur-sm relative m-auto transition group-hover:blur-0"
        :src="imgUrl"
        :alt="profileInfo.owner"
      />
      <figcaption class="hidden">{{ profileInfo.owner }}</figcaption>
    </figure>
    <div
      class="text-center h-8 w-14 border border-primary-focus transition ease-in duration-700 blur-sm z-10 rounded group-hover:blur-0 group-hover:delay-100 group-hover:scale-[1.2] shadow-xl"
    >
      <span :class="[skillTextClass]"> Vuejs </span>
    </div>
    <div
      class="absolute top-20 right-10 text-center h-8 w-28 border border-primary-focus transition ease-in duration-700 blur-sm z-10 rounded group-hover:blur-0 group-hover:delay-100 group-hover:scale-[1.2] shadow-xl"
    >
      <span :class="[skillTextClass]"> TailwindCSS </span>
    </div>
    <div
      class="absolute -bottom-4 right-22 text-center h-8 w-14 border border-primary-focus transition ease-in duration-700 blur-sm z-10 rounded group-hover:blur-0 group-hover:delay-100 group-hover:scale-[1.2] shadow-xl"
    >
      <span :class="[skillTextClass]"> React </span>
    </div>

    <div class="card-body text-neutral-content">
      <div class="flex justify-left">
        <header class="text-neutral-content">
          <h3
            class="card-title text-left text-2xl transition text-primary-focus mt-2 group-hover:text-accent-content dark:group-hover:text-accent-content relative font-mono font-extralight"
          >
            {{ profileInfo.owner }}
          </h3>
          <div class="flex justify-left">
            <ul class="flex space-x-3 text-neutral-content h-9">
              <li
                v-for="link in profileInfo.links"
                :key="link.label"
                class="motion-safe:translate-y-16 group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition text-xl border border-neutral-content rounded-full h-8 w-8 text-center flex justify-center shadow-none motion-safe:hover:bg-error motion-safe:hover:shadow-lg"
              >
                <a
                  :href="link.url"
                  class="hover:text-neutral flex self-center rounded-full transition"
                  :aria-label="`Visit me on ${link.label}`"
                >
                  <font-awesome-icon :icon="link.icon" />
                </a>
              </li>
              <li
                class="motion-safe:translate-y-16 group-hover:translate-y-0 motion-safe:delay-100 motion-safe:transition text-xl border border-neutral-content rounded-full h-8 w-8 text-center flex justify-center shadow-none motion-safe:hover:bg-error motion-safe:hover:shadow-lg"
              >
                <a
                  :href="profileInfo.resume"
                  class="hover:text-neutral flex self-center rounded-full transition"
                  aria-label="Download my resume"
                  alt="Download my resume"
                >
                  <font-awesome-icon icon="fa-solid fa-passport" />
                </a>
              </li>
            </ul>
          </div>
          <p class="text-left text-neutral-content font-semibold relative">
            {{ profileInfo.role }}
          </p>
          <h1
            className="font-mono mt-2 text-sm text-base-300 md:text-sm opacity-0 group-hover:opacity-100 motion-safe:delay-200"
          >
            <span class="relative">
              <span
                class="h-8 pt-2 whitespace-nowrap text-brand-accent bg-transparent text-white"
              >
                In love with FE Development
                <span class="text-sm bg-transparent text-white">👋</span>
              </span>
              <span
                class="cursor absolute -bottom-0 left-0 -top-1 w-full inline-block bg-neutral transition-width animate-type will-change z-1"
              ></span>
            </span>
          </h1>
        </header>
      </div>
    </div>
  </div>
</template>

<style>
.cursor::after {
  display: block;
  content: "";
  position: absolute;
  width: 4px;
  height: 100%;
  background-color: #fff;
  animation: cursor 0.6s linear infinite alternate;
  will-change: opacity;
}

@keyframes cursor {
  0%,
  40% {
    opacity: 1;
  }

  60%,
  100% {
    opacity: 0;
  }
}
</style>
