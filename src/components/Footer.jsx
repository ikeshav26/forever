import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex  gap-14 my-10 mt-40 text-sm'>
            <div>
                <img  className='mb-5 w-32' src={assets.logo}/>
                <p className='w-full text-gray-600 '>"Stay connected with us for the latest updates, exclusive offers, and exciting new arrivals. Thank you for shopping with us – your satisfaction is our priority!"</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-500'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul  className='flex flex-col gap-1 text-gray-500'>
                    <li>+91-123-4567-890</li>
                    <li>FOREVER.EVER@GMAIL.COM</li>
                </ul>
            </div>
        </div>
        <div>
            <hr className='text-gray-700'/>
            <p className='py-5 text-sm text-center '>Copyright 2025@ forever.com -All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
