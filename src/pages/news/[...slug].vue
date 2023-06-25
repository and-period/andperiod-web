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
  <div class="md:px-24 px-6">
    <ContentDoc v-slot="{ doc }">
      <div class="md:flex items-center text-primary gap-4 my-10">
        <div class="font-medium md:text-2xl text-base font-outfit">
          {{ doc.publishAt }}
        </div>
        <div class="border max-w-max border-primary md:text-sm text-[11px] md:mt-0 mt-4 rounded-xl px-3">
          {{ doc.tag }}
        </div>
      </div>

      <ContentRenderer class="prose prose-stone max-w-none" :value="doc" />

      <div
        class="flex justify-center my-10 md:gap-[120px] md:text-base gap-6 text-sm whitespace-nowrap"
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
