<script setup lang="ts"></script>

<template>
  <div class="lg:px-10 px-6 pb-6">
    <div class="my-20 flex lg:flex-row flex-col lg:gap-20 gap-10">
      <div class="text-left font-medium whitespace-nowrap">
        <h2
          class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2 font-outfit"
        >
          Service
        </h2>
        <p class="text-[13px] md:text-xl tracking-widest">サービスについて</p>
      </div>
      <div>
        <h1
          class="whitespace-pre-wrap lg:min-w-max font-medium text-[32px] tracking-widest"
          v-text="'継承主体から、\n新たな一次産業をともに創造する未来へ。'"
        />
        <p class="mt-10 text-[20px] leading-[48px] tracking-widest">
          「いいもの」だけが残る好循環を目指し、一次産業とITを融合した新しい基盤•仕組み•文化を創出します。
        </p>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-2 grid-cols-1 gap-y-8 gap-x-[18px] lg:px-20 mb-20 text-base md:text-2xl"
    >
      <a
        href="#furumaru"
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        オンラインマルシュ事業 ↓
      </a>
      <a
        href="#market-development"
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        販路開拓支援事業 ↓
      </a>
      <a
        href="#lossnax"
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        フードロス対策事業 ↓
      </a>
      <a
        href="#agriculture"
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        農業事業 ↓
      </a>
    </div>

    <div class="flex flex-col lg:gap-[120px] gap-[80px]">
      <services-the-furumaru id="furumaru" />
      <services-the-market-development id="market-development" />
      <services-the-loss-nax id="lossnax" />
      <services-the-agriculture id="agriculture" />
    </div>
  </div>
</template>
