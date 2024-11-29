import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
       <span className=' mx-auto px-4 py-2 rounded-full bg-white font-mono font-medium '> No.1 Job Hunt Website
       </span> 
       <h1 className=' gap-20 text-5xl font-bold font-heading mt-6'>Search , Apply & Get your <span className=''>Dream Job</span></h1>
       <p className='my-3 text-xl  font-heading font-semibold'>Your gateway to limitless career Opportunities,<br /> Connecting Talent and Ambition through a sleek, <br /> User-friendly platform for every industry and job type.
       
         </p>

         <div
         className='flex w-[40%] shadow-2xl pl-3 rounded-full gap-4 mx-auto bg-white  '
         >
          <input type="text"
          placeholder='find  your dream job '
          className=' my-auto outline-none border-none w-full  bg-white'
          />
          <Button className="rounded-r-full bg-customBlack">
            <Search className='h-5 w-5  ' />
          </Button>
         </div>
         </div>
    </div>
    
  )
}

export default HeroSection
