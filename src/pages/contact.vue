<script setup lang="ts">
import type { ContactRequest } from '~/types/props'

useSeoMeta({
  title: 'お問い合わせ - 株式会社アンドピリオド and period',
  description:
    '株式会社アンドピリオド（and period）への問い合わせはフォームよりお願いします。',
})

const formData = ref<ContactRequest>({
  name: '',
  company: '',
  email: '',
  phoneNumber: '',
  subject: '',
  content: '',
})

const resetFormData = () => {
  formData.value.name = ''
  formData.value.company = ''
  formData.value.email = ''
  formData.value.phoneNumber = ''
  formData.value.subject = ''
  formData.value.content = ''
}

const handleSubmit = async () => {
  try {
    await $fetch('https://api.and-period.co.jp', {
      method: 'POST',
      body: JSON.stringify(formData.value),
    })
    alert('問い合わせ内容を送信しました。')
    resetFormData()
  } catch (err) {
    alert(
      '問い合わせ内容の送信に失敗しました。お手数ですが時間をおいてから再度送信してください。',
    )
    console.log(err)
  }
}
</script>

<template>
  <div class="px-6 md:mx-20 tall:px-24">
    <div class="my-20 w-full whitespace-nowrap text-left font-medium">
      <h2
        class="mb-2 font-outfit text-[32px] font-medium tracking-widest text-primary md:text-[56px]"
      >
        Contact
      </h2>
      <p class="text-[13px] tracking-widest md:text-xl">お問い合わせ</p>
    </div>
    <p class="my-20 text-[15px] font-medium tracking-widest md:text-xl">
      下記のフォームに必要事項をご希望の上、お問い合わせください。
    </p>
    <the-contact-form v-model:form-data="formData" @submit="handleSubmit" />
  </div>
</template>
