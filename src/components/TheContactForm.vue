<script setup lang="ts">
import { ContactRequest } from '~~/types/props';

const props = defineProps({
  formData: {
    type: Object as PropType<ContactRequest>,
    default: (): ContactRequest => ({
      name: '',
      company: '',
      email: '',
      phoneNumber: '',
      subject: '',
      content: ''
    })
  }
});

const emit = defineEmits<{
  (e: 'update:form-data', formData: ContactRequest): void
  (e: 'submit'): void
}>();

const formDataValue = computed({
  get: (): ContactRequest => props.formData,
  set: (formData: ContactRequest): void => emit('update:form-data', formData)
});

const onSubmit = (): void => {
  emit('submit')
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-10 font-medium">
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">お問い合わせ内容</sapn>
          <span
            class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
            >必須</span
          >
          <select
            v-model="formDataValue.subject"
            class="block mt-4 pl-4 w-full py-4 border border-primary rounded"
            required
          >
            <option value="" disabled selected>
              お問い合わせ内容をお選びください
            </option>
            <option value="オンラインマルシェ事業に関して">
              オンラインマルシェ事業に関して
            </option>
            <option value="販路開拓支援事業に関して">
              販路開拓支援事業に関して
            </option>
            <option value="フードロス対策事業に関して">
              フードロス対策事業に関して
            </option>
            <option value="農業事業に関して">農業事業に関して</option>
            <option value="その他">その他</option>
          </select>
        </label>
      </div>
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">貴社名</sapn>
          <input
            v-model="formDataValue.company"
            class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
            placeholder="例）株式会社アンドピリオド"
            required
          />
        </label>
      </div>
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">お名前</sapn>
          <span
            class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
            >必須</span
          >
          <input
            v-model="formDataValue.name"
            class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
            placeholder="例）山田 太郎"
            required
          />
        </label>
      </div>
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">メールアドレス</sapn>
          <span
            class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
            >必須</span
          >
          <input
            v-model="formDataValue.email"
            class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
            placeholder="例）example@and-period.co.jp"
            required
          />
        </label>
      </div>
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">電話番号（ハイフンなし）</sapn>
          <span
            class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
            >必須</span
          >
          <input
            v-model="formDataValue.phoneNumber"
            class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
            placeholder="例）090XXXXXXXX"
            required
          />
        </label>
      </div>
      <div>
        <label class="block">
          <sapn class="text-sm md:text-base">お問い合わせ詳細</sapn>
          <span
            class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
            >必須</span
          >
          <textarea
            v-model="formDataValue.content"
            class="block mt-4 pl-4 pt-4 py-[400px] w-full border border-primary rounded"
            placeholder="お問い合わせ内容を具体的にご記入ください"
            required
          ></textarea>
        </label>
      </div>
      <div class="text-sm md:text-base text-center leading-8 whitespace-wrap md:tracing-[1.6px] tracking-[1.4px]">
        <p>
          <u><a href="/privacy">プライバシーポリシー</a></u
          >をご確認いただき、同意いただける場合のみお進みください。
        </p>
      </div>
      <div class="flex justify-center mb-20">
        <button
          class="block max-w-max bg-primary text-white rounded-full py-3 md:py-4 px-[80px] md:text-xl text-base md:text-l hover:bg-opacity-80 md:tracing-[2.0px] tracking-[1.6px]"
          type="submit"
        >
          同意して送信する
        </button>
      </div>
    </div>
  </form>
</template>
