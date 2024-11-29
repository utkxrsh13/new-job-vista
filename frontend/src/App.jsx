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
  }



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
