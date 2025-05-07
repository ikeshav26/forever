import React from 'react'
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='flex  justify-around items-center gap-12 text-center py-20 text-xs text-gray-700'>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.exchange_icon} className='w-12 mb-5'/>
        <p className='font-semibold text-xl'>Easy Exchange Policy</p>
        <p className='text-gray-400 text-[15px]'>We offer hasssle free exchange policy</p>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.quality_icon} className='w-12 mb-5'/>
        <p className='font-semibold text-xl'>7 Days Return Policy</p>
        <p className='text-gray-400 text-[15px]'>We provide 7 days return policy</p>
      </div>
      <div className='flex flex-col items-center justify-center '>
        <img src={assets.support_img} className='w-12 mb-5'/>
        <p className='font-semibold text-xl'>Best customer support</p>
        <p className='text-gray-400 text-[15px] '>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default Policy
