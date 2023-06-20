<template>
  <div class="bg-default flex flex-col h-full">
    <the-app-header />
    <div class="md:px-20 px-4 grow">
      <slot />
    </div>
    <the-app-footer />
  </div>
</template>
