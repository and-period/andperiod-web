<script setup lang="ts">
import { ContactRequest } from '~~/types/props';

interface Props {
  formData: ContactRequest;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: 'update:form-data', formData: ContactRequest): void;
  (e: 'submit'): void;
}>();

const formDataValue = computed({
  get: (): ContactRequest => props.formData,
  set: (formData: ContactRequest): void => emit('update:form-data', formData),
});

const onSubmit = (): void => {
  emit('submit');
};
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-10 font-medium">
      <div>
        <label class="block" for="subject">
          <span class="text-sm md:text-base">お問い合わせ内容</span>
          <span
            class="ml-4 rounded-full border border-primary px-4 py-1 text-[11px] text-primary md:text-[15px]"
            >必須</span
          >
        </label>
        <select
          id="subject"
          v-model="formDataValue.subject"
          class="mt-4 block w-full rounded border border-primary bg-white p-4"
          :class="{ 'text-gray': formDataValue.subject === '' }"
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
      </div>
      <div>
        <label class="block" for="company">
          <span class="text-sm md:text-base">貴社名</span>
        </label>
        <input
          id="company"
          v-model="formDataValue.company"
          class="mt-4 block w-full rounded border border-primary py-4 pl-4"
          placeholder="例）株式会社アンドピリオド"
        />
      </div>
      <div>
        <label class="block" for="name">
          <span class="">お名前</span>
          <span
            class="ml-4 rounded-full border border-primary px-4 py-1 text-[11px] text-primary md:text-[15px]"
            >必須</span
          >
        </label>
        <input
          id="name"
          v-model="formDataValue.name"
          class="mt-4 block w-full rounded border border-primary py-4 pl-4"
          placeholder="例）山田 太郎"
          required
        />
      </div>
      <div>
        <label class="block" for="email">
          <span class="text-sm md:text-base">メールアドレス</span>
          <span
            class="ml-4 rounded-full border border-primary px-4 py-1 text-[11px] text-primary md:text-[15px]"
            >必須</span
          >
        </label>
        <input
          id="email"
          v-model="formDataValue.email"
          class="mt-4 block w-full rounded border border-primary py-4 pl-4"
          placeholder="例）example@and-period.co.jp"
          type="email"
          required
        />
      </div>
      <div>
        <label class="block" for="phoneNumber">
          <span class="text-sm md:text-base">電話番号（ハイフンなし）</span>
          <span
            class="ml-4 rounded-full border border-primary px-4 py-1 text-[11px] text-primary md:text-[15px]"
            >必須</span
          >
        </label>
        <input
          id="phoneNumber"
          v-model="formDataValue.phoneNumber"
          class="mt-4 block w-full rounded border border-primary py-4 pl-4"
          placeholder="例）090XXXXXXXX"
          required
        />
      </div>
      <div>
        <label class="block" for="content">
          <span class="text-sm md:text-base">お問い合わせ詳細</span>
          <span
            class="ml-4 rounded-full border border-primary px-4 py-1 text-[11px] text-primary md:text-[15px]"
            >必須</span
          >
        </label>
        <textarea
          id="content"
          v-model="formDataValue.content"
          class="mt-4 block w-full rounded border border-primary py-[400px] pl-4 pt-4"
          placeholder="お問い合わせ内容を具体的にご記入ください"
          required
        ></textarea>
      </div>

      <div
        class="whitespace-wrap md:tracing-[1.6px] text-center text-sm leading-8 tracking-[1.4px] md:text-base"
      >
        <p>
          <u><a href="/privacy">プライバシーポリシー</a></u
          >をご確認いただき、同意いただける場合のみお進みください。
        </p>
      </div>
      <div class="mb-20 flex justify-center">
        <button
          class="md:text-l md:tracing-[2.0px] block max-w-max rounded-full bg-primary px-[80px] py-3 text-base tracking-[1.6px] text-white hover:bg-opacity-80 md:py-4 md:text-xl"
          type="submit"
        >
          同意して送信する
        </button>
      </div>
    </div>
  </form>
</template>
