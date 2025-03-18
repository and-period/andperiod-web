<script setup lang="ts">
useSeoMeta({
  title: '会社概要 - 株式会社アンドピリオド and period',
  description: '株式会社アンドピリオド（and period）の会社概要です。',
})

const ABOUT_US_ITEMS = [
  { key: '会社名', value: '株式会社アンドピリオド' },
  { key: '設立年月日', value: '2022年7月13日' },
  { key: '本社所在地', value: '広島県豊田郡大崎上島町中野5748番地2' },
  { key: '資本金', value: '5,300千円' },
  { key: '代表者', value: '代表取締役社長 藤中拓弥' },
  {
    key: '事業内容',
    value: 'ライブコマース・フードロス・卸売・農業・Eコマース',
  },
]

const BOARD_MEMBERS = [
  {
    position: '代表取締役',
    name: '藤中 拓弥',
    romanizedName: 'Takuya Fujinaka',
    imgSrc: '/img/about/members/1.jpg',
  },
  {
    position: '専務取締役 兼 システムディレクター',
    name: '濵田 広大',
    romanizedName: 'Kodai Hamada',
    imgSrc: '/img/about/members/2.jpg',
  },
  {
    position: '常務取締役 兼 産地統括マネージャー',
    name: '大嶋 憲人',
    romanizedName: 'Kento Oshima',
    imgSrc: '/img/about/members/3.jpg',
  },
]
</script>

<template>
  <div class="mb-10 flex w-full flex-col gap-10 p-6 2xl:gap-20 2xl:px-0">
    <div
      class="flex flex-col gap-10 font-medium lg:my-20 lg:flex-row lg:gap-20"
    >
      <div class="whitespace-nowrap text-left font-medium">
        <h2
          class="mb-2 font-outfit text-[32px] tracking-widest text-primary md:text-[56px]"
        >
          About us
        </h2>
        <p class="text-[13px] tracking-widest md:text-xl">会社概要</p>
      </div>
      <div>
        <h1
          class="whitespace-pre-wrap text-[20px] font-medium tracking-widest md:text-[32px] lg:min-w-max"
          v-text="
            '継承主体の現在から、\n新たな一次産業をともに創造する未来へ。'
          "
        />
        <p
          class="mt-10 text-[14px] leading-[32px] tracking-widest md:text-[20px] md:leading-[48px]"
        >
          「いいもの」だけが残る好循環を目指し、一次産業とITを融合した新しい基盤•仕組み•文化を創出します。
        </p>
      </div>
    </div>

    <services-the-service-content-box title="Board members" subtitle="役員紹介">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-3">
        <div v-for="(member, i) in BOARD_MEMBERS" :key="i">
          <img :src="member.imgSrc" :alt="`${member.name}の写真`" />
          <div class="mt-6 font-medium leading-[32px] tracking-[1.6px]">
            <div class="mb-2">
              <span class="text-[14px] md:text-[16px]">{{
                member.position
              }}</span>
              <h4 class="text-[20px] md:text-[24px]">{{ member.name }}</h4>
            </div>
            <span class="text-[14px] md:text-[16px]">{{
              member.romanizedName
            }}</span>
          </div>
        </div>
      </div>
    </services-the-service-content-box>

    <services-the-service-content-box title="Company" subtitle="会社概要">
      <div
        class="border-gray w-full border-y border-dashed text-[13px] md:text-xl"
      >
        <dl class="divide-gray divide-y divide-dashed">
          <div
            v-for="(item, i) in ABOUT_US_ITEMS"
            :key="i"
            class="grid grid-cols-3 gap-4 px-2 py-6 font-medium tracking-[1.3px] md:px-10 md:py-8 md:tracking-[2px]"
          >
            <dt class="col-span-3 md:col-span-1">{{ item.key }}</dt>
            <dd class="col-span-3 md:col-span-2">{{ item.value }}</dd>
          </div>
        </dl>
      </div>

      <!--
      <img
        src="/img/about/1.jpg"
        alt="株式会社アンドピリオドのメンバー写真"
        class="mt-10 w-full"
      />
    -->
    </services-the-service-content-box>
  </div>
</template>
