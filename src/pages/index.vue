<script setup lang="ts">
const { data } = await useAsyncData('index', () => {
  return queryContent('news').sort({ publishAt: -1 }).limit(3).find()
})
</script>

<template>
  <div class="mb-10 flex w-full flex-col gap-10 px-6 pb-6 2xl:px-0">
    <div>
      <div class="relative mx-auto max-w-max">
        <img
          class="min-h-[560px] rounded-3xl object-cover"
          src="/img/top.jpg"
          loading="lazy"
          alt="top page thumbnail"
        />
        <div
          class="absolute left-[36px] top-[32px] isolate inline-flex flex-col items-start gap-6 text-[20px] font-medium tracking-[0.75em] text-primary mix-blend-multiply [writing-mode:vertical-rl] lg:left-[200px] lg:top-24 lg:text-[32px] lg:tracking-[.25em]"
        >
          <span class="inline-block rounded py-2 lg:pb-2 lg:pt-4">
            継承主体の現在から
          </span>
          <span class="inline-block rounded py-2 lg:pb-2 lg:pt-4"
            >新たな一次産業を</span
          >
          <span class="inline-block rounded py-2 lg:pb-2 lg:pt-4"
            >ともに創造する未来へ</span
          >
        </div>
      </div>
    </div>

    <div
      class="flex w-full flex-col items-center gap-x-20 gap-y-10 rounded-3xl bg-white px-6 py-8 md:px-24 md:py-20 lg:flex-row"
    >
      <div class="w-full whitespace-nowrap text-left">
        <h2
          class="mb-2 font-outfit text-[40px] font-medium tracking-widest text-primary md:text-[56px]"
        >
          Service
        </h2>
        <p class="text-sm font-medium tracking-[2px] md:text-xl">
          サービスについて
        </p>
      </div>
      <div class="flex flex-col gap-y-4">
        <p
          class="text-base font-medium leading-8 tracking-[1.6px] md:text-xl md:leading-[48px] md:tracking-[2px]"
        >
          ディープジャパンと共創する新時代を作る産地直送型映像メディア「ふるマル」を中心としたシステム開発事業・販路開拓事業・フードロス対策事業など生産者・消費者双方に寄り添ったサービスの展開を行っています。
        </p>
        <div class="flex justify-center md:justify-end">
          <nuxt-link
            class="block max-w-max rounded-full bg-primary px-10 py-3 font-outfit text-base tracking-[1.6px] text-white hover:bg-opacity-80 md:text-2xl md:tracking-[2px]"
            to="/services"
          >
            View more +
          </nuxt-link>
        </div>
      </div>
    </div>

    <div
      class="flex w-full flex-col items-center gap-y-10 rounded-3xl bg-white px-6 py-8 md:px-24 md:py-20"
    >
      <div class="w-full whitespace-nowrap text-left">
        <h2
          class="mb-2 font-outfit text-[40px] font-medium tracking-widest text-primary md:text-[56px]"
        >
          News
        </h2>
        <p class="text-sm font-medium tracking-[2px] md:text-xl">ニュース</p>
      </div>

      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-3">
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
        class="block max-w-max rounded-full bg-primary px-10 py-3 font-outfit text-base tracking-[1.6px] text-white hover:bg-opacity-80 md:text-2xl md:tracking-[2px]"
        to="/news"
      >
        View more +
      </nuxt-link>
    </div>
  </div>
</template>
