import { getData } from './[api]/data.api'
import { Widget } from './[components]/Widget'
import { BadgeColor } from './[utils]/BadgeColor'
import { headerBackground, headerColor } from './[utils]/WidgetHeader'

export default async function Home() {
  let data = await getData()

  return (
    <main className="flex w-full h-full items-center justify-between sm:p-16 lg:p-24 p-4">
      <div className="flex flex-col px-[36px] pt-[36px] pb-[139px] bg-light-yellow shadow-[0_10px_20px_0px_rgb(0,0,0,0.2)] w-full rounded-[8px] min-w-[375px]">
        <h1 className="font-[700] text-[30px] leading-[36px] mb-[12px] text-center lg:text-start">
          Per product widgets
        </h1>
        <hr className="border-[2px] border-solid border-divider w-full mb-[20px]" />
        <div className="flex flex-col gap-y-[42px] lg:gap-x-[20px] justify-between items-center lg:items-start lg:flex-row flex-1">
          {data && data.length > 0
            ? data.map((product, i) => (
                <Widget
                  key={product.id}
                  title={`This product ${product.action}`}
                  subtitle={`${product.type === 'carbon' ? product.amount + 'kgs of' : product.amount} ${product.type}`}
                  bgColor={headerBackground[i]}
                  textColor={headerColor[i]}
                  isLinkToProfile={product.linked}
                  badgeColor={
                    BadgeColor[
                      product.selectedColor.toUpperCase() as keyof typeof BadgeColor
                    ]
                  }
                  isActivate={product.active}
                />
              ))
            : null}
        </div>
      </div>
    </main>
  )
}
