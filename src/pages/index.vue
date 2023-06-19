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
</script>

<template>
  <div class="w-full flex flex-col gap-10 mb-10">
    <div>
      <div class="mx-auto max-w-max">
        <the-brand-logo />
      </div>
      <p
        class="mt-20 text-center text-4xl whitespace-pre-wrap"
        v-text="'継承主体から新たな一次産業を\nともに創造する未来へ'"
      />
    </div>

    <div
      class="bg-white rounded-3xl w-full items-center py-8 px-6 gap-x-20 gap-y-10 flex flex-col lg:flex-row md:py-20 md:px-24"
    >
      <div class="w-full text-left whitespace-nowrap">
        <h2 class="text-primary text-6xl mb-2">Service</h2>
        <p>サービスについて</p>
      </div>
      <div class="flex flex-col gap-y-4">
        <p class="leading-10">
          ライブ配信で全国の「ふるさと」を感じながら新しい購買体験が可能となるオンラインマルシェサービス「ふるマル」を中心としたシステム開発事業・販路開拓事業・フードロス対策事業など生産者・消費者双方に寄り添ったサービスの展開を行っています。
        </p>
        <div class="flex justify-center md:justify-end">
          <nuxt-link
            class="block max-w-max bg-primary text-white rounded-full py-3 px-10 text-l hover:bg-opacity-80"
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
        <the-news-item
          v-for="(item, i) in newsItems"
          :key="i"
          :img-src="item.imgSrc"
          :tag="item.tag"
          :title="item.title"
          :publish-at="item.publishAt"
        />
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
