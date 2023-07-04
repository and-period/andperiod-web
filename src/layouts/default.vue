<script setup lang="ts">
const isOpen = ref<boolean>(false);

const handleOpenMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleCloseMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <div
    :class="{
      'bg-default flex flex-col h-full': true,
      'overflow-hidden': isOpen,
    }"
  >
    <the-app-header
      class="sticky top-0 z-20"
      :is-open="isOpen"
      @open="handleOpenMenu"
      @close="handleCloseMenu"
    />
    <div class="grow flex justify-center">
      <div class="max-w-[1200px] w-full">
        <slot />
      </div>
    </div>
    <the-app-footer />
  </div>
</template>
