<script setup lang="ts">
import { ContactRequest } from '~~/types/props';

const formData = ref<ContactRequest>({
  name: '',
  company: '',
  email: '',
  phoneNumber: '',
  subject: '',
  content: '',
});

const resetFormData = () => {
  formData.value.name = '';
  formData.value.company = '';
  formData.value.email = '';
  formData.value.phoneNumber = '';
  formData.value.subject = '';
  formData.value.content = '';
};

const handleSubmit = async () => {
  try {
    await $fetch('https://api.and-period.co.jp', {
      method: 'POST',
      body: JSON.stringify(formData.value),
    });
    alert('問い合わせ内容を送信しました。');
    resetFormData();
  } catch (err) {
    alert(
      '問い合わせ内容の送信に失敗しました。お手数ですが時間をおいてから再度送信してください。'
    );
    console.log(err);
  }
};
</script>

<template>
  <div class="px-6 tall:px-24 md:mx-20">
    <div class="w-full text-left font-medium whitespace-nowrap my-20">
      <h2
        class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2 font-medium font-outfit"
      >
        Contact
      </h2>
      <p class="text-[13px] md:text-xl tracking-widest">お問い合わせ</p>
    </div>
    <p class="text-[15px] md:text-xl tracking-widest my-20 font-medium">
      下記のフォームに必要事項をご希望の上、お問い合わせください。
    </p>
    <the-contact-form v-model:form-data="formData" @submit="handleSubmit" />
  </div>
</template>
