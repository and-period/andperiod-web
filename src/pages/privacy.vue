<template>
  <ContentDoc path="/privacy/privacy" v-slot="{ doc }">
    <ContentRenderer
      class="privacy-md prose prose-stone max-w-none px-6 md:mt-[120px] mt-12 mb-20"
      :value="doc"
    />
  </ContentDoc>
</template>
