<script setup lang="ts">
const isOpen = ref<boolean>(false)

const handleOpenMenu = () => {
  isOpen.value = !isOpen.value
}

const handleCloseMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <div
    :class="{
      'flex h-full flex-col bg-default': true,
      'overflow-hidden': isOpen,
    }"
  >
    <the-app-header
      class="sticky top-0 z-20"
      :is-open="isOpen"
      @open="handleOpenMenu"
      @close="handleCloseMenu"
    />
    <div class="flex grow justify-center">
      <div class="w-full max-w-[1200px]">
        <slot />
      </div>
    </div>
    <the-app-footer />
  </div>
</template>
