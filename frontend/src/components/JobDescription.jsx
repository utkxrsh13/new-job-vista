import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/Redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';


const JobDescription = ({job}) => {
    const {singleJob} = useSelector(store => store.job);
    const {user} = useSelector(store=>store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob(); 
    },[jobId,dispatch, user?._id]);

    return (
        <div className='max-w-7xl mx-auto my-10 '>
            <div  className='flex items-center justify-between '>
                <div>
                <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className={'text-green-600 font-bold'} variant="ghost"> {singleJob?.position}Positions</Badge>
                    <Badge className={'text-blue-400 font-bold'} variant="ghost"> job type</Badge>
                    <Badge className={'text-[#7209b7] font-bold'} variant="ghost">23LPA</Badge>
                </div>
            </div>
            <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-500 ' : 'bg-purple-700 hover:bg-purple-800'  }`}>{isApplied ? 'already applied' : 'applied now'}</Button>
            </div>
            <div>
                <h1 className='font-medium py-4 border-b-2 border-gray-300'>
                     JobDescription
                </h1>
                <div>
                    <h1 className='font-bold my-1 '>Role: <span className='pl-4 font-normal text-gray-800'>{job?.jobType}</span></h1>
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
