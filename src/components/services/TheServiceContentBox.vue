<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="bg-white rounded-3xl w-full flex flex-col py-8 px-6 items-center md:py-20 md:px-24"
  >
    <div class="w-full text-left font-medium">
      <h2
        class="text-primary text-[24px] md:text-[40px] md:tracking-[4px] tracking-[2px] mb-4 font-outfit"
      >
        {{ title }}
      </h2>
      <p
        class="text-[14px] md:text-[20px] md:text-xl tracking-widest mb-[40px] md:mb-[120px]"
      >
        {{ subtitle }}
      </p>
    </div>

    <slot />
  </div>
</template>
