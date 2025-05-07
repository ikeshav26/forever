import React, { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
const [visible, setvisible] = useState(false);

const {setShowsearch}=useContext(ShopContext);

  return (
    <div className='flex items-center  justify-between py-5 font-medium'>
     <Link to='/'> <img src={assets.logo} className='h-15'></img></Link>
      <ul className='flex  gap-7'>
        <NavLink to='/' className=''>
            <p className='flex flex-col justify-center items-center gap-1 text-xl'>HOME</p>
            <hr className='text-black  hidden h-[1px]'></hr>
        </NavLink>
        <NavLink to='/collection' className=''>
            <p className='flex flex-col justify-center items-center gap-1 text-xl'>COLLECTION</p>
            <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
        <NavLink to='/about' className=''>
        <p className='flex flex-col justify-center items-center gap-1 text-xl'>ABOUT</p>
        <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
        <NavLink to='/contact' className=''>
        <p className='flex flex-col justify-center items-center gap-1 text-xl'>CONTACT</p>
        <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=>{
          setShowsearch(true);
        }}src={assets.search_icon} className='w-6 cursor-pointer'></img>
        <div className='relative group'>
            <img src={assets.profile_icon} className='w-6 cursor-pointer'></img>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p className='cursor-pointer hover:text-black'>Orders</p>
                    <p className='cursor-pointer hover:text-black'>Log Out</p>
                </div>
            </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon}  className='w-6 cursor-pointer'></img>
         <p className='absolute right-[-5px] bottom-[-7px] w-4 leading-4 bg-black text-white rounded-full text-center aspect-square text-[10px]'>10</p>
        </Link>
        <img src={assets.menu_icon} onClick={()=>{setvisible(true)}} className='w-6 cursor-pointer '></img>
      </div>


      <div className={`absolute text-gray-500  flex flex-col justify-center gap-[20vh] items-center top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'} `}>
        <img src={assets.cross_icon} className=' px-3 py-3  rounded-full border-2 border-gray-500 w-10 cursor-pointer' onClick={()=>{setvisible(false)}}></img>
      <ul className='flex flex-col justify-center items-center  gap-7'>
        <NavLink to='/' onClick={()=>{setvisible(false)}} className=''>
            <p className='flex flex-col justify-center items-center gap-1 text-xl'>HOME</p>
            <hr className='text-black  hidden h-[1px]'></hr>
        </NavLink>
        <NavLink onClick={()=>{setvisible(false)}} to='/collection' className=''>
            <p className='flex flex-col justify-center items-center gap-1 text-xl'>COLLECTION</p>
            <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
        <NavLink onClick={()=>{setvisible(false)}} to='/about' className=''>
        <p className='flex flex-col justify-center items-center gap-1 text-xl'>ABOUT</p>
        <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
        <NavLink onClick={()=>{setvisible(false)}} to='/contact' className=''>
        <p className='flex flex-col justify-center items-center gap-1 text-xl'>CONTACT</p>
        <hr className='text-black hidden  h-[1.5px]'></hr>
        </NavLink>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
