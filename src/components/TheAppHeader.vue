<script setup lang="ts">
const linkItems = [
  {
    title: 'サービスについて',
    subTitle: 'Service',
    to: '',
  },
  {
    title: 'ニュース',
    subTitle: 'News',
    to: '/news',
  },
  {
    title: '会社情報',
    subTitle: 'About us',
    to: '',
  },
  {
    title: 'お問い合わせ',
    subTitle: 'Contact',
    to: '/contact',
  },
];

const isOpen = ref<boolean>(false);

const handleClick = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    :class="{
      'w-full md:h-30 md:py-8 px-2 py-4 relative flex items-center justify-center': true,
      'bg-primary': isOpen,
    }"
  >
    <div class="flex items-center justify-between max-w-[1200px] grow">
      <nuxt-link to="/">
        <div
          :class="{ 'flex items-center gap-x-4': true, 'text-white': isOpen }"
        >
          <the-brand-logo
            class="h-10 w-10"
            :color="isOpen ? 'white' : 'primary'"
          />
          <the-brand-title :color="isOpen ? 'white' : 'primary'" />
        </div>
      </nuxt-link>
      <div
        :class="{
          'gap-x-12 items-center text-primary lg:flex hidden': true,
          'text-white': isOpen,
        }"
      >
        <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="lg:hidden">
        <button class="h-10 w-10" @click="handleClick">
          <icons-the-bar3-icon class="text-primary" v-show="!isOpen" />
          <icons-the-close-icon class="text-white fill-white" v-show="isOpen" />
        </button>
      </div>
    </div>

    <div
      v-show="isOpen"
      class="absolute top-20 w-full bg-primary text-white flex flex-col h-[calc(100vh_-_80px)] p-8 gap-10 lg:hidden"
    >
      <nuxt-link to="/">
        <p class="text-xl">トップページ</p>
        <span class="text-xs"> Top </span>
      </nuxt-link>
      <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to">
        <p class="text-xl">
          {{ item.title }}
        </p>
        <span class="text-xs">
          {{ item.subTitle }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
