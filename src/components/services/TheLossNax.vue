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

    <div class="mb-16">
      <iframe
        class="h-[176px] w-[313px] md:h-[315px] md:w-[560px]"
        src="https://www.youtube.com/embed/PoocFJ1XlFI?si=en0klAhFoicsz-j9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <a
      href="https://olibio-lp.studio.site/"
      target="_blank"
      rel="noreferrer noopener"
      class="flex w-full max-w-[320px] justify-between rounded-full bg-primary px-8 py-3 text-center font-outfit text-2xl text-white"
    >
      <p class="mx-auto tracking-[1.6px] md:tracking-[2px]">OLIBIO Site</p>
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Arrow 1"
          d="M0.807542 17.2929C0.417017 17.6834 0.417017 18.3166 0.807542 18.7071C1.19807 19.0976 1.83123 19.0976 2.22176 18.7071L0.807542 17.2929ZM19.4852 1.02944C19.4852 0.477153 19.0375 0.0294373 18.4852 0.029437L9.48521 0.0294378C8.93293 0.0294375 8.48521 0.477153 8.48521 1.02944C8.48521 1.58172 8.93293 2.02944 9.48521 2.02944L17.4852 2.02944L17.4852 10.0294C17.4852 10.5817 17.9329 11.0294 18.4852 11.0294C19.0375 11.0294 19.4852 10.5817 19.4852 10.0294L19.4852 1.02944ZM2.22176 18.7071L19.1923 1.73654L17.7781 0.322331L0.807542 17.2929L2.22176 18.7071Z"
          fill="white"
        />
      </svg>
    </a>

    <div
      class="mt-10 flex w-full flex-col items-center gap-y-[40px] font-medium md:mt-[80px] md:gap-y-[80px]"
    >
      <div class="w-full">
        <div
          class="flex w-full flex-col items-center gap-x-12 gap-y-10 lg:flex-row"
        >
          <div class="order-2 flex w-full flex-col gap-6 lg:order-1 lg:w-1/2">
            <h2 class="leading-8 md:text-[24px] md:tracking-[2px]">
              オリーブの搾りかすと、濃厚な芳香を漂わせるポンカンの葉・ピールを調合した「YORI
              GIN」
            </h2>
            <p
              class="flex flex-col gap-4 text-[14px] leading-8 tracking-[2.0px] md:text-[16px] md:leading-10 md:tracking-[2px]"
            >
              広島県の南端、温暖な気候と豊かな風土に恵まれた大崎上島町。瀬戸内の大地が育んだオリーブの搾りかすと、濃厚な芳香を漂わせるポンカンの葉・ピールを調合しました。香りは柑橘の強い爽やかさ、口に含むとオリーブの青さが広がり、マティーニのようなニュアンス。
            </p>
          </div>
          <div class="order-1 w-full lg:order-2 lg:w-1/2">
            <img
              src="/img/services/loss-nax/2.jpg"
              alt="OLIBIOの紹介"
              class="m-auto object-contain md:h-[320px]"
            />
          </div>
        </div>
      </div>
      <a
        href="https://shop.yori-gin.com/items/83448176"
        target="_blank"
        rel="noreferrer noopener"
        class="flex w-full max-w-[320px] justify-between rounded-full bg-primary px-8 py-3 text-center font-outfit text-2xl text-white"
      >
        <p class="mx-auto tracking-[1.6px] md:tracking-[2px]">YORIGIN Site</p>
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Arrow 1"
            d="M0.807542 17.2929C0.417017 17.6834 0.417017 18.3166 0.807542 18.7071C1.19807 19.0976 1.83123 19.0976 2.22176 18.7071L0.807542 17.2929ZM19.4852 1.02944C19.4852 0.477153 19.0375 0.0294373 18.4852 0.029437L9.48521 0.0294378C8.93293 0.0294375 8.48521 0.477153 8.48521 1.02944C8.48521 1.58172 8.93293 2.02944 9.48521 2.02944L17.4852 2.02944L17.4852 10.0294C17.4852 10.5817 17.9329 11.0294 18.4852 11.0294C19.0375 11.0294 19.4852 10.5817 19.4852 10.0294L19.4852 1.02944ZM2.22176 18.7071L19.1923 1.73654L17.7781 0.322331L0.807542 17.2929L2.22176 18.7071Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
    <div
      class="mt-10 flex w-full flex-col items-center gap-y-[40px] font-medium md:mt-[80px] md:gap-y-[80px]"
    >
      <div class="w-full">
        <div
          class="flex w-full flex-col items-center gap-x-12 gap-y-10 lg:flex-row"
        >
          <div class="order-2 flex w-full flex-col gap-6 lg:order-1 lg:w-1/2">
            <h2 class="leading-8 md:text-[24px] md:tracking-[2px]">
              〚The Dalemain World Marmalade Awards
              2024〛大崎上島みかんとアールグレイ
            </h2>
            <p
              class="flex flex-col gap-4 text-[14px] leading-8 tracking-[2.0px] md:text-[16px] md:leading-10 md:tracking-[2px]"
            >
              〚The Dalemain World Marmalade Awards
              2024〛（イギリス・ダルメイン）部門にて銀賞/受賞。柑橘の栽培が盛んな広島県大崎上島で
              自然農法栽培しているみかんを使用 2023年・雹に見舞われたが
              糖度が高く、瑞々しいみかんを
              アップサイクルし地域へも貢献するために開発されました。
              果皮・果汁・茶葉・洋酒を加えるタイミングを見極め
              ひとつひとつの素材が活きるように全行程を手作業で行っています。
            </p>
          </div>
          <div class="order-1 w-full lg:order-2 lg:w-1/2">
            <img
              src="/img/services/loss-nax/3.jpg"
              alt="OLIBIOの紹介"
              class="m-auto object-contain md:h-[320px]"
            />
          </div>
        </div>
      </div>
      <a
        href="https://ito-jam-oyatsu.stores.jp/items/65a76dc9dba43702be646d1f"
        target="_blank"
        rel="noreferrer noopener"
        class="flex w-full max-w-[320px] justify-between rounded-full bg-primary px-8 py-3 text-center font-outfit text-2xl text-white"
      >
        <p class="mx-auto tracking-[1.6px] md:tracking-[2px]">ITO Site</p>
        <svg
          width="20"
          height="30"
          viewBox="0 0 20 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Arrow 1"
            d="M0.807542 17.2929C0.417017 17.6834 0.417017 18.3166 0.807542 18.7071C1.19807 19.0976 1.83123 19.0976 2.22176 18.7071L0.807542 17.2929ZM19.4852 1.02944C19.4852 0.477153 19.0375 0.0294373 18.4852 0.029437L9.48521 0.0294378C8.93293 0.0294375 8.48521 0.477153 8.48521 1.02944C8.48521 1.58172 8.93293 2.02944 9.48521 2.02944L17.4852 2.02944L17.4852 10.0294C17.4852 10.5817 17.9329 11.0294 18.4852 11.0294C19.0375 11.0294 19.4852 10.5817 19.4852 10.0294L19.4852 1.02944ZM2.22176 18.7071L19.1923 1.73654L17.7781 0.322331L0.807542 17.2929L2.22176 18.7071Z"
            fill="white"
          />
        </svg>
      </a>
    </div>
  </services-the-service-content-box>
</template>
