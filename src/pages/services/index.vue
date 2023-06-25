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
      <button
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        販路開拓支援事業 ↓
      </button>
      <button
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        フードロス対策事業 ↓
      </button>
      <button
        class="block w-full bg-primary text-white rounded-full py-4 md:py-6 px-10 text-center hover:bg-opacity-80 md:tracing-[2.4px] tracking-[1.6px]"
      >
        農業事業 ↓
      </button>
    </div>

    <div
      class="bg-white rounded-3xl w-full flex flex-col py-8 px-6 gap-y-[120px] items-center md:py-20 md:px-24"
    >
      <div class="w-full text-left font-medium whitespace-nowrap">
        <h2
          class="text-primary text-[32px] md:text-[56px] tracking-widest mb-2"
          id="furumaru"
        >
          Online marche
        </h2>
        <p class="text-[13px] md:text-xl tracking-widest">
          オンラインマルシェ事業
        </p>
      </div>

      <div class="flex gap-11 items-center w-full lg:flex-row flex-col">
        <div class="lg:w-1/2 w-full m-auto">
          <services-the-furumaru-logo class="w-full" />
        </div>
        <div class="lg:w-1/2 w-full flex flex-col gap-6">
          <p
            class="text-xl whitespace-pre-wrap"
            v-text="
              '生産者のこだわりが\n「伝える」以上に「伝わる」ライブマルシェ'
            "
          />
          <h2 class="text-[32px]">ふるマル</h2>
        </div>
      </div>

      <div
        class="flex w-full gap-11 items-center lg:w-full lg:flex-row flex-col"
      >
        <div class="lg:w-1/2 w-full flex flex-col gap-6 lg:order-1 order-2">
          <h2 class="text-2xl">
            どこからでもリアルタイムで日本の「食」を体験できる仮想空間の実現
          </h2>
          <p class="tex-xl">
            わたしたちの目指す産直ECの姿は安心して商品を購入できライブコマースを通じてリアルに体験することでお互いの想いを直接感じられるプラットフォームです。ライブマルシェは双方向でのコミュニケーションが図れるので農家さんのこだわりを直接お伝えできるとともに視聴者はライブ中に気になるポイントを質問することで、ワクワク感や納得感を得ながらお買い物をより楽しむことができます。
          </p>
        </div>
        <img
          src="/img/services/furumaru/1.png"
          alt="furumaru"
          class="object-contain lg:w-1/2 w-full lg:order-2 order-1"
        />
      </div>

      <div class="flex w-full gap-11 lg:flex-row flex-col">
        <img
          src="/img/services/furumaru/2.png"
          alt=""
          class="object-contain lg:w-1/2 w-full"
        />
        <div class="flex flex-col gap-6 lg:w-1/2 w-full">
          <h2 class="text-2xl">現地の空気感をオンタイムで味わう非日常体験</h2>
          <p class="tex-xl">
            ライブマルシェを通じて自分がその場で気に入った商品を購入できるという疑似体験によって臨場感が味わえるので、マルシェならではのワクワクや充実感を感じることができます。
            また、既存システムにはない新しい購買体験（ピッキング機能）は実際にマルシェに赴いたかのようなお買い物の楽しさをリアルに再現できます。
          </p>
        </div>
      </div>

      <div
        class="flex w-full gap-11 items-center lg:w-full lg:flex-row flex-col"
      >
        <div class="lg:w-1/2 w-full flex flex-col gap-6 lg:order-1 order-2">
          <h2 class="text-2xl">産地コーディネーター制度</h2>
          <p class="tex-xl">
            「出品・配信・ヒアリング・検品・梱包・出荷」といった物流倉庫機能を一括して行うコーディネーターという役割を設けます。コーディネーターが介在することで生産者の作業負担を軽減できます。また購入にあたっては自分が気に入ったものを複数の生産者の方から少量ずつ購入できます。これにより生産者は栽培に集中することが可能となり、これまで障壁の高かった産直ECに手軽に参入することも可能となります。好きなものを好きな量注文することができるため、１回の配送で産地の特産品セットを自宅に届けることができます。
            ライブマルシェを通じて自分がその場で気に入った商品を購入できるという疑似体験によって臨場感が味わえるので、マルシェならではのワクワクや充実感を感じることができます。
          </p>
        </div>
        <img
          src="/img/services/furumaru/3.png"
          alt=""
          class="object-contain lg:w-1/2 w-full lg:order-2 order-1"
        />
      </div>
    </div>
  </div>
</template>
