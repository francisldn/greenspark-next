'use client'
import React, { useState } from 'react'
import { Label } from './Label'

interface ToggleProps {
  defaultStatus: boolean
}

export const Toggle: React.FC<ToggleProps> = ({ defaultStatus }) => {
  const [isActivate, setActivate] = useState(defaultStatus)
  const [isHover, setHover] = useState(false)
  return (
    <div className="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <Label htmlFor="activate-badge" label="Activate badge" />
      <div
        id="activate-badge"
        role="checkbox"
        aria-checked={isActivate}
        onClick={() => setActivate(!isActivate)}
        tabIndex={0}
        className={`relative z-0 w-[40px] h-[20px] flex border-[0.59px] rounded-[29.5px] shadow-[inset_0_0_5px_0_#afc6bd] border-solid border-light-green ${isActivate ? 'justify-end bg-green' : 'justify-start'}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className={`flex justify-center items-center z-10 rounded-full h-[28px] w-[28px] -mt-[4px] -ml-[4px] ${isHover ? 'bg-light-green opacity-50 z-10 relative' : ''} ${isActivate ? '-mr-[5px]' : ''}`}
        />
        <div
          className={`absolute z-20 h-[20px] w-[20px] rounded-full border-[2px] border-solid border-yellow bg-white -top-[0.05rem] ${isHover ? 'z-20 bg-white !opacity-100' : ''} ${isActivate ? '-right-[0.08rem]' : 'left-0'}`}
        />
      </div>
    </div>
  )
}