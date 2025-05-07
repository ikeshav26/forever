import React from 'react'
import Titles from '../components/Titles'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

const About = () => {
  
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Titles text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex  gap-16'>
        <img className='w-full max-w-[450px]' src={'https://foreverbuy.in/assets/about_img-BAJyTXw9.png'}/>
        <div className='flex flex-col justify-center gap-6 text-gray-600 '>
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-4xl py-4 '>
        <Titles text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex text-sm mb-20'>
        <div className='border  border-gray-400 px-10 py-10 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border border-gray-400  px-10 py-10 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border border-gray-400  px-10 py-10 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewLetterBox/>
    </div>
  )
}

export default About
