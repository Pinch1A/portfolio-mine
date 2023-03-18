<script setup lang="ts">
import { Sizes } from "@/types";
import { computed, PropType } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "bg-info",
  },
  size: {
    type: String as PropType<Sizes | undefined>,
    default: "normal",
  },
  customClass: {
    type: String,
    default: "",
  },
  positionClass: {
    type: String,
    default: "bottom-0 left-0",
  },
  onlyBorder: {
    type: Boolean,
    default: false,
  },
  isAbsolute: {
    type: Boolean,
    default: true,
  },
});

const sizeClass = computed(() => {
  switch (props.size) {
    case Sizes.TINY:
      return "w-8 h-8";
    case Sizes.NORMAL:
      return "w-12 h-12";
    case Sizes.BIG:
      return "w-24 h-24";
    case Sizes.HUGE:
      return "w-58 h-58";
    default:
      return "";
  }
});

const onlyCirconference = () => {
  if (props.onlyBorder) {
    return `bg-transparent border border-${props.color}`;
  }
};
</script>

<template>
  <div :class="[positionClass, isAbsolute && 'absolute']">
    <div class="overflow-hidden inline-block">
      <div
        class="rounded-full"
        :class="[
          props.onlyBorder ? onlyCirconference() : `bg-${color}`,
          customClass,
          sizeClass,
        ]"
      ></div>
    </div>
  </div>
</template>
