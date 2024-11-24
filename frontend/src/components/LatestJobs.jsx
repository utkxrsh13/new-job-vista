import React from 'react'
import LatestJobCards from './ui/LatestJobCards'
const randomjobs = [
    1, 2, 3, 4, 5, 6, 7, 8
]

export default function LatestJobs() {
    return (
        <div className=' max-w-7xl mx-auto my-20  '>
            <h1 className='font-bold text-3xl font-heading'><span className='text-black'> Latest and top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-4'>
                {
                    randomjobs.slice(0,6).map((item, index) => <LatestJobCards />)
                }
            </div>

        </div>
    )
}
