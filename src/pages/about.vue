<template>
  <div class="w-full flex flex-col gap-10 mb-10 2xl:px-0 p-6">
    <div class="my-20 flex lg:flex-row flex-col lg:gap-20 gap-10">
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
          class="whitespace-pre-wrap lg:min-w-max font-medium text-[32px] tracking-widest"
          v-text="'継承主体から、\n新たな一次産業をともに創造する未来へ。'"
        />
        <p class="mt-10 text-[20px] leading-[48px] tracking-widest">
          「いいもの」だけが残る好循環を目指し、一次産業とITを融合した新しい基盤•仕組み•文化を創出します。
        </p>
      </div>
    </div>

    <services-the-service-content-box title="Company" subtitle="会社概要">
      <div class="w-full border-t border-b border-gray border-dashed text-xl">
        <dl class="divide-y divide-gray divide-dashed">
          <div class="grid grid-cols-3 py-8">
            <dt>会社名</dt>
            <dd class="col-span-2">株式会社アンドピリオド</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>設立年月日</dt>
            <dd class="col-span-2">2019年8月1日</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>本社所在地</dt>
            <dd class="col-span-2">広島県豊田郡大崎上島町中野5748番地2</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>資本金</dt>
            <dd class="col-span-2">4,865千円</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>代表者</dt>
            <dd class="col-span-2">代表取締役社長 藤中拓弥</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>従業員数</dt>
            <dd class="col-span-2">9名</dd>
          </div>

          <div class="grid grid-cols-3 py-8">
            <dt>事業内容</dt>
            <dd class="col-span-2">
              ライブコマース・フードロス・卸売・農業・Eコマース
            </dd>
          </div>
        </dl>
      </div>

      <img
        src="/img/about/1.png"
        alt="株式会社アンドピリオドのメンバー写真"
        class="w-full"
      />
    </services-the-service-content-box>
  </div>
</template>
