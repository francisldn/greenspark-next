import React from 'react'
import { useProducts } from '../[hooks]/useProducts'
import { Widget } from './Widget'
import { headerBackground, headerColor } from '../[utils]/WidgetHeader'

export const ProductList = () => {
  const { productData, selectedProduct, badgeColor } = useProducts()

  return (
    <div className="flex flex-col gap-y-[42px] lg:gap-x-[20px] justify-between items-center lg:items-start lg:flex-row flex-1">
      {productData && productData.length > 0
        ? productData.map((product, i) => (
            <Widget
              key={product.id}
              title={`This product ${product.action}`}
              productType={product.type}
              subtitle={`${product.type === 'carbon' ? product.amount + 'kgs of' : product.amount} ${product.type}`}
              badgeColor={badgeColor?.[product.type] || ''}
            />
          ))
        : null}
    </div>
  )
}
