import React from 'react'

const NewLetterBox = () => {
    const submithandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='text-center mb-10'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-500 mt-3'>"Join our subscription for exclusive offers, early access to new arrivals, and special discounts."</p>
      <form onSubmit={submithandler} className='w-2/3 flex items-center mt-4 mx-[18%]'>
        <input className='w-full border-1 border-black  px-10 py-3 ' type='email' placeholder='ENTER YOUR EMAIL' required/>
        <button className='bg-black cursor-pointer text-white text-xs px-10 py-4 ' type='submit'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewLetterBox
