<template>
  <ContentDoc path="/privacy/privacy" v-slot="{ doc }">
    <ContentRenderer
      class="privacy-md prose prose-stone max-w-none px-6 md:mt-[120px] mt-12 mb-20"
      :value="doc"
    />
  </ContentDoc>
</template>

<style lang="css">
.privacy-md {
  color: #404040;
}

.privacy-md p {
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.privacy-md a {
  color: #404040;
  text-decoration-line: none;
}
</style>
