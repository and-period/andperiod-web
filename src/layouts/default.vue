<template>
  <div class="bg-default flex flex-col h-full">
    <the-app-header class="sticky top-0 z-20" />
    <div class="grow flex justify-center">
      <div class="max-w-[1200px] w-full">
        <slot />
      </div>
    </div>
    <the-app-footer />
  </div>
</template>
