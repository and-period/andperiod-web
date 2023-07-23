<template>
  <services-the-service-content-box
    title="Online marche"
    subtitle="オンラインマルシェ事業"
  >
    <div class="flex flex-col items-center gap-y-[56px] md:gap-y-[120px]">
      <div
        class="flex w-full flex-col items-center gap-x-12 gap-y-14 font-medium lg:flex-row"
      >
        <div class="m-auto w-full lg:w-1/2">
          <services-the-furumaru-logo class="max-w-[400px]" />
        </div>
        <div class="flex w-full flex-col lg:w-1/2">
          <p
            class="whitespace-pre-wrap text-sm leading-[32px] tracking-[1.4px] md:text-xl md:tracking-[2.0px]"
            v-text="
              '生産者のこだわりが\n「伝える」以上に「伝わる」ライブマルシェ'
            "
          />
          <h2
            class="mt-6 text-2xl tracking-[2px] md:text-[32px] md:tracking-[3.2px]"
          >
            ふるマル
          </h2>
        </div>
      </div>

      <div
        class="flex w-full flex-col items-center gap-12 lg:w-full lg:flex-row"
      >
        <div
          class="order-2 flex w-full flex-col gap-6 font-medium lg:order-1 lg:w-1/2"
        >
          <h2 class="text-xl tracking-[2.0px] md:text-2xl md:tracking-[2.0px]">
            どこからでもリアルタイムで日本の「食」を体験できる仮想空間の実現
          </h2>
          <span
            class="text-sm leading-8 tracking-[2px] md:text-[16px] md:tracking-[2px]"
          >
            わたしたちの目指す産直ECの姿は安心して商品を購入できライブコマースを通じてリアルに体験することでお互いの想いを直接感じられるプラットフォームです。ライブマルシェは双方向でのコミュニケーションが図れるので農家さんのこだわりを直接お伝えできるとともに視聴者はライブ中に気になるポイントを質問することで、ワクワク感や納得感を得ながらお買い物をより楽しむことができます。
          </span>
        </div>
        <img
          src="/img/services/furumaru/1.png"
          alt="furumaru"
          class="order-1 w-full object-contain lg:order-2 lg:w-1/2"
        />
      </div>

      <div class="flex w-full flex-col gap-12 lg:flex-row">
        <img
          src="/img/services/furumaru/2.png"
          alt=""
          class="w-full object-contain lg:w-1/2"
        />
        <div class="flex w-full flex-col gap-6 font-medium lg:w-1/2">
          <h2 class="text-xl tracking-[2.0px] md:text-2xl md:tracking-[2.0px]">
            現地の空気感をオンタイムで味わう非日常体験
          </h2>
          <p
            class="whitespace-pre-wrap text-sm leading-8 tracking-[2px] md:text-[16px] md:tracking-[2px]"
            v-text="
              'ライブマルシェを通じて自分がその場で気に入った商品を購入できるという疑似体験によって臨場感が味わえるので、マルシェならではのワクワクや充実感を感じることができます。\nまた、既存システムにはない新しい購買体験（ピッキング機能）は実際にマルシェに赴いたかのようなお買い物の楽しさをリアルに再現できます。'
            "
          />
        </div>
      </div>

      <div
        class="flex w-full flex-col items-center gap-12 lg:w-full lg:flex-row"
      >
        <div
          class="order-2 flex w-full flex-col gap-6 font-medium lg:order-1 lg:w-1/2"
        >
          <h2 class="text-xl tracking-[2.0px] md:text-2xl md:tracking-[2.0px]">
            産地コーディネーター制度
          </h2>
          <p
            class="whitespace-pre-wrap text-sm leading-8 tracking-[2px] md:text-[16px] md:tracking-[2px]"
            v-text="
              '「出品・配信・ヒアリング・検品・梱包・出荷」といった物流倉庫機能を一括して行うコーディネーターという役割を設けます。コーディネーターが介在することで生産者の作業負担を軽減できます。また購入にあたっては自分が気に入ったものを複数の生産者の方から少量ずつ購入できます。これにより生産者は栽培に集中することが可能となり、これまで障壁の高かった産直ECに手軽に参入することも可能となります。好きなものを好きな量注文することができるため、１回の配送で産地の特産品セットを自宅に届けることができます。\nライブマルシェを通じて自分がその場で気に入った商品を購入できるという疑似体験によって臨場感が味わえるので、マルシェならではのワクワクや充実感を感じることができます。'
            "
          />
        </div>
        <img
          src="/img/services/furumaru/3.png"
          alt=""
          class="order-1 w-full object-contain lg:order-2 lg:w-1/2"
        />
      </div>
    </div>

    <a
      href="#"
      aria-disabled
      class="bg-gray pointer-events-none mt-[80px] block w-full max-w-[320px] rounded-full px-8 py-3 text-center font-outfit text-2xl text-white md:mt-[106px]"
    >
      coming soon …
    </a>
  </services-the-service-content-box>
</template>
