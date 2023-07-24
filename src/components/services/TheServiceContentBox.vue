<script setup lang="ts">
interface Props {
  title: string
  subtitle: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex w-full flex-col items-center rounded-3xl bg-white px-6 py-8 md:px-24 md:py-20"
  >
    <div class="w-full text-left font-medium">
      <h2
        class="mb-4 font-outfit text-[24px] tracking-[2px] text-primary md:text-[40px] md:tracking-[4px]"
      >
        {{ title }}
      </h2>
      <p
        class="mb-[40px] text-[14px] tracking-widest md:mb-[120px] md:text-[20px]"
      >
        {{ subtitle }}
      </p>
    </div>

    <slot />
  </div>
</template>
