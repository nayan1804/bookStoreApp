import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import Signup from './component/Signup'
import Contact from './pages/Contact'


const App = () => {
  return (
   <>
  
  <div className='dark:bg-slate-900 dark:text-white'>

  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/course" element={<Courses />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>  {/* This is the new way to use React Router */}
  </div>
   </>
  )
}

export default App

