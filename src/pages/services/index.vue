<script setup lang="ts"></script>

<template>
  <div class="lg:px-10 px-6">
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
      class="grid lg:grid-cols-2 grid-cols-1 gap-y-8 gap-x-[18px] lg:px-20 mb-20"
    >
      <a
        href="#furumaru"
        class="block w-full bg-primary text-white rounded-full py-4 px-10 text-center hover:bg-opacity-80"
      >
        オンラインマルシュ事業 ↓
      </a>
      <button
        class="block w-full bg-primary text-white rounded-full py-4 px-10 text-center hover:bg-opacity-80"
      >
        販路開拓支援事業 ↓
      </button>
      <button
        class="block w-full bg-primary text-white rounded-full py-4 px-10 text-center hover:bg-opacity-80"
      >
        フードロス対策事業 ↓
      </button>
      <button
        class="block w-full bg-primary text-white rounded-full py-4 px-10 text-center hover:bg-opacity-80"
      >
        農業事業 ↓
      </button>
    </div>

    <div
      class="bg-white rounded-3xl w-full flex flex-col py-8 px-6 gap-y-10 items-center md:py-20 md:px-24"
    >
      <div class="text-left font-medium whitespace-nowrap">
        <h2
          class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2"
          id="furumaru"
        >
          On-line marche
        </h2>
        <p class="text-[13px] md:text-xl tracking-widest">
          オンラインマルシェ事業
        </p>
      </div>
    </div>
  </div>
</template>
