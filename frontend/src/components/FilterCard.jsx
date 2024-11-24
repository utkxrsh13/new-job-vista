import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '@/redux/jobSlice'

const fitlerData = [
    {
        fitlerType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
    },
    {
        fitlerType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
    },
    {
        fitlerType: "Salary",
        array: ["1-3 Lpa", "3-5 Lpa", "5-8 Lpa"]
    },
]

const FilterCard = () => {
    // const [selectedValue, setSelectedValue] = useState('');
    // const dispatch = useDispatch();
    // const changeHandler = (value) => {
    //     setSelectedValue(value);
    // }
    // useEffect(()=>{
    //     dispatch(setSearchedQuery(selectedValue));
    // },[selectedValue]);
    return (
        <div className='w-full  p-3 rounded-md bg-customGray min-h-screen'>
            <h1 className='text-lg  font-bold'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup>
                {
                    fitlerData.map((data, idx) => (
                        <div>
                            <h1 className='font-bold'>{data.fitlerType}</h1>
                            <hr className='mt-2' />
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className=' flex flex-centre space-x-2 my-2'>
                                            <RadioGroupItem className=" mt-1" value={item} />
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })






                            }
                        </div>
                    ))
                }

            </RadioGroup>
        </div>
    )
}

export default FilterCard