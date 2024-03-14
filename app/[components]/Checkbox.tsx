'use client'
import React, { useState } from 'react'
import { Label } from './Label'
import { useProducts } from '../[hooks]/useProducts'

interface CheckboxProps {
  productType: 'carbon' | 'plastic bottles' | 'trees'
}

export const Checkbox: React.FC<CheckboxProps> = ({ productType }) => {
  const { productData, setProductData } = useProducts()
  const [isHover, setHover] = useState(false)
  const isLinkToProfile = productData.find(
    (product) => product.type === productType,
  )?.linked
  return (
    <div className="flex justify-between relative text-green font-[400] text-[14px] w-full">
      <Label
        htmlFor={`public-profile-${productType}`}
        label="Link to Public Profile"
        enableTooltip={true}
        tooltipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div
        className={`flex w-[36px] h-[36px] rounded-full ${isHover ? 'bg-light-green opacity-50' : ''} -mr-[9px] -mt-[1px] z-0`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <div
        id={`public-profile-${productType}`}
        aria-label={`checkbox-link-to-public-profile-${productType}`}
        aria-describedby="link-to-public-profile"
        role="checkbox"
        aria-checked={isLinkToProfile}
        tabIndex={0}
        onClick={() => {
          setProductData(
            productData.map((product) => {
              if (product.type === productType) {
                return {
                  ...product,
                  linked: !product.linked,
                }
              }
              return product
            }),
          )
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute right-0 top-2 z-10 w-[18px] h-[18px] flex justify-center items-center border-solid border-[2px] border-black cursor-pointer  ${isLinkToProfile ? 'bg-green border-green border-solid border-[2px] text-white' : ''} hover:border-green rounded-sm`}
      >
        {isLinkToProfile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={4}
            width={16}
            height={16}
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : null}
      </div>
    </div>
  )
}
