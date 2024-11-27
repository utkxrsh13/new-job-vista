import React from 'react'
import LatestJobCards from './ui/LatestJobCards'
import { useSelector } from 'react-redux'
const randomjobs = [
    1, 2, 3, 4, 5, 6, 7, 8
]


export default function LatestJobs() {
    const {allJobs}=useSelector(store=>store.job)
    return (
        <div className=' max-w-7xl mx-auto my-20  '>
            <h1 className='font-bold text-3xl font-heading'><span className='text-black'> Latest and top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-4'>
                {
                   allJobs.length <=0 ? <span>no job found</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job.id} job={job}/>)
                }
            </div>

        </div>
    )
}
