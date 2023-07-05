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
      'w-full md:h-30 md:py-8 px-6 py-4 relative flex items-center justify-center': true,
      'bg-default': !isOpen,
      'bg-primary': isOpen,
    }"
  >
    <div class="flex items-center justify-between max-w-[1200px] grow">
      <nuxt-link to="/" @click="closeMenu">
        <div
          :class="{
            'flex items-center md:gap-x-4 gap-x-2': true,
            'text-white': isOpen,
          }"
        >
          <the-brand-logo
            class="md:h-10 md:w-10 h-6 w-6"
            :color="isOpen ? 'white' : 'primary'"
          />
          <the-brand-title
            class="md:w-[200px] w-[126px]"
            :color="isOpen ? 'white' : 'primary'"
          />
        </div>
      </nuxt-link>
      <div
        :class="{
          'gap-x-12 items-center text-primary lg:flex hidden font-medium tracking-[1.6px]': true,
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
      class="absolute z-10 md:top-20 top-16 w-full bg-primary text-white flex flex-col h-[calc(100vh_-_60px)] p-8 gap-10 lg:hidden"
    >
      <nuxt-link to="/" @click="closeMenu">
        <p class="text-xl tracking-[2px]">トップページ</p>
        <span class="text-xs font-outfit tracking-[1.6px]"> Top </span>
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
        <span class="text-xs font-outfit tracking-[1.6px]">
          {{ item.subTitle }}
        </span>
      </nuxt-link>
    </div>
  </div>
</template>
