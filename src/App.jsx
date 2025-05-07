"use client"

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from "./pages/About"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Placeorder from "./pages/Placeorder"
import Product from "./pages/Product"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'

const App = () => {

  return (
    <div className='px-4  sm:px-[5vw] bd:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeorder' element={<Placeorder />} />
        <Route path='/product/:productid' element={<Product />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
