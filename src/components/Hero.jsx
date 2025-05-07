import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex  flex-col mt-5 sm:flex-row border border-gray-400'>
      <div className='w-full  flex items-center gap-32 justify-center py-10 '>
        <div className='text-[#414141]'>
            <div className='flex items-center gap-2'>
                <p className='w-8 h-[2px] bg-[#414141]'></p>
                <p className='font-medium text-sm'>OUR BESTSELLERS</p>
            </div>
            <h1 className='text-3xl leading-relaxed'>LATEST ARRIVALS</h1>
            <div className='flex items-center gap-2'>
                <p className='font-medium text-sm'>SHOP NOW</p>
                <p  className='w-8 h-[2px] bg-[#414141]'></p>
            </div>
        </div>
        <img src={assets.hero_img} className='w-1/2 '></img>
      </div>
    </div>
  )
}

export default Hero
