import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import Appliedjobtable from './Appliedjobtable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
// import store from '@/Redux/Store'
// import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'
// import { USER_API_END_POINT } from '@/utils/constant'
// import store from '@/Redux/Store'

// const skills = [css,html];
const isResume = true;
// useGetAppliedJobs();


const Profile = () => {
    const [open,setOpen]=useState(false);
    const {user}=useSelector(store=>store.auth);
    // console.log(user?.profile?.resumeOriginalName);
    // console.log(user?.profile?.skills);

    
    
    
    return (
        <div className='bg-customGray'>

            <Navbar />
            
            <div className='max-w-4xl mx-auto bg-customGray min-h-screen border border-gray-300 rounded-2xl my-5 p-8 '>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>
                        <Avatar className='h-24 w-24'>
                            <AvatarImage className='h-24 w-24' src={user?.profile?.profilePhoto} alt='/profile' />

                        </Avatar>
                        <div className=''>
                            <h1 className='font-medium text-xl '>{user?.fullname}</h1>
                            
                            
                            <p>{user?.profile?.bio}</p>
                        </div>



                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right" variant='outline'><Pen /></Button>

                </div>
                <div className='my-5'>
                    <div className='flex gap-3 my-2'>
                        <Mail />
                        <span>{user?.email}</span>
                    </div>
                    <div className='flex gap-3'>
                        <Contact />
                        <span>{user?.phoneNumber}</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>skills</h1>
                    <div className='flex items-center gap-3'>
                        {
                         user?.profile?.skills.length !== 0 ?  user?.profile?.skills.map((item, index) => <Badge key={index}>{user?.profile?.skills}</Badge>) : <span>NA</span>
                        }
                    </div>

                </div>
                <div className='grid max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a className='text-blue-500 hover:underline font-bold text-sm' target='blank' href={user?.profile?.resume}>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>

                    }

                </div>
            </div>
            <div className=' max-w-4xl shadow-xl  mx-auto bg-customGray rounded-2xl'>
                <h1 className=' mb-6  font-bold text-xl  '>Applied jobs</h1>
                < Appliedjobtable />
            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen}/>


        </div>
    )
}

export default Profile

