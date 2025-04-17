import React from 'react'
import { PiBriefcaseFill } from 'react-icons/pi';
import { HiUserGroup } from 'react-icons/hi2';
import { CiClock1 } from 'react-icons/ci';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaReceipt } from 'react-icons/fa';
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import StateCards from '../StateCards/StateCards';

const stateBuyers = [
  {
    title: "Total Buyers",
    count: "55K",
    icon: <PiBriefcaseFill size={24} color="text-[#D3434D]" />,
    color: "text-[#D34A3D]",
    bgColor: "bg-[#FF6F61]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#D34A3D]" />,
  },
  {
    title: "New Buyers",
    count: 10,
    icon: <HiUserGroup size={24} />,
    color: "text-[#8280FF]",
    bgColor: "bg-[#8280FF]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#8280FF]" />,
  },
  {
    title: "Active Buyers",
    count: 2490,
    icon: <BsFillPersonLinesFill size={24} />,
    color: "text-[#46ad76]",
    bgColor: "bg-[#4AD991]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#46ad76]" />,
  },
  {
    title: "Inactive Buyers",
    count: "5K",
    icon: <FaReceipt size={24} />,
    color: "text-[#FFD54F]",
    bgColor: "bg-[#FEC53D]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#FFD54F]" />,
  },
];

const stateSeller = [
  {
    title: "Total Sellers",
    count: 2000,
    icon: <PiBriefcaseFill size={24} color="text-[#D3434D]" />,
    color: "text-[#D34A3D]",
    bgColor: "bg-[#FF6F61]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#D34A3D]" />,
  },
  {
    title: "New Sellers",
    count: 10,
    icon: <HiUserGroup size={24} />,
    color: "text-[#8280FF]",
    bgColor: "bg-[#8280FF]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#8280FF]" />,
  },
  {
    title: "Active Agents",
    count: 900,
    icon: <BsFillPersonLinesFill size={24} />,
    color: "text-[#46ad76]",
    bgColor: "bg-[#4AD991]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#46ad76]" />,
  },
  {
    title: "Active Builders",
    count: 1100,
    icon: <FaReceipt size={24} />,
    color: "text-[#FFD54F]",
    bgColor: "bg-[#FEC53D]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#FFD54F]" />,
  },
];

const UserManagement = () => {

  const location = useLocation();

  return (<>
    <section className='w-full flex flex-col gap-10 mb-10'>
      <div className="flex gap-5 -mt-4 absolute w-full">
        <NavLink to="/superadmin/usermanagement" end={location.pathname === "/superadmin/usermanagement"}>
          <button className={`bg-teal-20 text-teal-900 font-medium  h-9 rounded ${location.pathname === '/superadmin/usermanagement' ? "drop-shadow-[0_0.93px_2.8px_rgba(0,165,142,0.2)] bg-[#CCEDE8] px-14" : "bg-white px-10"}`}>Buyers</button>
        </NavLink>
        <NavLink to="/superadmin/usermanagement/seller" end={location.pathname === "/superadmin/usermanagement"}>
          <button className={`bg-teal-20 text-teal-900 font-medium h-9 rounded ${(location.pathname === '/superadmin/usermanagement/seller' || location.pathname === "/superadmin/usermanagement/seller/recentregistrations" || location.pathname === "/superadmin/usermanagement/seller/sellersdetails") ? "drop-shadow-[0_0.93px_2.8px_rgba(0,165,142,0.2)] bg-[#CCEDE8] px-14" : "bg-white px-10"}`}>Seller</button>
        </NavLink>
      </div>

      <div className='relative top-10'>
        <StateCards state={location.pathname === '/superadmin/usermanagement' ? stateBuyers : stateSeller}/>
      </div>

      <Outlet />
    </section>

  </>
  )
}

export default UserManagement
