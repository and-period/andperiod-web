<template>
  <services-the-service-content-box
    title="Reduce food loss"
    subtitle="フードロス対策事業"
  >
    <div class="flex lg:flex-row flex-col gap-11 w-full">
      <div class="lg:w-1/2 w-full m-auto">
        <services-the-loss-nax-logo class="w-full" />
      </div>
      <div class="lg:w-1/2 w-full flex flex-col gap-6">
        <p
          class="text-xl whitespace-pre-wrap"
          v-text="'ロスを無くす新しい発想で\n持続可能な一次産業を促進する'"
        />
        <h2 class="text-[32px]">ロスナックス</h2>
      </div>
    </div>

    <div class="flex flex-col gap-6">
      <h2 class="text-2xl">
        LOSSNAX（ロスナックス）はその名の通り、食にまつわる「ロスを無くす」をコンセプトに生まれたブランドです
      </h2>
      <div class="text-lg flex flex-col gap-4">
        <p>
          少し形が異なるというだけで捨てられてしまう農作物や、まだまだ使い道があるのに加工過程で処分されてしまう食材が多く存在します。これまで廃棄されてきた食材の新たな価値を発見したり、品質基準から外れた食材で新しい商品を開発したりすることで持続可能な農業を促進していきます。
        </p>
        <p>
          これまで廃棄されていた食材に価値をつけて新たな商品として販売します。それにより、主力商品のブランド価値を高め、生産者の方の売上向上に繋がるというところまで計算して商品開発を行います。
          生産者の方のお困りごとやお悩みを拾い上げ、解決方法の企画から販売までをコーディネートします。
        </p>
      </div>
    </div>

    <div>
      <p class="mb-10 text-xl">事例紹介</p>
      <div class="flex items-center w-full lg:flex-row flex-col gap-10">
        <div class="flex flex-col gap-6 lg:order-1 order-2 lg:w-1/2 w-full">
          <h2 class="text-2xl">
            オリーブの果皮から生まれたサプリメント「オリビオ」
          </h2>
          <p class="text-xl">
            これまで活用用途がなく廃棄され続けてきた、オリーブの実からオイルを絞った後に残る果皮が高品質サプリメントに生まれ変わりました。お客様にサプリメントの品質を知ってもらうことで、生産者の方の主力製品であるオリーブオイルの魅力を再認識してもらえるような構成で販売することができています。
          </p>
        </div>
        <div class="lg:order-2 order-1 lg:w-1/2 w-full">
          <img
            src="/img/services/loss-nax/1.png"
            alt="OLIBIOの紹介"
            class="h-[320px] m-auto object-contain"
          />
        </div>
      </div>
    </div>
  </services-the-service-content-box>
</template>
