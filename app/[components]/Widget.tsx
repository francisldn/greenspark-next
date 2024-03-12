import React from 'react'
import { WidgetHeader } from './WidgetHeader'
import { Checkbox } from './Checkbox'
import { BadgeList } from './BadgeList'
import { Toggle } from './Toggle'

interface WidgetProps {
  title: string
  subtitle: string
  bgColor: string
  isLinkToProfile: boolean
  badgeColor: string
  isActivate: boolean
  textColor: string
}

export const Widget: React.FC<WidgetProps> = ({
  title,
  subtitle,
  bgColor,
  textColor,
  isLinkToProfile,
  badgeColor,
  isActivate,
}) => {
  return (
    <div className="sm:min-w-[250px] max-w-[400px] w-full flex flex-col flex-1">
      <WidgetHeader
        title={title}
        subtitle={subtitle}
        bgColor={bgColor}
        textColor={textColor}
      />
      <div className="flex flex-col gap-[10px] mt-[13.5px] w-full flex-1">
        <Checkbox defaultStatus={isLinkToProfile} />
        <BadgeList defaultColor={badgeColor} />
        <Toggle defaultStatus={isActivate} />
      </div>
    </div>
  )
}
