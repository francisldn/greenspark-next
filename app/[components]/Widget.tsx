import React, { useState } from 'react'
import { WidgetHeader } from './WidgetHeader'
import { Checkbox } from './Checkbox'
import { BadgeList } from './BadgeList'
import { Toggle } from './Toggle'
import { ProductDataType } from '../[types]/ProductData'
import { BadgeColor } from '../[utils]/BadgeColor'

interface WidgetProps {
  title: string
  subtitle: string
  isLinkToProfile: boolean
  badgeColor: string
  productType: ProductDataType['type']
}

export const Widget: React.FC<WidgetProps> = ({
  title,
  subtitle,
  isLinkToProfile,
  badgeColor,
  productType,
}) => {
  return (
    <div className="sm:min-w-[250px] max-w-[400px] w-full flex flex-col flex-1">
      <WidgetHeader title={title} subtitle={subtitle} bgColor={badgeColor} />
      <div className="flex flex-col gap-[10px] mt-[13.5px] w-full flex-1">
        <Checkbox productType={productType} />
        <BadgeList productType={productType} />
        <Toggle productType={productType} />
      </div>
    </div>
  )
}
