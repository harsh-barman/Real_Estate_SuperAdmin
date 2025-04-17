import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const AppLayout = () => {
  return (
    <div className='relative w-full h-screen flex justify-center items-center bg-[#00A58E]'>
      {/* <Header /> */}
      
      <div className='flex items-center justify-center h-screen'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default AppLayout
