<script setup lang="ts">
interface Props {
  imgSrc: string;
  publishAt: string;
  tag: string;
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full flex flex-col gap-4 font-medium">
    <img :src="imgSrc" />
    <div class="flex gap-2 items-center text-primary">
      <span class="md:text-base text-sm font-outfit"> {{ publishAt }}</span>
      <span class="border md:text-sm text-[11px] px-2 border-primary rounded-full">{{ tag }}</span>
    </div>
    <p class="md:text-base text-sm leading-8 line-clamp-3">
      {{ title }}
    </p>
  </div>
</template>
