import React from 'react'
import { Button } from './ui/button'
import Navbar from './shared/Navbar'
import Job from './Job'
const randomjobs = [1, 2, 3, 4]

function Browse() {

  const randomjobs=(store=>store.auth)
  return (



    <div  className='bg-customGray min-h-screen'>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10 '>
        <h1 className='font-bold text-xl  '>Search Result ({randomjobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 '>
          {
            randomjobs.map((job) => {
              return (
                <Job />
              )
            })
          }
        </div>
      </div>



    </div>
  )
}

export default Browse
