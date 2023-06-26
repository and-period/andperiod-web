<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="bg-white rounded-3xl w-full flex flex-col py-8 px-6 gap-y-[120px] items-center md:py-20 md:px-24"
  >
    <div class="w-full text-left font-medium whitespace-nowrap">
      <h2 class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2">
        {{ title }}
      </h2>
      <p class="text-[13px] md:text-xl tracking-widest">
        {{ subtitle }}
      </p>
    </div>

    <slot />
  </div>
</template>
