import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { IoMdStar } from 'react-icons/io'
import RecentRegistered from '../../RecentRegistered/RecentRegisteredSeller'
import { useNavigate } from 'react-router-dom'

const SellerDashboard = () => {

  const handleButton = () => {
    alert("Currently Under Developement");
}

  const navigate = useNavigate();

  return (
    <>
     <section className='w-full flex mt-10 justify-center gap-6'>
      {/* left Division */}
      <div className='w-1/2 h-fit rounded-xl px-6 py-6 bg-[#FFFFFF]'>
        <div className='w-full flex justify-between'>
          <p className='text-[#000000]/[70%] text-xl font-[500]'>Recent Registrations</p>
          <p className='text-[#000000]/[70%] text-sm font-[400] mr-4' onClick={() => navigate("/superadmin/usermanagement/seller/recentregistrations")}>View More</p>
        </div>

        <ul className='w-full h-100 overflow-y-scroll no-scrollbar flex flex-col mt-4'>
          {
            [1, 2, 3, 4, 5, 6, 7].map((item) => <li key={item} className='w-full flex border-b-2 border-[#BBB9B9] py-2 '>
              <Icon icon="circum:image-on" width="62" height="62" className='p-4 bg-[#F0F0F0] rounded' />

              <div className='w-[48%] flex flex-col ml-4 gap-2'>
                <p className='text-[#18191C] text-l font-[500]'>Builder Name</p>
                <div className='flex'>
                  <Icon icon="proicons:location" width="24" height="24" className='mr-2 text-[#C8CCD1]'/>
                  <p className='text-[#5E6670] text-sm mr-2'>Pune, Maharashtra</p>
                  <p className='text-[#5E6670] text-sm'>1.5cr-2.5cr</p>
                </div>
              </div>

              <div className='w-fit flex ml-0 py-3 gap-2'>
                <button className='px-4 rounded text-sm font-[600] bg-[#DD2025] text-[#FFFFFF]' onClick={handleButton}>Reject</button>
                <button className='px-4 rounded text-sm font-[600] bg-[#CCEDE8] text-[#00A38C]' onClick={() => navigate('/superadmin/usermanagement/seller/sellersdetails')}>View details</button>
              </div>
            </li>)
          }
        </ul>

      </div>

      {/* Right Division */}
      <div className='w-1/2 h-fit rounded-xl px-6 py-6 bg-[#FFFFFF]'>
        <p className='text-[#000000]/[70%] text-xl font-[500]'>Recent Reviews</p>

        <ul className='w-full h-100 mt-4 flex flex-col overflow-y-scroll no-scrollbar'>
          {
            [1, 2, 3, 4, 5, 6].map((item) => <li key={item} className='w-full py-4 text-black p-2 border-b border-[#CCC8C8]'>
                  <div className='flex gap-4 items-center'>
                      <img src="/profile1.jpeg" className='w-10 h-10 rounded-full'/>
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
    </section>
    <RecentRegistered /> 
    </>
  )
}

export default SellerDashboard
