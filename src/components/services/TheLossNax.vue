<template>
  <services-the-service-content-box
    title="Reduce food loss"
    subtitle="フードロス対策事業"
  >
    <div
      class="flex w-full flex-col items-center gap-y-[80px] font-medium md:gap-y-[120px]"
    >
      <div class="flex w-full flex-col gap-x-12 gap-y-14 lg:flex-row">
        <div class="m-auto w-full lg:w-1/2">
          <services-the-loss-nax-logo class="max-w-[400px]" />
        </div>
        <div class="flex w-full flex-col gap-6 lg:w-1/2">
          <p
            class="whitespace-pre-wrap text-[14px] leading-8 tracking-[1.4px] md:text-[20px]"
            v-text="'ロスを無くす新しい発想で\n持続可能な一次産業を促進する'"
          />
          <h2 class="text-[24px] leading-8 tracking-[2px] md:text-[32px]">
            ロスナックス
          </h2>
        </div>
      </div>

      <div class="flex flex-col gap-6">
        <h2 class="leading-8 md:text-[24px] md:tracking-[2px]">
          LOSSNAX（ロスナックス）はその名の通り、食にまつわる「ロスを無くす」をコンセプトに生まれたブランドです
        </h2>
        <div
          class="flex flex-col gap-4 text-[14px] leading-8 tracking-[2.0px] md:text-[16px] md:leading-10 md:tracking-[2px]"
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
        <div class="flex flex-col items-center gap-4 xl:flex-row xl:gap-2">
          <div
            class="relative h-[440px] w-full max-w-[280px] rounded-full border border-primary xl:h-[480px] xl:w-[228px]"
          >
            <p
              class="absolute top-[72px] w-full text-center text-[32px] tracking-[1.6px] text-primary"
            >
              1. 調査
            </p>
            <p
              class="absolute top-[155px] px-6 text-base leading-8 tracking-[1.6px]"
            >
              生産者の方のお困りごと（使い道のある食材を加工過程で大量に廃棄している、天候の影響で大量の農作物を抱えてしまった等）を拾い上げます。
            </p>
          </div>

          <div
            class="text-3xl text-primary after:content-['↓'] lg:text-xl lg:after:content-['→']"
          />

          <div
            class="relative h-[440px] w-full max-w-[280px] rounded-full border border-primary xl:h-[480px] xl:w-[228px]"
          >
            <p
              class="absolute top-[72px] w-full text-center text-[32px] tracking-[1.6px] text-primary"
            >
              2. 企画
            </p>
            <p
              class="absolute top-[155px] px-6 text-base leading-8 tracking-[1.6px]"
            >
              生産者の収入を増やすことを目的とし、廃棄するはずだった食材を使って主力商品のブランド価値が上がっていくような新しい商品の企画をします。
            </p>
          </div>

          <div
            class="text-3xl text-primary after:content-['↓'] lg:text-xl lg:after:content-['→']"
          />

          <div
            class="relative h-[440px] w-full max-w-[280px] rounded-full border border-primary xl:h-[480px] xl:w-[228px]"
          >
            <p
              class="absolute top-[72px] w-full text-center text-[32px] tracking-[1.6px] text-primary"
            >
              3. 加工
            </p>
            <p
              class="absolute top-[155px] px-6 text-base leading-8 tracking-[1.6px]"
            >
              配送料や加工料などの製造原価を踏まえて実現可能な加工会社を探し、試作の製造や試食試飲といった企画商品の製品化をサポートします。
            </p>
          </div>

          <div
            class="text-3xl text-primary after:content-['↓'] lg:text-xl lg:after:content-['→']"
          />

          <div
            class="relative h-[440px] w-full max-w-[280px] rounded-full border border-primary xl:h-[480px] xl:w-[228px]"
          >
            <p
              class="absolute top-[72px] w-full text-center text-[32px] tracking-[1.6px] text-primary"
            >
              4. 販売
            </p>
            <p
              class="absolute top-[155px] px-6 text-base leading-8 tracking-[1.6px]"
            >
              広告やECサイト、SNSを駆使したマーケティング、豊富なノウハウから最適な販売先の選定や営業方法など販売戦略の支援をします。
            </p>
          </div>
        </div>
      </div>

      <div class="mb-[40px] w-full md:mb-[80px]">
        <p class="mb-10 text-xl">事例紹介</p>
        <div
          class="flex w-full flex-col items-center gap-x-12 gap-y-10 lg:flex-row"
        >
          <div class="order-2 flex w-full flex-col gap-6 lg:order-1 lg:w-1/2">
            <h2 class="leading-8 md:text-[24px] md:tracking-[2px]">
              オリーブの果皮から生まれたサプリメント「オリビオ」
            </h2>
            <p
              class="flex flex-col gap-4 text-[14px] leading-8 tracking-[2.0px] md:text-[16px] md:leading-10 md:tracking-[2px]"
            >
              これまで活用用途がなく廃棄され続けてきた、オリーブの実からオイルを絞った後に残る果皮が高品質サプリメントに生まれ変わりました。お客様にサプリメントの品質を知ってもらうことで、生産者の方の主力製品であるオリーブオイルの魅力を再認識してもらえるような構成で販売することができています。
            </p>
          </div>
          <div class="order-1 w-full lg:order-2 lg:w-1/2">
            <img
              src="/img/services/loss-nax/1.jpg"
              alt="OLIBIOの紹介"
              class="m-auto object-contain md:h-[320px]"
            />
          </div>
        </div>
      </div>
    </div>

    <a
      href="#"
      aria-disabled
      class="bg-gray pointer-events-none block w-full max-w-[320px] rounded-full px-8 py-3 text-center font-outfit text-2xl text-white"
    >
      coming soon …
    </a>
  </services-the-service-content-box>
</template>
