<script setup lang="ts">
const route = useRoute();

const currentPath = computed<string>(() => {
  const slug = route.params.slug;
  if (typeof slug === 'string') {
    return slug;
  } else {
    return slug.join('/');
  }
});

const { data } = await useAsyncData('artcle', () => {
  console.log(currentPath.value);
  return queryContent()
    .only('_path')
    .sort({ publishAt: 1 })
    .findSurround(`/news/${currentPath.value}`);
});

const prevPath = computed(() => {
  if (data.value) {
    return data.value[0]?._path || '';
  } else {
    return '';
  }
});

const nextPath = computed(() => {
  if (data.value) {
    return data.value[1]?._path || '';
  } else {
    return '';
  }
});
</script>

<template>
  <div class="px-24">
    <ContentDoc v-slot="{ doc }">
      <div class="flex items-center text-primary gap-4 my-10">
        <div class="text-2xl font-bold">
          {{ doc.publishAt }}
        </div>
        <div class="border border-primary text-sm rounded-xl px-3">
          {{ doc.tag }}
        </div>
      </div>

      <ContentRenderer class="prose prose-stone max-w-none" :value="doc" />

      <div class="flex justify-center mt-10 gap-[120px]">
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
