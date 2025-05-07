import React from 'react'
import Titles from '../components/Titles'
import NewLetterBox from'../components/NewLetterBox'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Titles text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex  justify-center gap-10 mb-28'>
        <img className='max-w-[450px] ' src={assets.contact_img}/>
        <div className='flex flex-col gap-6 justify-center text-gray-600'>
          <b className='text-gray-800 text-2xl'>Our Store</b>
          <p className='text-xl'>54709 Willms Station<span className='block'>Suite 350, Washington, USA</span></p>
          <p className='text-xl'>Tel: (415) 555-0132<span className='block'>Email: admin@forever.com</span></p>
          <b className='text-gray-800 text-2xl'>Careers at Forever</b>
          <p className='text-xl'>Learn more about our teams and job openings.</p>
          <button className='border border-gray-500 w-[40%] py-3 px-1 text-gray-800'>Explore Jobs</button>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default Contact
