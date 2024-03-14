'use client'
import React from 'react'
import { BadgeColor } from '../[utils]/BadgeColor'
import { Label } from './Label'
import { useProducts } from '../[hooks]/useProducts'
import { ProductDataType } from '../[types]/ProductData'

interface BadgeListProps {
  productType: 'carbon' | 'plastic bottles' | 'trees'
}

export const BadgeList: React.FC<BadgeListProps> = ({ productType }) => {
  const { badgeColor, setBadgeColor, setProductData, productData } =
    useProducts()
  return (
    <div className="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <Label
        htmlFor={`select-badge-color-${productType}`}
        label="Badge colour"
      />
      <div
        role="listbox"
        className="flex gap-[4px]"
        aria-label={`select-badge-color-${productType}`}
        aria-labelledby={`select-badge-color-${productType}`}
        tabIndex={0}
      >
        {Object.values(BadgeColor).map((color) => (
          <div
            key={color}
            className={`w-[16px] h-[16px] p-0 m-0 hover:opacity-80 ${color} cursor-pointer ${badgeColor?.[productType] === color ? '!border-2 !border-divider !border-solid' : ''} ${color === BadgeColor.WHITE ? 'border-[1px] border-solid border-gray-200' : ''}`}
            onClick={() => {
              setBadgeColor({
                ...badgeColor,
                [productType]: color,
              })
              setProductData(
                productData.map((product) => {
                  if (product.type === productType) {
                    return {
                      ...product,
                      selectedColor: color.split(
                        '-',
                      )[1] as ProductDataType['selectedColor'],
                    }
                  }
                  return product
                }),
              )
            }}
            role="option"
            aria-selected={badgeColor?.[productType] === color}
            aria-label={`select-${color}`}
          />
        ))}
      </div>
    </div>
  )
}
