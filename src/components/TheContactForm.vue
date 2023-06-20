<script setup lang="ts">
const formData = ref<string>("");

//TODO: sendGridとの繋ぎの際に実装
const onSubmit = (): void => {};
</script>
<template>
  <div class="flex flex-col gap-10">
    <div>
      <label class="block">
        <sapn class="text-base">お問い合わせ内容</sapn>
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
        <sapn class="">貴社名</sapn>
      </label>
    </div>
  </div>
</template>
