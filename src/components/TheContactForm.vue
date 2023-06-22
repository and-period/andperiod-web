<script setup lang="ts">
const formData = ref<string>("");

//TODO: sendGridとの繋ぎの際に実装
const onSubmit = (): void => {};
</script>
<template>
  <div class="flex flex-col gap-10">
    <div>
      <label class="block">
        <sapn class="text-sm md:text-base">お問い合わせ内容</sapn>
        <span
          class="border ml-4 px-4 py-1 text-[15px] text-primary border-primary rounded-full"
          >必須</span
        >
        <select
          v-model="formData"
          :class="{
            'block mt-4 pl-4 w-full py-4 border border-primary rounded': true,
            'text-gray': formData === '',
          }"
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
          class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
          placeholder="例）株式会社アンドピリオド"
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
          class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
          placeholder="例）山田 太郎"
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
          class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
          placeholder="例）example@and-period.co.jp"
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
          class="block mt-4 pl-4 py-4 w-full border border-primary rounded"
          placeholder="例）090XXXXXXXX"
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
          class="block mt-4 pl-4 pt-4 py-[400px] w-full border border-primary rounded"
          placeholder="お問い合わせ内容を具体的にご記入ください"
        ></textarea>
      </label>
    </div>
    <div class="text-sm md:text-base text-center leading-8 whitespace-wrap">
      <p>
        <u><a href="/privacy">プライバシーポリシー</a></u
        >をご確認いただき、同意いただける場合のみお進みください。
      </p>
    </div>
    <div class="flex justify-center mb-20">
      <nuxt-link
        class="block max-w-max bg-primary text-white rounded-full py-3 md:py-4 px-[80px] text-base md:text-l hover:bg-opacity-80"
      >
        同意して送信する
      </nuxt-link>
    </div>
  </div>
</template>
