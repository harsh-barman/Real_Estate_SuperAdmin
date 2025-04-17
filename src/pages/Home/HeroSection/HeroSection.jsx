import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { FiSearch } from 'react-icons/fi'
import { RxCross2 } from "react-icons/rx";

const HeroSection = () => {
  return (
    <section className='w-full bg-[#dadfe3] h-182 rounded-b-4xl relative flex flex-col'>
        <div className="bg-[url(./home.jpg)] bg-cover bg-center h-100 w-full"></div>
 
        <div className='w-[60%] absolute top-[38%] place-self-center'>
          <div className=' bg-[#FFFFFF] rounded-2xl pt-4 shadow-lg'>
            <ul className='w-full flex justify-evenly text-[#697D95] text-2xl font-[700] pt-4 border-b-2 border-[#E3E0E0] '>
              <li className='border-b-1 border-[#00A58E] pb-6'>Buy</li>
              <li className='pb-6'>Rent/PG</li>
              <li>Project</li>
              <li>Commercial</li>
              <li>Agents</li>
            </ul>
            <div className='w-full flex'>
              <div className='w-2/7 flex gap-2 items-center justify-center text-[#00A58E] text-xl font-[600] py-8 border-r-2 border-[#E3E0E0]'>
                <p>All Residents</p>
                <Icon icon="solar:alt-arrow-down-outline" width="24" height="24" />
              </div>
              <div className='w-5/7 flex justify-center py-8 gap-6'>
                <div className="w-[60%] flex items-center bg-white text-gray-700 rounded-sm px-2 py-0 gap-6">
                  <FiSearch color='#00A58E' size={30} />
                  <input className="outline-none w-full text-lg font-[400] border-b-2 border-[#E8EDF1] py-1.5" type="text" placeholder='Search Here' />
                </div>
                <button className='bg-[#00A58E] text-white px-12 py-2 rounded-xl text-center text-xl font-[600] border-1'>Search</button>
              </div>
            </div>
          </div>

          <div className='mt-10 flex items-center gap-12 justify-center'>
            <p className='text-[#00A58E] text-xl font-[700]'>Recent Searches:</p>
            <ul className='flex items-center gap-4'>
              <li className='flex bg-[#00A58E] text-white text-l px-4 py-1.5 rounded-2xl items-center gap-2'><p>1bhk flat in pune</p><RxCross2 size={18} /></li>
              <li className='flex bg-[#00A58E] text-white text-l px-4 py-1.5 rounded-2xl items-center gap-2'><p>Apartment in Pune</p><RxCross2 size={18} /></li>
              <li className='flex bg-[#00A58E] text-white text-l px-4 py-1.5 rounded-2xl items-center gap-2'><p>Chip</p><RxCross2 size={18} /></li>
            </ul>
          </div>
        </div>

        <img src="https://s3-alpha-sig.figma.com/img/bd42/99fb/b3a2430bf519978bcf5fbd7d4e9d65ff?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YHvEYymUO4Ubpunb2ktiebB3~LPhzN4SCRYVf7em2Y76e92BMX3VmQAJECDO~MXvT-hRjHp~px~1pcpxtAGaT8G2wmXKl68Q8tqCjJzqRNqVxn-C6lNfBpPHBDTPLfhnca~YR5RmonVoJmLkDj4iWhkHXKbz0CD27yBZj9Ax2hN4dteiQ~qC8FwspTyxYA9w1JKJeObi4SEz2bImQJ44THxwLtVxxR8JBB8VC2Cd82IW~RghgUfzFuZGi8uInBKmwnkKTGb0cnaI9i2Q2GygxoExIInN9Uu1hUcQ0H8m-eoUdQT27vp0OY-ioLQt63t78BVehDiYbH9RATb78GtCmQ__" alt="customer-support" className='w-12 self-end mr-30 mt-40' />

      </section>
  )
}

export default HeroSection
