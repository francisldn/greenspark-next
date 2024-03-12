'use client'
import React from 'react'
import { useState } from 'react'

interface TooltipProps {
  tooltipText: string | undefined
}

export const Tooltip: React.FC<TooltipProps> = ({ tooltipText }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className="relative inline-block">
      <div
        className="bg-white text-green w-[12px] h-[12px] border-solid border-[1px] border-green flex items-center justify-center rounded-full cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span className="text-[8px] font-bold">i</span>
      </div>
      {isHover ? (
        <div className="absolute z-10 border-[1px] border-solid border-black bg-white text-black text-xs py-1 px-2 rounded whitespace-no-wrap bottom-3 left-1/2 transform -translate-x-1/2 transition-opacity duration-300">
          {tooltipText || ''}
        </div>
      ) : null}
    </div>
  )
}
