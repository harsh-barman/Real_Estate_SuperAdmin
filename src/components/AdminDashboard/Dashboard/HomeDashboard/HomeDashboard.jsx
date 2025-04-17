import React, { useEffect } from 'react'
import { assets } from "../../../../assets/assets";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StateCards from '../../StateCards/StateCards';
import Buttons from '../Buttons/Buttons';
import { Icon } from '@iconify/react/dist/iconify.js';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const dashboardStats = [
  {
    title: "Seller",
    count: "2,000",
    message: "Up from yesterday",
    icon: <Icon icon="solar:users-group-rounded-bold-duotone" width="24" height="24" />,
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
    title: "Buyers",
    count: "55,000",
    message: "Up from past week",
    icon: <BsFillPersonLinesFill size={24} />,
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
    title: "Estate Registered",
    count: "10,000",
    message: "Down from yesterday",
    icon: <Icon icon="heroicons:rectangle-stack-20-solid" width="20" height="20"/>,
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
    title: "Revenue",
    count: "45.3Lac",
    message: "Up from yesterday",
    icon: <Icon icon="si:money-line" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>1.4%</p>
      </div>
    ),
    color: "text-[#688EF6]",
    bgColor: "bg-[#688EF6]/[30%]",
  },
];

const HomeDashboard = () => {

  useEffect(() => {
    // handleHeading("Hello, Super Admin", false);
  },[])

  const handleButton = () => {
    alert("Currently Under Development");
  }


  const percentage = 80;
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference of the circle
  const gap = 5; // Space between the segments
  const segment = (circumference - 3 * gap) / 3; // Dividing the circle into 3 segments

  return (
    <>
      {/* StateCards */}
      <StateCards state={dashboardStats}/>

      <Buttons />

          {/* graph part */}
          <div className="w-full mt-8 gap-6 flex">
            {/* Left Section - Larger Width */}
            <div className="w-9/12 bg-white p-10 shadow-md rounded-2xl">
              {/* Overview Statistics Section */}
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-black text-xl font-semibold">
                  Overview Statistics
                </h2>
                <div className="flex w-[46%] justify-between border p-1 rounded-lg border-[#00a58e]">
                  <button className="px-4 p-1 text-[12px] border border-[#00a58e] rounded-md" onClick={handleButton}>
                    DAILY
                  </button>
                  <button className="px-4 p-1 text-[12px] border border-[#00a58e] rounded-md" onClick={handleButton}>
                    WEEKLY
                  </button>
                  <button className="px-4 p-1 text-[12px] border border-[#00a58e] rounded-md" onClick={handleButton}>
                    MONTHLY
                  </button>
                  <button className="px-4 p-1 text-[12px] bg-[#01A58E] text-white rounded-md" onClick={handleButton}>
                    YEARLY
                  </button>
                </div>
              </div>

              {/* Placeholder for Graph */}
              <div className="h-70 w-full rounded-lg flex flex-col items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 10, bottom: 0 }}
                  >
                    <CartesianGrid
                      stroke="#4a2793"
                      vertical={false}
                      horizontal={true}
                    />
                    <XAxis dataKey="name" tick={{ fontSize: 10, dy: 10, fontWeight: 800 }} tickLine={false}/>
                    <YAxis
                      tick={{ fontSize: 10, dx: -10, fontWeight: 800 }}
                      tickFormatter={(value) => `${value / 1000}k`}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      verticalAlign="top"
                      align="left"
                      wrapperStyle={{ marginTop: "-20px", fontSize: "10px" }}
                      content={<CustomLegend />}
                    />
                    <Bar dataKey="total" fill="#ff7300" barSize={3} />
                    <Bar dataKey="sold" fill="#ffb300" barSize={3} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Right Section - Smaller Width */}
            <div className="w-3/12 bg-white p-5 shadow-md rounded-lg ml-4">
              {/* Left-aligned heading */}
              <h2 className="text-gray-800 text-l font-semibold text-left">
                As per Today...
              </h2>

              {/* Center align the rest of the elements */}
              <div className="flex flex-col items-center">
                <div className="relative w-39 h-39 flex items-center justify-center">
                  <svg
                    className="absolute w-full rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#FD623A"
                      strokeWidth="4"
                      strokeDasharray={`${segment} ${circumference - segment}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#004D41"
                      strokeWidth="4"
                      strokeDasharray={`${segment} ${circumference - segment}`}
                      strokeDashoffset={`-${segment + gap}`}
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#FABE7A"
                      strokeWidth="4"
                      strokeDasharray={`${segment} ${circumference - segment}`}
                      strokeDashoffset={`-${2 * (segment + gap)}`}
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="relative flex items-center justify-center">
                    <span className="text-3xl font-bold border border-[#7243E9] rounded-full w-27 h-27 flex items-center justify-center">
                      {percentage}%
                    </span>
                  </div>
                </div>

                <div className="relative w-45 flex flex-col items-center mt-4">
                  <div className="border border-[#00a58e] rounded-md w-full flex items-center px-4 py-2 bg-white">
                    <img
                      src={assets.clock}
                      alt="Clock"
                      className="w-3 h-3 mr-2"
                    />
                    <select className="w-full bg-transparent text-xs text-gray-700 font-medium outline-none appearance-none text-center">
                      <option>08 Jan - 17 Jan</option>
                      <option>18 Jan - 27 Jan</option>
                      <option>28 Jan - 07 Feb</option>
                    </select>
                    <img
                      src={assets.arrow_down}
                      alt="Arrow Down"
                      className="w-3 h-3 ml-2"
                    />
                  </div>
                </div>

                <div className="mt-4 w-[70%] flex flex-col gap-4">
                  <div className="flex justify-between items-center w-full">
                    <span className="flex items-center text-xs text-gray-700">
                      <span className="w-3.5 h-3.5 border-[2px] border-[#fabe7a] rounded-full mr-2 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                      Completely Sold
                    </span>
                    <span className="text-[#38c976] font-medium text-xs">
                      (72%)
                    </span>
                  </div>

                  <div className="flex justify-between items-center w-full mt-1">
                    <span className="flex items-center text-xs text-gray-700">
                      <span className="w-3.5 h-3.5 border-[2px] border-[#004d41] rounded-full mr-2 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                      In Progress
                    </span>
                    <span className="text-[#b058f6] font-medium text-xs">
                      (14%)
                    </span>
                  </div>

                  <div className="flex justify-between items-center w-full mt-1">
                    <span className="flex items-center text-xs text-gray-700">
                      <span className="w-3.5 h-3.5 border-[2px] border-[#fd623a] rounded-full mr-2 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                      </span>
                      Incomplete
                    </span>
                    <span className="text-[#fd623a] font-medium text-xs">
                      (8%)
                    </span>
                  </div>
                </div>

                <button className="bg-[#00a58e] text-white font-medium px-6 py-2 mt-3 w-45 rounded-md text-sm shadow-md hover:bg-[#003730] transition-all duration-300" onClick={handleButton}>
                  View
                </button>
              </div>
            </div>
          </div>
      </>
  )
}

export default HomeDashboard

// cards data

  
  // graph data
  const data = [
    { name: "JAN", total: 1500, sold: 500 },
    { name: "FEB", total: 1200, sold: 400 },
    { name: "MAR", total: 1600, sold: 600 },
    { name: "APR", total: 1400, sold: 500 },
    { name: "MAY", total: 1700, sold: 700 },
    { name: "JUN", total: 1300, sold: 500 },
    { name: "JUL", total: 2000, sold: 900 },
    { name: "AUG", total: 1800, sold: 800 },
    { name: "SEP", total: 1900, sold: 700 },
    { name: "OCT", total: 1600, sold: 600 },
    { name: "NOV", total: 1700, sold: 700 },
    { name: "DEC", total: 1500, sold: 600 },
  ];
  
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-300">
          <p className="text-[10px] text-[#ff7300] font-semibold">{`${payload[0].value}% Total Property`}</p>
          <p className="text-[10px] text-[#ffb300] font-semibold">{`${payload[1].value}% Sold Property`}</p>
        </div>
      );
    }
    return null;
  };
  
  const CustomLegend = () => {
    return (
      <div className="flex space-x-6 mt-4">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full border-2 border-[#ff7300] mr-1"></span>
          <span className="text-[10px] text-[#004d40] font-[700]">Total Property</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full border-2 border-[#ffb300] mr-1"></span>
          <span className="text-[10px] text-[#004d40] font-[700]">Sold Property</span>
        </div>
      </div>
    );
  };
  