
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

const Advertisements = () => {


  return ( <>
    { 
      <div className='w-full flex flex-col rounded bg-[#FFFFFF] px-6 py-6 gap-16 mb-10'>
        <Outlet />
      </div>

    }
  </>
  )
}

export default Advertisements
