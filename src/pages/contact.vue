<script setup lang="ts">
//TODO: sendGridに送る処理
const handleSubmit = async () => {};
</script>

<template>
  <div class="px-24">
    <div class="w-full text-left font-medium whitespace-nowrap my-20">
      <h2 class="text-primary text-[56px] tracking-widest mb-2">Contact</h2>
      <p class="text-xl tracking-widest">お問い合わせ</p>
    </div>
    <p class="text-xl tracking-widest my-20">
      下記のフォームに必要事項をご希望の上、お問い合わせください。
    </p>
    <the-contact-form @submit="handleSubmit" />
  </div>
</template>
