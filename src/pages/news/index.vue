<script setup lang="ts">
useSeoMeta({
  title: 'ニュース一覧 - 株式会社アンドピリオド and period',
});

const PER_PAGE_ITEM = 9;
const currentPage = ref<number>(1);

const { data: allArticles } = await useAsyncData('total', () => {
  return queryContent('/news').find();
});

const total = computed<number>(() => {
  if (allArticles.value) {
    return allArticles.value?.length;
  } else {
    return 0;
  }
});

const totalPageCount = computed<number>(() => {
  return Math.ceil(total.value / PER_PAGE_ITEM);
});

const handleClickPrevButton = () => {
  currentPage.value -= 1;
};

const handleClickPageButton = (page: number) => {
  currentPage.value = page;
};

const handleClickNextButton = () => {
  currentPage.value += 1;
};

const { data: articles, refresh } = await useAsyncData('news', () => {
  return queryContent('/news')
    .sort({ publishAt: -1 })
    .limit(PER_PAGE_ITEM)
    .skip(PER_PAGE_ITEM * (currentPage.value - 1))
    .find();
});

watch(currentPage, () => {
  refresh();
});
</script>

<template>
  <div class="md:px-24 px-6">
    <div class="w-full text-left whitespace-nowrap my-20">
      <h2
        class="text-primary text-[40px] md:text-[56px] mb-2 font-outfit tracking-widest font-medium"
      >
        News
      </h2>
      <p class="text-sm md:text-xl font-medium tracking-[2px]">ニュース</p>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <nuxt-link
        :to="article._path"
        v-for="article in articles"
        :key="article._path"
      >
        <the-news-item
          :img-src="article.thumbnailUrl"
          :publish-at="article.publishAt"
          :tag="article.tag"
          :title="article.title"
        />
      </nuxt-link>
    </div>

    <div class="my-10 flex items-center justify-center gap-[50px]">
      <button
        :class="{
          'h-10 w-10 px-4 py-2': true,
          'text-primary': currentPage !== 1,
          'opacity-25': currentPage === 1,
        }"
        :disabled="currentPage === 1"
        @click="handleClickPrevButton"
      >
        ←
      </button>
      <button
        v-for="page in totalPageCount"
        :key="page"
        :class="{
          'h-10 w-10 px-4 py-2': true,
          'bg-primary text-white rounded-full': currentPage === page,
          'text-primary': currentPage !== page,
        }"
        @click="handleClickPageButton(page)"
      >
        {{ page }}
      </button>
      <button
        :class="{
          'h-10 w-10 px-4 py-2': true,
          'text-primary': currentPage !== totalPageCount,
          'opacity-25': currentPage === totalPageCount,
        }"
        :disabled="currentPage === totalPageCount"
        @click="handleClickNextButton"
      >
        →
      </button>
    </div>
  </div>
</template>
