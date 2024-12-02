// import { useState } from 'react'
//  import Navbar from './components/shared/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJobs from './components/admin/PostJobs'
import Applicants from './components/admin/Applicants'
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/Description/:jobid',
    element: <JobDescription />
  },
  
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  //for admins
  {
    path:"/admin/companies",
    element:<Companies/> 
  },
  {
    path:"/admin/companies/Create",
    element:<CompanyCreate/> 
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/> 
  },
  {
    path:"/admin/jobs",
    element:<AdminJobs/> 
  },
  {
    path:"/admin/jobs/create",
    element:<PostJobs/> 
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants/> 
  },



])
function App() {
  return (
    <div >
      <div  >
        <RouterProvider router={appRouter} />
      </div>
    </div>
  )
}

export default App
