<script setup lang="ts">
const linkItems = [
  {
    title: 'サービスについて',
    to: '',
  },
  {
    title: 'ニュース',
    to: '',
  },
  {
    title: '会社情報',
    to: '',
  },
  {
    title: 'お問い合わせ',
    to: '',
  },
];
</script>

<template>
  <div class="w-full h-30 p-8 flex items-center justify-between">
    <nuxt-link to="/">
      <div class="flex items-center gap-x-4">
        <the-brand-logo class="h-10 w-10" />
        <the-brand-title />
      </div>
    </nuxt-link>
    <div class="flex gap-x-12 items-center text-primary">
      <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to" class="">
        {{ item.title }}
      </nuxt-link>
    </div>
  </div>
</template>
