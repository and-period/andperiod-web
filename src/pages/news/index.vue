<template>
  <div class="w-full text-left whitespace-nowrap my-20">
    <h2 class="text-primary text-6xl mb-2">News</h2>
    <p>ニュース</p>
  </div>

  <ContentList path="/news" v-slot="{ list }">
    <div class="grid grid-cols-3 gap-10">
      <nuxt-link
        :to="article._path"
        v-for="article in list"
        :key="article._path"
      >
        <the-news-item
          class="hover:bg-white hover:rounded-xl"
          :img-src="article.thumbnailUrl"
          :publish-at="article.publishAt"
          :tag="article.tag"
          :title="article.title"
        />
      </nuxt-link>
    </div>
  </ContentList>
</template>
