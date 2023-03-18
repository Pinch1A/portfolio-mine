<script setup lang="ts">
import { Sizes, TriangleDirection } from "@/types";
import { computed, PropType } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "bg-info",
  },
  size: {
    type: String as PropType<Sizes>,
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
  type: {
    type: String as PropType<TriangleDirection>,
    default: "up",
  },
});

const upTriangle = "rotate-45 transform origin-bottom-left";
const downTriangle = "-rotate-45 transform origin-top-left";

const leftTrianlge = "-rotate-45 transform origin-top-right";
const rightTriangle = "rotate-45 transform origin-top-left";

const bottomLeftTriangle = "-rotate-45 transform origin-bottom-right";
const bottomRightriangle = "rotate-45 transform origin-bottom-left";

const topLeftTriangle = "-rotate-45 transform origin-top-left";
const topRightriangle = "rotate-45 transform origin-top-right";

const triangleType = computed(() => {
  switch (props.type) {
    case TriangleDirection.UP:
      return upTriangle;
    case TriangleDirection.DOWN:
      return downTriangle;
    case TriangleDirection.LEFT:
      return leftTrianlge;
    case TriangleDirection.RIGHT:
      return rightTriangle;
    case TriangleDirection["BOTTOM-LEFT"]:
      return bottomLeftTriangle;
    case TriangleDirection["BOTTOM-RIGHT"]:
      return bottomRightriangle;
    case TriangleDirection["TOP-LEFT"]:
      return topLeftTriangle;
    case TriangleDirection["TOP-RIGHT"]:
      return topRightriangle;
    default:
      return "";
  }
});

const styleSize = computed(() => {
  switch (props.size) {
    case Sizes.TINY:
      return "width: 23px; height: 14px;";
    case Sizes.NORMAL:
      return "width: 23px; height: 14px;";
    case Sizes.BIG:
      return "width: 23px; height: 14px;";
    case Sizes.HUGE:
      return "width: 64px; height: 45px;";
    default:
      return "";
  }
});
</script>

<template>
  <div class="absolute" :class="[positionClass]">
    <div class="overflow-hidden inline-block">
      <div
        :class="[`bg-${color}`, triangleType, customClass]"
        :style="styleSize"
      ></div>
    </div>
  </div>
  <!-- <div>
    <div class="w-16 overflow-hidden inline-block">
      <div class="h-11 w-11" :class="`${bgColor} ${upTriangle}`"></div>
    </div>
    <div class="w-16 overflow-hidden inline-block">
      <div class="h-11 w-11" :class="`${bgColor} ${downTriangle}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${leftTrianlge}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${rightTriangle}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${bottomLeftTriangle}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${bottomRightriangle}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${topLeftTriangle}`"></div>
    </div>

    <div class="w-11 overflow-hidden inline-block">
      <div class="h-16" :class="`${bgColor} ${topRightriangle}`"></div>
    </div>
  </div>
  -->
</template>
