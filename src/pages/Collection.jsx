import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Titles from '../components/Titles';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products}= useContext(ShopContext);
  const [ShowFilter, setShowFilter] = useState(true)
  const [filterprodcuts, setfilterprodcuts] = useState([])
  const [Category, setCategory] = useState([])
  const [Subcategory, setSubcategory] = useState([])
  const [sortType, setsortType] = useState('relevant')

  const toggleCategory=(e)=>{
    if(Category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory=(e)=>{
    if(Subcategory.includes(e.target.value)){
      setSubcategory(prev=>prev.filter(item=>item !== e.target.value))
    }
    else{
      setSubcategory(prev=>[...prev,e.target.value])
    }
  }

  const applyfilter=()=>{
    let productsCopy=products.slice();

    if(Category.length>0){
      productsCopy=productsCopy.filter(item=>Category.includes(item.category))
    }

    if(Subcategory.length>0){
      productsCopy=productsCopy.filter(item=>Subcategory.includes(item.subCategory))
    }
    setfilterprodcuts(productsCopy);
  }

const sortProducts=()=>{
  let fpcopy=filterprodcuts.slice();

  switch(sortType){
    case 'low-high':
      setfilterprodcuts(fpcopy.sort((a,b)=>a.price-b.price));
      break;

    case 'high-low':
      setfilterprodcuts(fpcopy.sort((a,b)=>(b.price-a.price)));
      break;

    default :
    applyfilter();
    break;
  }
}

useEffect(() => {
  sortProducts()
}, [sortType])

useEffect(() => {
  applyfilter();
}, [Category,Subcategory])

 


  return (
    <div className='flex  gap-1 pt-10 border-t'>
     
     {/* filter options */}
     <div className='min-w-60 flex flex-col'>
      <p className='my-2 text-xl flex items-center cursor pointer gap-2'>FILTERS
        <img className={ `h-3 ${ShowFilter?'rotate-90':''}`} src={assets.dropdown_icon} ></img>
      </p>
     
      {/*Category filter */}
      <div className={`border  border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ? '':'hidden'}`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Men'}/>Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Women'}/>Women
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox' onChange={toggleCategory} value={'Kids'}/>Kids
          </p>
        </div>
      </div>

       {/*Subcategory filter*/}
      <div className={`border  border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? '':'hidden'}`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox'onChange={toggleSubCategory} value={'Topwear'}/>Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox'onChange={toggleSubCategory} value={'Bottomwear'}/>Bottomwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type='checkbox'onChange={toggleSubCategory} value={'Winterwear'}/>WInterwear
          </p>
        </div>
      </div>
      </div>

      {/*right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-2xl ml-10  mb-4'>
          <Titles  text1={'ALL'} text2={'COLLECTIONS'}/>
          {/** product sort */}
          <select onChange={(e)=>{setsortType(e.target.value)}} className='border-2 border-gray-300 text-sm px-2'>
            <option value="Relevant">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>
      

      {/*map products */}
      <div className='grid grid-cols-4 gap-4 gap-y-6 ml-10'>
        {
          filterprodcuts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Collection
