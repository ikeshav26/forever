import React from 'react'

const Titles = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
      <p className='text-gray-500'>{text1}<span className='text-gray-500 font-medium ml-2'>{text2}</span></p>
      <p className='w-8 h-[1px] bg-gray-700'></p>
    </div>
  )
}

export default Titles
