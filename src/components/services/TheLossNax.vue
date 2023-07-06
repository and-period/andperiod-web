<template>
  <services-the-service-content-box
    title="Reduce food loss"
    subtitle="フードロス対策事業"
  >
    <div
      class="w-full flex flex-col items-center md:gap-y-[120px] gap-y-[80px] font-medium"
    >
      <div class="flex lg:flex-row flex-col gap-x-12 gap-y-14 w-full">
        <div class="lg:w-1/2 w-full m-auto">
          <services-the-loss-nax-logo class="max-w-[400px]" />
        </div>
        <div class="lg:w-1/2 w-full flex flex-col gap-6">
          <p
            class="md:text-[20px] text-[14px] whitespace-pre-wrap leading-8 tracking-[1.4px]"
            v-text="'ロスを無くす新しい発想で\n持続可能な一次産業を促進する'"
          />
          <h2 class="md:text-[32px] text-[24px] leading-8 tracking-[2px]">
            ロスナックス
          </h2>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="md:text-[24px] leading-8 md:tracking-[2px]">
          LOSSNAX（ロスナックス）はその名の通り、食にまつわる「ロスを無くす」をコンセプトに生まれたブランドです
        </h2>
        <div
          class="md:text-[16px] text-[14px] md:tracking-[2px] tracking-[2.0px] md:leading-10 leading-8 flex flex-col gap-4"
        >
          <p>
            少し形が異なるというだけで捨てられてしまう農作物や、まだまだ使い道があるのに加工過程で処分されてしまう食材が多く存在します。これまで廃棄されてきた食材の新たな価値を発見したり、品質基準から外れた食材で新しい商品を開発したりすることで持続可能な農業を促進していきます。
          </p>
          <p>
            これまで廃棄されていた食材に価値をつけて新たな商品として販売します。それにより、主力商品のブランド価値を高め、生産者の方の売上向上に繋がるというところまで計算して商品開発を行います。
            生産者の方のお困りごとやお悩みを拾い上げ、解決方法の企画から販売までをコーディネートします。
          </p>
        </div>
      </div>

      <div class="w-full">
        <p class="mb-10 text-xl">サービスフロー</p>
        <div class="flex items-center xl:gap-2 gap-4 xl:flex-row flex-col">
          <div
            class="relative border border-primary rounded-full xl:w-[228px] w-full max-w-[280px] xl:h-[480px] h-[440px]"
          >
            <p
              class="absolute top-[72px] text-primary text-[32px] w-full text-center tracking-[1.6px]"
            >
              1. 調査
            </p>
            <p class="absolute top-[155px] px-6 leading-8 text-base tracking-[1.6px]">
              生産者の方のお困りごと（使い道のある食材を加工過程で大量に廃棄している、天候の影響で大量の農作物を抱えてしまった等）を拾い上げます。
            </p>
          </div>

          <div
            class="text-primary lg:after:content-['→'] after:content-['↓'] lg:text-xl text-3xl"
          />

          <div
            class="relative border border-primary rounded-full xl:w-[228px] w-full max-w-[280px] xl:h-[480px] h-[440px]"
          >
            <p
              class="absolute top-[72px] text-primary text-[32px] w-full text-center tracking-[1.6px]"
            >
              2. 企画
            </p>
            <p class="absolute top-[155px] px-6 leading-8 text-base tracking-[1.6px]">
              生産者の収入を増やすことを目的とし、廃棄するはずだった食材を使って主力商品のブランド価値が上がっていくような新しい商品の企画をします。
            </p>
          </div>

          <div
            class="text-primary lg:after:content-['→'] after:content-['↓'] lg:text-xl text-3xl"
          />

          <div
            class="relative border border-primary rounded-full xl:w-[228px] w-full max-w-[280px] xl:h-[480px] h-[440px]"
          >
            <p
              class="absolute top-[72px] text-primary text-[32px] w-full text-center tracking-[1.6px]"
            >
              3. 加工
            </p>
            <p class="absolute top-[155px] px-6 leading-8 text-base tracking-[1.6px]">
              配送料や加工料などの製造原価を踏まえて実現可能な加工会社を探し、試作の製造や試食試飲といった企画商品の製品化をサポートします。
            </p>
          </div>

          <div
            class="text-primary lg:after:content-['→'] after:content-['↓'] lg:text-xl text-3xl"
          />

          <div
            class="relative border border-primary rounded-full xl:w-[228px] w-full max-w-[280px] xl:h-[480px] h-[440px]"
          >
            <p
              class="absolute top-[72px] text-primary text-[32px] w-full text-center tracking-[1.6px]"
            >
              4. 販売
            </p>
            <p class="absolute top-[155px] px-6 leading-8 text-base tracking-[1.6px]">
              広告やECサイト、SNSを駆使したマーケティング、豊富なノウハウから最適な販売先の選定や営業方法など販売戦略の支援をします。
            </p>
          </div>
        </div>
      </div>

      <div class="w-full mb-[40px] md:mb-[80px]">
        <p class="mb-10 text-xl">事例紹介</p>
        <div
          class="flex items-center w-full lg:flex-row flex-col gap-x-12 gap-y-10"
        >
          <div class="flex flex-col gap-6 lg:order-1 order-2 lg:w-1/2 w-full">
            <h2 class="md:text-[24px] leading-8 md:tracking-[2px]">
              オリーブの果皮から生まれたサプリメント「オリビオ」
            </h2>
            <p
              class="md:text-[16px] text-[14px] md:tracking-[2px] tracking-[2.0px] md:leading-10 leading-8 flex flex-col gap-4"
            >
              これまで活用用途がなく廃棄され続けてきた、オリーブの実からオイルを絞った後に残る果皮が高品質サプリメントに生まれ変わりました。お客様にサプリメントの品質を知ってもらうことで、生産者の方の主力製品であるオリーブオイルの魅力を再認識してもらえるような構成で販売することができています。
            </p>
          </div>
          <div class="lg:order-2 order-1 lg:w-1/2 w-full">
            <img
              src="/img/services/loss-nax/1.jpg"
              alt="OLIBIOの紹介"
              class="md:h-[320px] m-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <a
      href="#"
      aria-disabled
      class="block max-w-[320px] w-full bg-gray text-white rounded-full font-outfit text-2xl px-8 py-3 text-center pointer-events-none"
    >
      coming soon …
    </a>
  </services-the-service-content-box>
</template>
