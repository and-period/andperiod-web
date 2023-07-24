<script setup lang="ts">
useSeoMeta({
  title: 'プライバシーポリシー - 株式会社アンドピリオド and period',
  description:
    '株式会社アンドピリオド（and period）のプライバシーポリシーです。',
})
</script>

<template>
  <ContentDoc v-slot="{ doc }" path="/privacy/privacy">
    <ContentRenderer
      class="privacy-md prose prose-stone mb-20 mt-12 max-w-none px-6 md:mt-[120px]"
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

.privacy-md ol {
  font-weight: 500;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
}

.privacy-md ol ::marker {
  color: #404040;
}

.privacy-md a {
  color: #404040;
  text-decoration-line: none;
}
</style>
