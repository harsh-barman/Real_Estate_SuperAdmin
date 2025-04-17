import React from 'react'
import SubscriptionGraph from './SubscriptionGraph'
import { GoArrowUp } from "react-icons/go";

const SubscriptionCards = () => {
  return (
    <div className='w-full flex justify-between my-8 '>
      {/* Premium Plans */}
      <div className='bg-white rounded-2xl p-4 w-[32%] relative'>
        <div className='w-full h-[36%] relative'>
          <p className='text-[#202224]/70 text-lg font-[500]'>Most Popular Subscriptions Plans</p>
          <p className='text-[#202224]/70 text-l font-[500]'>Premium Plan</p>
          <p className='text-sm text-[#202224]/70 font-[400] mt-2'>Last 7 days</p>
          <div className='absolute bottom-0 right-0'>
            <p className='text-lg font-[600]'>12.3K</p>
          </div>
        </div>
        <div className='w-full h-[51%]'>
          <SubscriptionGraph stockColor={"#FFD930"} />
        </div>
        <SubscriptionChart percentage={3.5} />
      </div>

      {/* Standards Plan */}
      <div className='bg-white rounded-2xl p-4 w-[32%]'>
        <div className='w-full h-[36%] relative'>
          <p className='text-[#202224]/70 text-lg font-[500]'>Standard Plan</p>
          <p className='text-sm text-[#202224]/70 font-[400] mt-2'>Last 7 days</p>
          <div className='absolute bottom-0 right-0'>
            <p className='text-lg font-[600]'>4.3K</p>
          </div>
        </div>
        <div className='w-full h-[51%]'>
          <SubscriptionGraph stockColor={"#64EB33"} />
        </div>
        <SubscriptionChart percentage={1.5} />
      </div>

      {/* Basic Plan */}
      <div className='bg-white rounded-2xl p-4 w-[32%] relative'>
        <div className='w-full h-[36%] relative'>
          <p className='text-[#202224]/70 text-lg font-[500]'>Basic Plans</p>
          <p className='text-sm text-[#202224]/70 font-[400] mt-2'>Last 7 days</p>
          <div className='absolute bottom-0 right-0'>
            <p className='text-lg font-[600]'>8.3K</p>
          </div>
        </div>
        <div className='w-full h-[51%]'>
          <SubscriptionGraph stockColor={"#F6866A"} />
        </div>
        <SubscriptionChart percentage={3.5} />
      </div>
    </div>
  )
}


const SubscriptionChart = ({ percentage }) => {
  return (
    <div className='w-fit flex items-center gap-2 pl-2 absolute'>
      <GoArrowUp size={16} color={
        percentage > 2 ? "#00B69B" : "red"
      }
      />
      <p className={`-ml-1 text-sm ${percentage > 2 ? "text-[#00B69B]" : "text-[red]"
        }`}>{percentage}%</p>
      <p className='text-[#7F8786] text-sm'>VS Last 7 Days</p>
    </div>
  )
}

export default SubscriptionCards
