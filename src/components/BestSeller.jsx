import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titles from './Titles';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products}=useContext(ShopContext);
    const [bestseller, setbestseller] = useState([])

    useEffect(()=>{
        const bestProduct=products.filter((item)=>(item.bestseller))
    setbestseller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Titles text1={"BEST"} text2={"SELLERS"}/>
        <p className=' text-xs mb-5 text-gray-600'>
        "Discover our best sellers – customer favorites that combine style, quality, and unbeatable comfort."
        </p>
      </div>

       {/*rendering products */}
       <div className='grid grid-cols-5  gap-4 gap-y-6'>
        {
            bestseller.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default BestSeller
