import React from 'react'
import { Tooltip } from './Tooltip'

interface LabelProps {
  label: string
  enableTooltip?: boolean
  tooltipText?: string
  htmlFor: string
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  label,
  enableTooltip = false,
  tooltipText,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="font-[400] text-[14px] leading-[17px] text-start flex justify-start items-center"
    >
      <div className="relative pr-[0.8rem] pt-[0.5rem]">
        <p>{label}</p>
        {enableTooltip ? (
          <div className="absolute top-0 right-0">
            <Tooltip tooltipText={tooltipText} />
          </div>
        ) : null}
      </div>
    </label>
  )
}
