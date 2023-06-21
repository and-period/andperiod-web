<template>
  <div class="bg-default flex flex-col h-full">
    <the-app-header />
    <div class="grow flex justify-center items-center">
      <div class="max-w-[1200px] w-full">
        <slot />
      </div>
    </div>
    <the-app-footer />
  </div>
</template>
