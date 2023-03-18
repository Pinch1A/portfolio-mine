<script setup lang="ts">
import { PortfolioType, ProfileInfoType } from "@/types";
import { PropType, computed } from "vue";
import ProfileCard from "../components/ProfileCard.vue";
import BaseCircle from "../components/BaseCircle.vue";

const props = defineProps({
  portfolioInfo: {
    type: Object as PropType<PortfolioType>,
    required: true,
  },
});
const profileInfo = computed<ProfileInfoType>(() => ({
  owner: props.portfolioInfo.owner,
  role: props.portfolioInfo.role,
  email: props.portfolioInfo.email,
  dob: props.portfolioInfo.dob,
  nationality: props.portfolioInfo.nationality,
  phone: props.portfolioInfo.phone,
  profilePicture: props.portfolioInfo.profilePicture,
  links: props.portfolioInfo.links,
}));
</script>

<template>
  <section
    id="about"
    class="bg-neutral flex flex-col snap-center relative overflow-hidden"
  >
    <ProfileCard
      class="flex h-auto m-auto z-10 relative"
      :profile-info="profileInfo"
    />
    <BaseCircle
      color="error"
      custom-class="w-80 h-80 border-8 opacity-90 overflow-hidden"
      position-class="-right-20 top-30 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="info"
      custom-class="w-44 h-44 border-4 opacity-50 "
      position-class="-right-8 -bottom-8 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="secondary"
      custom-class="w-20 h-20 border-2 opacity-10 bg-secondary"
      position-class="left-16 bottom-2 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="secondary"
      custom-class="w-14 h-14 border-2 opacity-40 bg-secondary"
      position-class="left-[4.75rem] bottom-5 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="neutral"
      custom-class="w-10 h-10 border-2 border-neutral opacity-20 bg-secondary"
      position-class="left-[5.25rem] bottom-7 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="secondary"
      custom-class="w-24 h-24 border-4 opacity-40 "
      position-class="left-14 bottom-0 overflow-hidden"
      only-border
    />
    <BaseCircle
      color="warning"
      custom-class="w-7 h-7 border-2 opacity-70 "
      position-class="left-2 bottom-3 overflow-hidden"
      only-border
    />
  </section>
</template>
