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
  {
    title: 'プライバシーポリシー',
    to: '/privacy',
  },
];
</script>

<template>
  <div class="w-full bg-primary text-white p-6">
    <div
      class="flex mt-8 flex-col gap-5 items-start md:flex-row md:justify-center md:gap-10 md:items-center"
    >
      <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to">
        {{ item.title }}
      </nuxt-link>
    </div>
    <p class="mt-10 text-sm md:text-center">
      © andperiod Inc. All rights reserved.
    </p>
  </div>
</template>
