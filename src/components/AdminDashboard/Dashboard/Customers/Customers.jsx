import React, { useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Buttons from '../Buttons/Buttons';
import StateCards from '../../StateCards/StateCards';
import { Icon } from '@iconify/react/dist/iconify.js';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const customerStats = [
  {
    title: "New Buyers",
    count: "10",
    message: "Down from yesterday",
    icon: <Icon icon="healthicons:city-worker" width="28" height="28" />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>2.3%</p>
      </div>
    ),
    color: "text-[#FF8D80]",
    bgColor: "bg-[#FF8D80]/[21%]"
  },
  {
    title: "Total Buyers",
    count: "55,000",
    message: "Last updated on 12 PM",
    icon: <Icon icon="solar:users-group-rounded-bold-duotone" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>1.3%</p>
      </div>
    ),
    color: "text-[#8A3DFE]",
    bgColor: "bg-[#8280FF]/[33%]",
  },
  {
    title: "Active Buyers",
    count: "2490",
    message: "Down from yesterday",
    icon: <BsFillPersonLinesFill size={24} />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>4.3%</p>
      </div>
    ),
    color: "text-[#00A58E]",
    bgColor: "bg-[#00A58E]/[33%]",
  },
  {
    title: "Top Region",
    count: "Warje, Pune",
    message: "Last 7 days",
    icon: <Icon icon="solar:medal-ribbon-star-outline" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>1.3% </p>
      </div>
    ),
    color: "text-[#F6AD04]",
    bgColor: "bg-[#F6AD04]/[30%]",
  },
]

const data = [
  { year: "2019", propertyBuyers: 480, tenant: 300, landBuyers: 250 },
  { year: "2020", propertyBuyers: 630, tenant: 420, landBuyers: 500 },
  { year: "2021", propertyBuyers: 550, tenant: 420, landBuyers: 520 },
  { year: "2022", propertyBuyers: 2000, tenant: 600, landBuyers: 1000 },
  { year: "2023", propertyBuyers: 1500, tenant: 550, landBuyers: 700 },
  { year: "2024", propertyBuyers: 1200, tenant: 520, landBuyers: 1200 },
];

const CustomLegend = () => {
  return (
    <div className="absolute w-[20%] right-0 top-10 space-y-4">
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#007a69] inline-block rounded-full mr-2"></span>
        <span className="text-[14px] text-[#004D41]">Property Buyers</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#fabe7a] inline-block rounded-full mr-2"></span>
        <span className="text-[14px] text-[#004D41]">Tenant</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#82d1c6] inline-block rounded-full mr-2"></span>
        <span className="text-[14px] text-[#004D41]">Land or Commercial Property Buyers</span>
      </div>
    </div>
  );
};

const Customers = ({handleHeading}) => {

  const handleButton = () => {
    alert("Currently Under Development");
  }

  return (
    <>
      {/* heading part  */}
      {/* <div className='bg-[#00a58e] w-full h-30 flex items-start'>
        <div className='flex items-center'>
            <button onClick={() => navigate('/')} className='ml-3 cursor-pointer'>
                <img className='w-4 h-4' src={assets.arrow_left} alt="" />
            </button>
            <h1 className='text-white text-2xl font-bold ml-10'>Buyer's Statistics</h1>
        </div>
      </div> */}

      <StateCards state={customerStats} />

      {/* Button Section */}
      <Buttons />


      {/* graph part  */}
      <div className='p-5 w-full mt-8 px-10 py-6 bg-white shadow-md items-center rounded-2xl'>
        {/* Overview Statistics Section */}
        <div className='mb-6 flex justify-between items-center w-full'>
          <h2 className='text-[#1F1F1F] text-xl font-[400]'>Overview Statistics</h2>
          <div className='flex w-[40%] justify-between border p-1 rounded-lg border-[#00a58e]'>
            <button className='px-6 p-2 text-[12px] border border-[#00a58e] rounded-md' onClick={handleButton}>DAILY</button>
            <button className='px-6 p-2 text-[12px] border border-[#00a58e] rounded-md' onClick={handleButton}>WEEKLY</button>
            <button className='px-6 p-2 text-[12px] border border-[#00a58e] rounded-md' onClick={handleButton}>MONTHLY</button>
            <button className='px-6 p-2 text-[12px] bg-[#00a58e] text-white border border-[#00a58e] rounded-md' onClick={handleButton}>YEARLY</button>
          </div>
        </div>

        {/* Placeholder for Graph */}
        <div className='w-[90%] justify-self-center rounded-sm relative'>
          <ResponsiveContainer width="70%" height={350}>
            <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeLinecap="3 3" />
              <XAxis dataKey="year" fontSize={14} xisLine={false} tickLine={false} tick={{ dy: 10 }} />
              <YAxis fontSize={14} axisLine={false} tickLine={false} tick={{ dx: -20 }} />
              <Tooltip />
              <Bar dataKey="propertyBuyers" fill="#007a69" barSize={9} radius={[10, 10, 10, 10]} fontSize="14px" />
              <Bar dataKey="tenant" fill="#fabe7a" barSize={9} radius={[10, 10, 10, 10]} fontSize="14px" />
              <Bar dataKey="landBuyers" fill="#82d1c6" barSize={9} radius={[10, 10, 10, 10]} fontSize="14px" />
            </BarChart>
          </ResponsiveContainer>

          <CustomLegend />
        </div>
      </div>
    </>
  );
}

export default Customers;
