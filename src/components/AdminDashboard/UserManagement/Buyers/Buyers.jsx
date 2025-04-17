import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { IoMdStar } from 'react-icons/io'
import NewBuyers from './NewBuyers/NewBuyers'
import RecentRegisteredBuyers from '../RecentRegistered/RecentRegisteredBuyers'


const Buyers = () => {

  const handleButton = () => {
    alert("Currently Under Developement");
}

  return (
    <section className='w-full flex flex-col justify-center'>
      <div className='w-full flex mt-10 justify-center gap-6'>
        {/* left Division */}
        <div className='w-1/2 h-fit rounded-xl px-6 py-6 bg-[#FFFFFF] overflow-hidden'>
          <NewBuyers />
        </div>

        {/* Right Division */}
        <div className='w-1/2 h-fit rounded-xl px-6 py-6 bg-[#FFFFFF]'>
          <p className='text-[#000000]/[70%] text-xl font-[500]'>Recent Reviews</p>

          <ul className='w-full h-98 mt-6 flex flex-col overflow-y-scroll no-scrollbar'>
            {
              [1, 2, 3, 4, 5].map((item) => <li key={item} className='w-full py-4 text-black p-2 border-b border-[#CCC8C8]'>
                <div className='flex gap-4 items-center'>
                  <img src="/profile1.jpeg" className='w-10 h-10 rounded-full' />
                  <h1 className='text-[#222222] font-[400]'>Chetan</h1>
                  <div className='text-yellow-300 flex items-center'>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar /><IoMdStar />
                  </div>
                </div>
                <div className='w-full'>
                  <h3 className='text-[#222222] mt-1 font-[400]'>Pune | Searched for Rental Properties</h3>
                  <p className='text-sm text-justify text-gray-600 italic mt-1 w-full'>Lorem ipsum dolor sit amet consectetur. Rhoncus nullam in ut et. Laoreet aenean semper vestibulum nibh ut vitae feugiat porttitor. Pretium ac mattis dignissim sit. Dui blandit fermentum tempus quis sed vel viverra senectus.</p>
                </div>
              </li>)
            }
          </ul>
        </div>
      </div>

      <section className='w-full py-6 px-8 mt-10 bg-white rounded-xl'>
        <div className='w-full flex justify-between'>
          <p className='text-[#000000]/[70%] text-xl font-[600]'>Recent Registered</p>
          
          <p className='text-sm text-[#8B909A] font-[500] mr-4' onClick={handleButton}>View More</p>
        </div>

        <RecentRegisteredBuyers />
      </section>
    </section>
  )
}

export default Buyers
