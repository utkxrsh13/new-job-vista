import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'

function Home() {
  return (
    <div className='bg-customGray'>
      <Navbar/>
      < HeroSection />
       <CategoryCarousel/>
      <LatestJobs/>
      <Footer/> 
    </div>
  )
}

export default Home
