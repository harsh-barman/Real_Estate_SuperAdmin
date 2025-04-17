import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import StateCards from '../../StateCards/StateCards';
import Buttons from '../Buttons/Buttons';



// Pie Chart Data
const pieData = [
  { name: 'Residential Property Agents', value: 500, color: '#00a58e' },
  { name: 'Rental Property Agents', value: 300, color: '#fabe7a' },
  { name: 'Land Property Agents', value: 200, color: '#f6866a' },
  { name: 'Real State Investors', value: 400, color: '#007868' }
];

const analyticsData = [
  { label: 'Residential Properties', value: 106, color: 'bg-teal-300', textColor: 'text-teal-500' },
  { label: 'Rental Properties', value: 200, color: 'bg-teal-700', textColor: 'text-teal-700' },
  { label: 'Land Properties', value: 55, color: 'bg-red-400', textColor: 'text-red-500' },
  { label: 'Real Estate Investors', value: 30, color: 'bg-orange-300', textColor: 'text-orange-500' }
];

const CustomLegend = () => {
  return (
    <div className="absolute right-20 top-30 transform -translate-y-1/2 space-y-4">
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#00a58e] inline-block rounded-full mr-2 shadow-2xl"></span>
        <span className="text-xs text-[#004D41]">Residential Property Agent</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#fabe7a] inline-block rounded-full mr-2 shadow-2xl"></span>
        <span className="text-xs text-[#004D41]">Rental Property Agents</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#007868] inline-block rounded-full mr-2 shadow-2xl"></span>
        <span className="text-xs text-[#004D41]">Land Property Agents</span>
      </div>
      <div className="flex items-center">
        <span className="w-3 h-3 bg-[#f6866a] inline-block rounded-full mr-2 shadow-2xl"></span>
        <span className="text-xs text-[#004D41]">Real Estate investors</span>
      </div>
    </div>
  );
};

const AgentsBuilders = ({ cardTitle, state }) => {
  const location = useLocation();

  // if (location.pathname === '/superadmin/agents') {
  //   handleHeading(`Agent’s Statistics`, true);
  // }
  // if (location.pathname === '/superadmin/builders') {
  //   handleHeading(`Builder’s Statistics`, true);
  // }


  return (
    <>
      {/* heading part  */}
      {/* <div className='bg-[#00a58e] ml-[248px] h-30 flex items-start px-4'>
          <div className='flex items-center'>
              <button onClick={() => navigate('/')} className='ml-3 cursor-pointer'>
                  <img className='w-4 h-4' src={assets.arrow_left} alt="" />
              </button>
              <h1 className='text-white text-2xl font-bold ml-10'>Agent's Statistics</h1>
          </div>
      </div> */}

      {/* card part  */}
      <StateCards state={state} />

      {/* Buttons */}
      <Buttons />

      {/* graph part  */}
      <div className='mt-8 flex justify-between'>
        {/* Left Section - Larger Width */}
        <div className='w-[63%]  bg-white pt-6 pb-2 px-10 shadow-md rounded-lg relative'>
          <h2 className='text-xl font-semibold text-[#000000]/[62%]'>{cardTitle}</h2>
          {/* Pie Chart */}
          <PieChart width={400} height={400}>
            <Pie data={pieData} outerRadius={140} dataKey="value">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <CustomLegend />
        </div>

        {/* Right Section - Smaller Width */}
        <div className='w-[33%] bg-white px-10 py-6 shadow-md rounded-lg'>
          <h2 className='text-xl text-[#000000]/[62%] font-semibold mb-5'>Analytics</h2>
          {analyticsData.map((item, index) => (
            <div key={index} className='w-[90%] justify-self-center'>
              <p className='text-gray-700 text-sm mb-1'>{item.label}</p>
              <div className='w-full bg-gray-200 rounded-full h-2.5'>
                <div className={`${item.color} h-2.5 rounded-full`} style={{ width: `${(item.value / 200) * 100}%` }}></div>
              </div>
              <p className={`text-right text-lg font-semibold ${item.textColor}`}>{item.value}</p>
            </div>
          ))}
        </div>

      </div>


    </>
  );
}

export default AgentsBuilders;
