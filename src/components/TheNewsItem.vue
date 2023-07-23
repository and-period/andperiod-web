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
  <div class="flex w-full flex-col gap-4 font-medium">
    <img
      :src="imgSrc"
      :alt="`${title}のサムネイル画像`"
      class="aspect-[4/3] rounded-md object-contain"
    />
    <div class="flex items-center gap-2 text-primary">
      <span class="font-outfit text-sm tracking-[1.6px] md:text-base">
        {{ publishAt }}</span
      >
      <span
        class="rounded-full border border-primary px-2 text-[11px] md:text-sm"
        >{{ tag }}</span
      >
    </div>
    <p class="line-clamp-3 text-sm leading-8 md:text-base">
      {{ title }}
    </p>
  </div>
</template>
