import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'

function Home() {
  useGetAllJobs();
  return (
    <div className='bg-customGray min-h-screen'>
      <Navbar/>
      < HeroSection />
       <CategoryCarousel/>
      <LatestJobs/>
      <Footer/> 
    </div>
  )
}

export default Home
