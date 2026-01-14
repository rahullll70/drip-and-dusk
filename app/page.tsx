import React from 'react'
import Navbar from '../components/navbar'
import Beverage from '@/components/Beverage'
import OurStory from '@/components/OurStory'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beverage />
      <OurStory />
      <Footer />
    </div>
  )
}

export default page
