"use client"
import React from 'react'
import Hero from '../components/Hero'
import Latestcollection from '../components/Latestcollection'
import BestSeller from '../components/BestSeller'
import Policy from '../components/Policy'
import NewLetterBox from '../components/NewLetterBox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection/>
      <BestSeller/>
      <Policy/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
