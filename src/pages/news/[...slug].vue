<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s - 株式会社アンドピリオド and period',
})

const route = useRoute()

const currentPath = computed<string>(() => {
  const slug = route.params.slug
  if (typeof slug === 'string') {
    return slug
  } else {
    return slug.join('/')
  }
})

const prevPath = ref<string>('')
const nextPath = ref<string>('')

const fetchSurround = async (path: string) => {
  const data = await queryContent('news')
    .only('_path')
    .findSurround(`/news/${path}`)

  prevPath.value = data[0]?._path || ''
  nextPath.value = data[1]?._path || ''
}

await useAsyncData('article', () => {
  return fetchSurround(currentPath.value)
})

watch(
  () => route.params.slug,
  () => {
    fetchSurround(currentPath.value)
  },
)
</script>

<template>
  <div class="px-6 md:px-24">
    <ContentDoc v-slot="{ doc }">
      <div class="my-10 items-center gap-4 text-primary md:flex">
        <div
          class="font-outfit text-base font-medium tracking-[2px] md:text-2xl"
        >
          {{ doc.publishAt }}
        </div>
        <div
          class="mt-4 max-w-max rounded-xl border border-primary px-3 text-[11px] md:mt-0 md:text-sm"
        >
          {{ doc.tag }}
        </div>
      </div>

      <ContentRenderer class="prose prose-stone max-w-none" :value="doc" />

      <div
        class="my-10 flex justify-center gap-6 whitespace-nowrap text-sm md:gap-[120px] md:text-base"
      >
        <nuxt-link
          :to="prevPath"
          :class="{
            block: true,
            'text-primary': prevPath,
            'opacity-25': !prevPath,
          }"
          >← 前の記事へ</nuxt-link
        >
        <nuxt-link to="/news" class="block text-primary">一覧に戻る</nuxt-link>
        <nuxt-link
          :to="nextPath"
          :class="{
            block: true,
            'text-primary': nextPath,
            'opacity-25': !nextPath,
          }"
          >次の記事へ →</nuxt-link
        >
      </div>
    </ContentDoc>
  </div>
</template>
