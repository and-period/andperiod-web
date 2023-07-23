<script setup lang="ts">
interface Props {
  isOpen: boolean;
}

defineProps<Props>();

interface Emits {
  (e: 'open'): void;
  (e: 'close'): void;
}

const emits = defineEmits<Emits>();

const linkItems = [
  {
    title: 'サービスについて',
    subTitle: 'Service',
    to: '/services',
  },
  {
    title: 'ニュース',
    subTitle: 'News',
    to: '/news',
  },
  {
    title: '会社情報',
    subTitle: 'About us',
    to: '/about',
  },
  {
    title: 'お問い合わせ',
    subTitle: 'Contact',
    to: '/contact',
  },
];

const handleClick = () => {
  emits('open');
};

const closeMenu = () => {
  emits('close');
};
</script>

<template>
  <div
    :class="{
      'md:h-30 relative flex w-full items-center justify-center px-6 py-4 md:py-8': true,
      'bg-default': !isOpen,
      'bg-primary': isOpen,
    }"
  >
    <div class="flex max-w-[1200px] grow items-center justify-between">
      <nuxt-link to="/" @click="closeMenu">
        <div
          :class="{
            'flex items-center gap-x-2 md:gap-x-4': true,
            'text-white': isOpen,
          }"
        >
          <the-brand-logo
            class="h-6 w-6 md:h-10 md:w-10"
            :color="isOpen ? 'white' : 'primary'"
          />
          <the-brand-title
            class="w-[126px] md:w-[200px]"
            :color="isOpen ? 'white' : 'primary'"
          />
        </div>
      </nuxt-link>
      <div
        :class="{
          'hidden items-center gap-x-12 font-medium tracking-[1.6px] text-primary lg:flex': true,
          'text-white': isOpen,
        }"
      >
        <nuxt-link v-for="(item, i) in linkItems" :key="i" :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="lg:hidden">
        <button class="h-10 w-10" @click="handleClick">
          <icons-the-bar3-icon v-show="!isOpen" class="text-primary" />
          <icons-the-close-icon v-show="isOpen" class="fill-white text-white" />
        </button>
      </div>
    </div>

    <div
      v-show="isOpen"
      class="absolute top-16 z-10 flex h-[calc(100vh_-_60px)] w-full flex-col gap-10 bg-primary p-8 text-white md:top-20 lg:hidden"
    >
      <nuxt-link to="/" @click="closeMenu">
        <p class="text-xl tracking-[2px]">トップページ</p>
        <span class="font-outfit text-xs tracking-[1.6px]"> Top </span>
      </nuxt-link>
      <nuxt-link
        v-for="(item, i) in linkItems"
        :key="i"
        :to="item.to"
        @click="closeMenu"
      >
        <p class="text-xl tracking-[2px]">
          {{ item.title }}
        </p>
        <span class="font-outfit text-xs tracking-[1.6px]">
          {{ item.subTitle }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
