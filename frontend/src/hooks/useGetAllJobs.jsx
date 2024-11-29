import { setAllJobs } from '@/Redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchAllJobs=async()=>{
        try{
            const res=await axios.get(`${JOB_API_END_POINT}/get` , {withCredentials:true});
            console.log(res);
            if(res.data.success){
                if(res.data.token && res.data.user){
                    // localStorage.setItem("token",res.data.token);
                    localStorage.setItem("job", JSON.stringify({
                        fullname: "saurabh",
                        email: "saurabh@123",
                        phoneNumber: 1234567890,
                        role: "student",
                        profile: {
                          profilePhoto: "https://res.cloudinary.com/dzba43nps/image/upload/v1732681193/eb0ukdoa8bjtufodqsob.jpg",
                          skills: [],
                          bio: "i am a frontend developer",
                          resume: "https://res.cloudinary.com/dzba43nps/image/upload/v1732681696/cnhzkx64zik35qixqc5l.pdf",
                          resumeOriginalName: "TusharPatel_resume.pdf"
                        },
                        token : res.data.token
                      }));
                      
                } 
                
                dispatch(setAllJobs(res.data.jobs))

            }
        }
        catch(error){
            console.log(error);
            
        }
    }
    fetchAllJobs();

  },[])
}

export default useGetAllJobs
