import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterFill } from "react-icons/ri";



const Footer = () => {
  return (
    <footer className='bg-[#18191C] w-full'>
      <section className='w-full px-20 py-10 flex justify-between border-b-1 border-[#2F3338]'>
        <div className='w-2/5'>
          <p className='text-white text-lg font-[400]'>Company Info</p>
          <p className='mt-4 text-white/60 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere recusandae expedita dolore illo eaque impedit fuga cumque vitae nemo dolorum.</p>
        </div>

        <ul className='w-2/5 flex text-white justify-between text-start'>
          <li className='flex flex-col gap-2'>
            <h3 className='font-[700]'>About Us</h3>
            <p className='text-white/60'>Contact</p>
            <p className='text-white/60'>Carrers</p>
            <p className='text-white/60'>Blogs</p>
          </li>
          <li className='flex flex-col gap-2'>
            <h3 className='font-[700]'>Explore</h3>
            <p className='text-white/60'>Buy/Rent</p>
            <p className='text-white/60'>Sell</p>
            <p className='text-white/60'>Agents</p>
            <p className='text-white/60'>Services</p>
          </li>
          <li className='flex flex-col gap-2'>
            <h3 className='font-[700]'>Support</h3>
            <p className='text-white/60'>FAQs</p>
            <p className='text-white/60'>Privacy Policy</p>
            <p className='text-white/60'>Terms & Conditions</p>
            <p className='flex text-white/60 items-center gap-2'>
              <TiSocialFacebook size={24} className='-mr-1.5'/>
              <TiSocialYoutube size={22}/>
              <FaInstagram size={22}/>
              <RiTwitterFill size={22}/>
            </p>
          </li>
        </ul>
      </section>
      <section className='py-2 flex justify-center'>
        <p className='text-[#767F8C] text-sm'>@2024 - Real Estate Platform. All rights Reserved</p>
      </section>
    </footer>
  )
}

export default Footer
