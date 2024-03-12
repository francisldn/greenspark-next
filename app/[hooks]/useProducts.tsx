'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
import { ProductDataType } from '../[types]/ProductData'
import { BadgeColor } from '../[utils]/BadgeColor'
import { getData } from '../[api]/data.api'

interface BadgeColorType {
  [key: string]: BadgeColor
}

interface ProductContextType {
  selectedProduct: ProductDataType['type'] | undefined
  setSelectedProduct: (product: ProductDataType['type'] | undefined) => void
  badgeColor: BadgeColorType | undefined
  setBadgeColor: (badgeColor: BadgeColorType) => void
  productData: ProductDataType[]
  setProductData: (productData: ProductDataType[]) => void
}

export const ProductContext = createContext<ProductContextType>({
  selectedProduct: undefined,
  setSelectedProduct: () => {},
  badgeColor: undefined,
  setBadgeColor: () => {},
  productData: [],
  setProductData: () => {},
})

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [selectedProduct, setSelectedProduct] = useState<
    ProductDataType['type'] | undefined
  >('carbon')
  const [badgeColor, setBadgeColor] = useState<BadgeColorType | undefined>({
    carbon: BadgeColor.BLUE,
  })
  const [productData, setProductData] = useState<ProductDataType[]>([])

  useEffect(() => {
    getData().then((res) => {
      if (res && res.length > 0) {
        setProductData(res)
        setSelectedProduct(res.find((product) => product.active)?.type)
        setBadgeColor(
          res.reduce((acc, product) => {
            return {
              ...acc,
              [product.type]:
                BadgeColor[
                  product.selectedColor.toUpperCase() as keyof typeof BadgeColor
                ],
            }
          }, {} as BadgeColorType),
        )
      }
    })
  }, [])

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        badgeColor,
        setBadgeColor,
        productData,
        setProductData,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  return useContext(ProductContext)
}
