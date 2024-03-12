import React from 'react'
import Image from 'next/image'
import subtract from '../../public/subtract.svg'
import subtract_dark from '../../public/subtract_dark.svg'

interface WidgetHeaderProps {
  title: string
  subtitle: string
  bgColor: string
  textColor: string
}

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  title,
  subtitle,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} flex flex-1 justify-start items-center gap-[12px] lg:gap-[10%] rounded-[5.95px] px-[5%] py-[12.65px] w-full`}
    >
      <div className="w-[39.7px] flex flex-col gap-[2px] items-center">
        <Image
          src={textColor === 'text-green' ? subtract_dark : subtract}
          alt="logo-icon"
          width={32.26}
          height={32.26}
        />
        <p className="text-[9.18px] tracking-[-0.01rem]">greenspark</p>
      </div>
      <div className="flex flex-col gap-[3.97px]">
        <h4 className="text-[12.41px]  font-[400] leading-[15.07px]">
          {title}
        </h4>
        <p className="text-[17.86px] leading-[21.7px] font-[700] tracking-wide">
          {subtitle}
        </p>
      </div>
    </div>
  )
}
