import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Titles from './Titles';
import ProductItem from './ProductItem';

const Latestcollection = () => {
  const {products}= useContext(ShopContext);
  const [latestproducts, setlatestproducts] = useState([]);

  useEffect(()=>{
    setlatestproducts(products.slice(0,10));
  })
  return (
    <div className='my-18'>
      <div className='text-center py-5 text-3xl'>
        <Titles text1={"LATEST"} text2={"COLLECTIONS"}/>
        <p className=' text-xs mb-5  text-gray-600'>
        "Explore our latest collection of stylish, high-quality products designed to elevate your look."
        </p>
      </div>      

      {/*rendering products */}
      <div className='grid grid-cols-5  gap-4 gap-y-6'>
        {
          latestproducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          ))
        }
      </div>
    </div>
  )
}

export default Latestcollection
