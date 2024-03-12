'use client'
import React, { useState } from 'react'
import { Label } from './Label'

interface CheckboxProps {
  defaultStatus: boolean
}

export const Checkbox: React.FC<CheckboxProps> = ({ defaultStatus }) => {
  const [isLinkToProfile, setLinkToProfile] = useState(defaultStatus)
  const [isHover, setHover] = useState(false)
  return (
    <div className="flex justify-between relative text-green font-[400] text-[14px] w-full">
      <Label
        htmlFor="public-profile"
        label="Link to Public Profile"
        enableTooltip={true}
        tooltipText="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />

      <div
        className={`flex w-[36px] h-[36px] rounded-full ${isHover ? 'bg-light-green opacity-50' : ''} -mr-2 z-0`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <div
        id="public-profile"
        aria-describedby="link-to-public-profile"
        role="checkbox"
        aria-checked={isLinkToProfile}
        tabIndex={0}
        onClick={() => setLinkToProfile(!isLinkToProfile)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`absolute right-0 top-3 z-10 w-[18px] h-[18px] flex justify-center items-center border-solid border-[2px] border-black  ${isLinkToProfile ? 'bg-green border-green border-solid border-[2px] text-white' : ''} hover:border-green rounded-sm`}
      >
        {isLinkToProfile ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width={4}
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
