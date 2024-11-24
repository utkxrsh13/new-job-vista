import React from 'react'
import { Badge } from './badge'

function LatestJobCards() {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
      
      <h1 className='font-medium text-lg '>company name</h1>
      <p className='text-sm text-gray-500'> India</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2 '>Job title</h1>
        <p className='font-medium'> job discription</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, optio?</p>
      </div>
      <div>
        <Badge className={'text-green-600 font-bold' } variant={'ghost'}>12 positions</Badge>
        <Badge className={'text-blue-600 font-bold' } variant={'ghost'}>Part Time</Badge>
        <Badge className={'text-purple-700 font-bold' } variant={'ghost'}>23 Lpa</Badge>
      </div>
    </div>
  )
}

export default LatestJobCards
