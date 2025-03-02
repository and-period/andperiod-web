<script setup lang="ts">
useSeoMeta({
  title: 'ニュース一覧 - 株式会社アンドピリオド and period',
})

const PER_PAGE_ITEM = 9
const currentPage = ref<number>(1)

const { data: allArticles } = await useAsyncData('total', () => {
  return queryContent('/news').find()
})

const total = computed<number>(() => {
  if (allArticles.value) {
    return allArticles.value?.length
  } else {
    return 0
  }
})

const totalPageCount = computed<number>(() => {
  return Math.ceil(total.value / PER_PAGE_ITEM)
})

const pages = computed<string[]>(() => {
  const pages: string[] = []
  // ページ数が3以下の場合は全て表示
  if (totalPageCount.value <= 3) {
    for (let i = 1; i <= totalPageCount.value; i++) {
      pages.push(i.toString())
    }
    return pages
  }

  // 1ページ目は常に表示
  pages.push('1')

  // 現在のページが3よりも大きい場合は三点リーダーを表示
  if (currentPage.value > 3) {
    pages.push('...')
  }

  // 現在のページの前後2ページを表示
  const start = Math.max(2, currentPage.value - 1)
  const end = Math.min(totalPageCount.value - 1, currentPage.value + 1)
  for (let i = start; i <= end; i++) {
    pages.push(i.toString())
  }

  // 現在のページが最後から3ページ目よりも小さい場合は三点リーダーを表示
  if (currentPage.value < totalPageCount.value - 2) {
    pages.push('...')
  }

  // 最後のページを表示
  pages.push(totalPageCount.value.toString())

  return pages
})

const handleClickPrevButton = () => {
  currentPage.value -= 1
}

const handleClickPageButton = (page: string) => {
  if (page === '...') {
    return
  }

  currentPage.value = Number(page)
}

const handleClickNextButton = () => {
  currentPage.value += 1
}

const { data: articles, refresh } = await useAsyncData('news', () => {
  return queryContent('/news')
    .sort({ publishAt: -1 })
    .limit(PER_PAGE_ITEM)
    .skip(PER_PAGE_ITEM * (currentPage.value - 1))
    .find()
})

watch(currentPage, () => {
  refresh()
})
</script>

<template>
  <div class="px-6 md:px-24">
    <div class="my-20 w-full whitespace-nowrap text-left">
      <h2
        class="mb-2 font-outfit text-[40px] font-medium tracking-widest text-primary md:text-[56px]"
      >
        News
      </h2>
      <p class="text-sm font-medium tracking-[2px] md:text-xl">ニュース</p>
    </div>

    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <nuxt-link
        v-for="article in articles"
        :key="article._path"
        :to="article._path"
      >
        <the-news-item
          :img-src="article.thumbnailUrl"
          :publish-at="article.publishAt"
          :tag="article.tag"
          :title="article.title"
        />
      </nuxt-link>
    </div>

    <div class="my-10 flex items-center justify-center gap-4 md:gap-[50px]">
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
        v-for="page in pages"
        :key="page"
        :class="{
          'h-10 w-10 px-4 py-2': true,
          'rounded-full bg-primary text-white': currentPage.toString() === page,
          'text-primary': currentPage.toString() !== page,
        }"
        :disabled="page === '...'"
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
