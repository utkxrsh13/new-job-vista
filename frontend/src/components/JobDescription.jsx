import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'


const JobDescription = () => {
    const isapplied=true;
    return (
        <div className='max-w-7xl mx-auto my-10 '>
            <div  className='flex items-center justify-between '>
                <div>
                <h1 className='font-bold text-xl'>Title</h1>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-green-600 font-bold'} variant="ghost"> Positions</Badge>
                    <Badge className={'text-blue-400 font-bold'} variant="ghost"> job type</Badge>
                    <Badge className={'text-[#7209b7] font-bold'} variant="ghost">23LPA</Badge>
                </div>
            </div>
            <Button disabled={isapplied} className={`rounded-lg ${isapplied ? 'bg-gray-500 ' : 'bg-purple-700 hover:bg-purple-800'  }`}>{isapplied ? 'already applied' : 'applied now'}</Button>
            </div>
            <div>
                <h1 className='font-medium py-4 border-b-2 border-gray-300'>
                     JobDescription
                </h1>
                <div>
                    <h1 className='font-bold my-1 '>Role: <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>
                    <h1 className='font-bold my-1 '>loaction: <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>
                    <h1 className='font-bold my-1 '>description: <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>
                    <h1 className='font-bold my-1 '>experience: <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>


                    <h1 className='font-bold my-1 '>total applicant : <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>
                    <h1 className='font-bold my-1 '>Posted Date : <span className='pl-4 font-normal text-gray-800'>forntend developer</span></h1>




                </div>
            </div>

        </div>
    )
}

export default JobDescription
