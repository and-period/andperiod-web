<script setup lang="ts">
const ABOUT_US_ITEMS = [
  { key: '会社名', value: '株式会社アンドピリオド' },
  { key: '設立年月日', value: '2019年8月1日' },
  { key: '本社所在地', value: '広島県豊田郡大崎上島町中野5748番地2' },
  { key: '資本金', value: '4,865千円' },
  { key: '代表者', value: '代表取締役社長 藤中拓弥' },
  { key: '従業員数', value: '9名' },
  {
    key: '事業内容',
    value: 'ライブコマース・フードロス・卸売・農業・Eコマース',
  },
];

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
    position: '常務取締役 兼 営業本部長',
    name: '竹本 絢一',
    romanizedName: 'Kenichi Takemoto',
    imgSrc: '/img/about/members/3.jpg',
  },
];
</script>

<template>
  <div class="w-full flex flex-col 2xl:gap-20 gap-10 mb-10 2xl:px-0 p-6">
    <div
      class="lg:my-20 flex lg:flex-row flex-col lg:gap-20 gap-10 font-medium"
    >
      <div class="text-left font-medium whitespace-nowrap">
        <h2
          class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2 font-outfit"
        >
          About us
        </h2>
        <p class="text-[13px] md:text-xl tracking-widest">会社概要</p>
      </div>
      <div>
        <h1
          class="whitespace-pre-wrap lg:min-w-max font-medium text-[20px] md:text-[32px] tracking-widest"
          v-text="'継承主体の現在から、\n新たな一次産業をともに創造する未来へ。'"
        />
        <p
          class="mt-10 text-[14px] md:text-[20px] leading-[32px] md:leading-[48px] tracking-widest"
        >
          「いいもの」だけが残る好循環を目指し、一次産業とITを融合した新しい基盤•仕組み•文化を創出します。
        </p>
      </div>
    </div>

    <services-the-service-content-box title="Board members" subtitle="役員紹介">
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-x-6 gap-y-10">
        <div v-for="(member, i) in BOARD_MEMBERS" :key="i">
          <img :src="member.imgSrc" :alt="`${member.name}の写真`" />
          <div class="mt-6 leading-[32px] tracking-[1.6px] font-medium">
            <div class="mb-2">
              <span class="md:text-[16px] text-[14px]">{{
                member.position
              }}</span>
              <h4 class="md:text-[24px] text-[20px]">{{ member.name }}</h4>
            </div>
            <span class="md:text-[16px] text-[14px]">{{
              member.romanizedName
            }}</span>
          </div>
        </div>
      </div>
    </services-the-service-content-box>

    <services-the-service-content-box title="Company" subtitle="会社概要">
      <div
        class="w-full border-t border-b border-gray border-dashed md:text-xl text-[13px]"
      >
        <dl class="divide-y divide-gray divide-dashed">
          <div
            v-for="(item, i) in ABOUT_US_ITEMS"
            :key="i"
            class="grid grid-cols-3 gap-x-4 gap-y-4 md:py-8 py-6 md:px-10 px-2 md:tracking-[2px] tracking-[1.3px] font-medium"
          >
            <dt class="md:col-span-1 col-span-3">{{ item.key }}</dt>
            <dd class="md:col-span-2 col-span-3">{{ item.value }}</dd>
          </div>
        </dl>
      </div>

      <img
        src="/img/about/1.jpg"
        alt="株式会社アンドピリオドのメンバー写真"
        class="w-full mt-10"
      />
    </services-the-service-content-box>
  </div>
</template>
