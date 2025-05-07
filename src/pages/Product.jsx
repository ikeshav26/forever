import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productid}=useParams();
 const {products,currency}=useContext(ShopContext);
 const [productData, setproductData] = useState(false)
 const [image, setimage] = useState('')
 const [size, setsize] = useState('')

 const fetchProductData=async()=>{

  products.map((item)=>{
    if(item._id==productid){
      setproductData(item)
      setimage(item.image[0])
      return null;
    }
  })
 }

 useEffect(() => {
 fetchProductData()
 }, [productid])

  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 flex-col '>
        <div className='flex-1 flex gap-10'> 
          <div className='flex flex-col  overflow-x-auto gap-10'>
            {
              productData.image.map((item,index)=>(
                <img src={item} onClick={()=>setimage(item)} key={index} className='w-[40%] flex-shrink-0  cursor-pointer'></img>
              ))
            }
          </div>
          <div className='w-[70%] pr-10 h-full '>
            <img src={image} className='w-full h-[50%]'></img>
          </div>
          <div className='font-medium text-2xl mt-2 w-[70%]'>
          <h1>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} className='w-3' alt="" />
          <img src={assets.star_icon} className='w-3' alt="" />
          <img src={assets.star_icon} className='w-3' alt="" />
          <img src={assets.star_icon} className='w-3' alt="" />
          <img src={assets.star_dull_icon} className='w-3' alt="" />
          <p className='pl-2'>(122)</p>
        </div>
        <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-5 text-gray-500 w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'> 
          <p>Select Size</p>
          <div className='flex gap-2'> 
            {productData.sizes.map((item,index)=>(
              <button onClick={()=>setsize(item)} className={`border-2 py-2 px-4 bg-gray-300 cursor-pointer ${item === size ? 'border-orange-500':""}`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
        </div>
        </div>
        </div>
        <div className='mt-20'>
          <div className='flex '>
            <b className='border px-5 py-3 border-gray-400 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm border-gray-400'>Reviews(122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 border-gray-400'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
          </div>
        </div>
      </div>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product
