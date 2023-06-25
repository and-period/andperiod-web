<script setup lang="ts">
const newsItems = [
  {
    imgSrc: '/img/1.png',
    publishAt: '2023.05.01',
    tag: 'プレスリリース',
    title:
      '全国の生産者が紹介する商品をオンラインで購入できるライブコマースサービス「ふるマル」をリリースしました。',
  },
  {
    imgSrc: '/img/1.png',
    publishAt: '2023.05.01',
    tag: 'プレスリリース',
    title:
      '全国の生産者が紹介する商品をオンラインで購入できるライブコマースサービス「ふるマル」をリリースしました。',
  },
  {
    imgSrc: '/img/1.png',
    publishAt: '2023.05.01',
    tag: 'プレスリリース',
    title:
      '全国の生産者が紹介する商品をオンラインで購入できるライブコマースサービス「ふるマル」をリリースしました。',
  },
];

const { data } = await useAsyncData('index', () => {
  return queryContent('news').sort({ publishAt: 1 }).limit(3).find();
});
</script>

<template>
  <div class="w-full flex flex-col gap-10 mb-10 p-6">
    <div>
      <div class="mx-auto max-w-max relative">
        <img
          class="rounded-3xl min-h-[560px] object-cover"
          src="/img/top.png"
          loading="lazy"
          alt="top page thumbnail"
        />
        <div
          class="absolute lg:top-24 top-[32px] lg:right-[84px] left-[36px] inline-flex flex-col items-start gap-6 lg:text-[32px] text-[20px] text-primary font-medium lg:tracking-[.25em] tracking-[0.75em] [writing-mode:vertical-rl]"
        >
          <span class="lg:py-4 py-2 inline-block rounded-lg bg-white"
            >継承主体から</span
          >
          <span class="lg:py-4 py-2 inline-block rounded-lg bg-white"
            >新たな一次産業を</span
          >
          <span class="lg:py-4 py-2 inline-block rounded-lg bg-white"
            >ともに創造する未来へ</span
          >
        </div>
      </div>
    </div>

    <div
      class="bg-white rounded-3xl w-full items-center py-8 px-6 gap-x-20 gap-y-10 flex flex-col lg:flex-row md:py-20 md:px-24"
    >
      <div class="w-full text-left whitespace-nowrap">
        <h2 class="text-primary text-6xl mb-2 font-outfit tracking-widest font-medium">Service</h2>
        <p>サービスについて</p>
      </div>
      <div class="flex flex-col gap-y-4">
        <p class="leading-10">
          ライブ配信で全国の「ふるさと」を感じながら新しい購買体験が可能となるオンラインマルシェサービス「ふるマル」を中心としたシステム開発事業・販路開拓事業・フードロス対策事業など生産者・消費者双方に寄り添ったサービスの展開を行っています。
        </p>
        <div class="flex justify-center md:justify-end">
          <nuxt-link
            class="block max-w-max bg-primary text-white rounded-full py-3 px-10 hover:bg-opacity-80"
            to="/services"
          >
            View more +
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="bg-white rounded-3xl w-full flex flex-col py-8 px-6 gap-y-10 items-center md:py-20 md:px-24"
    >
      <div class="w-full text-left whitespace-nowrap">
        <h2 class="text-primary text-6xl mb-2">News</h2>
        <p>ニュース</p>
      </div>

      <div class="w-full gap-8 grid lg:grid-cols-3 grid-cols-1">
        <nuxt-link v-for="(item, i) in data" :key="i" :to="item._path">
          <the-news-item
            :img-src="item.thumbnailUrl"
            :tag="item.tag"
            :title="item.title"
            :publish-at="item.publishAt"
          />
        </nuxt-link>
      </div>

      <nuxt-link
        class="block max-w-max bg-primary text-white rounded-full py-3 px-10 text-lg hover:bg-opacity-80"
        to="/news"
      >
        View more +
      </nuxt-link>
    </div>
  </div>
</template>
