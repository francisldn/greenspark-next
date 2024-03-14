'use client'
import React, { useState } from 'react'
import { Label } from './Label'
import { useProducts } from '../[hooks]/useProducts'

interface ToggleProps {
  productType: 'carbon' | 'plastic bottles' | 'trees'
}

export const Toggle: React.FC<ToggleProps> = ({ productType }) => {
  const [isHover, setHover] = useState(false)
  const { selectedProduct, setSelectedProduct, setProductData, productData } =
    useProducts()
  const isActivate = selectedProduct === productType
  return (
    <div className="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <Label htmlFor={`activate-badge-${productType}`} label="Activate badge" />
      <div
        id={`activate-badge-${productType}`}
        role="checkbox"
        aria-label={`checkbox-activate-badge-${productType}`}
        aria-checked={isActivate}
        onClick={() => {
          if (selectedProduct && selectedProduct === productType) {
            setSelectedProduct(undefined)
          } else {
            setSelectedProduct(productType)
          }
          setProductData(
            productData.map((product) => {
              return {
                ...product,
                active: isActivate,
              }
            }),
          )
        }}
        tabIndex={0}
        className={`relative z-0 w-[40px] h-[20px] flex border-[0.59px] rounded-[29.5px] shadow-[inset_0_0_5px_0_#afc6bd] border-solid border-light-green cursor-pointer ${isActivate ? 'justify-end bg-green' : 'justify-start'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`flex justify-center items-center z-10 rounded-full h-[28px] w-[28px] -mt-[4px] -ml-[4px] ${isHover ? 'bg-light-green opacity-50 z-10 relative' : ''} ${isActivate ? '-mr-[5px]' : ''}`}
        />
        <div
          className={`absolute z-20 h-[20px] w-[20px] rounded-full border-[2px] border-solid border-beige bg-white -top-[0.05rem] ${isHover ? 'z-20 bg-white !opacity-100' : ''} ${isActivate ? '-right-[0.08rem]' : 'left-0'}`}
        />
      </div>
    </div>
  )
}
