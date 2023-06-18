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
    to: '',
  },
];
</script>

<template>
  <div class="w-full bg-primary text-white text-center py-6">
    <div class="flex gap-10 items-center justify-center mt-8">
      <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to">
        {{ item.title }}
      </nuxt-link>
    </div>
    <p class="mt-10 text-sm">© andperiod Inc. All rights reserved.</p>
  </div>
</template>
