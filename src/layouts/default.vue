<template>
  <div class="bg-default flex flex-col h-full">
    <the-app-header />
    <div class="md:px-24 px-6 grow">
      <slot />
    </div>
    <the-app-footer />
  </div>
</template>
