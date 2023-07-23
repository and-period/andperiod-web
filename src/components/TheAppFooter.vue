<script setup lang="ts">
const linkItems = [
  {
    title: 'サービスについて',
    to: '/services',
  },
  {
    title: 'ニュース',
    to: '/news',
  },
  {
    title: '会社情報',
    to: '/about',
  },
  {
    title: 'お問い合わせ',
    to: '/contact',
  },
  {
    title: 'プライバシーポリシー',
    to: '/privacy',
  },
];
</script>

<template>
  <div class="w-full bg-primary p-6 text-white">
    <div
      class="mt-8 flex flex-col items-start gap-5 font-medium tracking-[1.6px] md:flex-row md:items-center md:justify-center md:gap-10"
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
