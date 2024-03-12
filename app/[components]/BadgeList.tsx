'use client'
import React, { useState } from 'react'
import { BadgeColor } from '../[utils]/BadgeColor'
import { Label } from './Label'

interface BadgeListProps {
  defaultColor: BadgeColor | string
}

export const BadgeList: React.FC<BadgeListProps> = ({ defaultColor }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor || '')
  return (
    <div className="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <Label htmlFor="select-badge-color" label="Badge colour" />
      <div
        role="listbox"
        className="flex gap-[4px]"
        aria-labelledby="select-badge-color"
        tabIndex={0}
      >
        {Object.values(BadgeColor).map((color) => (
          <div
            key={color}
            className={`w-[16px] h-[16px] p-0 m-0 ${color} cursor-pointer ${selectedColor === color ? '!border-2 !border-divider !border-solid' : ''} ${color === BadgeColor.WHITE ? 'border-[1px] border-solid border-gray-200' : ''}`}
            onClick={() => setSelectedColor(color)}
            role="option"
            aria-selected={selectedColor === color}
          />
        ))}
      </div>
    </div>
  )
}
