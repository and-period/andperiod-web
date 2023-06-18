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
  <div class="w-full flex flex-col gap-4">
    <img :src="imgSrc" />
    <div class="flex gap-2 items-center text-primary text-xs">
      <span> {{ publishAt }}</span>
      <span class="border px-2 border-primary rounded-full">{{ tag }}</span>
    </div>
    <p class="text-sm leading-8 line-clamp-3">
      {{ title }}
    </p>
  </div>
</template>
