import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import StateCards from '../../StateCards/StateCards';
import ManageSubscription from '../EditSubscriptionManagement/ManageSubscription/ManageSubscription';
import AnalyticsChart from '../AnalyticsChart/AnalyticsChart';
import SubscriberStats from '../SubscriberStats/SubscriberStats';

const state = [
    {
      title: "Basic Plan",
      count: "500",
      icon: <Icon icon="mdi:crown-circle-outline" width="34" height="34" />,
      color: "text-[#804606]",
      bgColor: "bg-[#FF6F61]/[21%] ",
      icon2: (
        <div className="flex text-[#F93C65] gap-1 items-center">
          <Icon icon="ion:trending-down-sharp" width="20" height="20" />
          <p>2.3%</p>
        </div>
      ), // upstream
      message: "Up from yesterday",
    },
    {
      title: "Standard Plan",
      count: "700",
      icon: <Icon icon="mdi:crown-circle-outline" width="34" height="34" />,
      color: "text-[#8F8F8F]",
      bgColor: "bg-[#8F8F8F]/[21%] ",
      icon2: (
        <div className="flex text-[#00B69B] gap-1 items-center">
          {" "}
          <Icon
            icon="ion:trending-up-sharp"
            width="24"
            height="24"
            className="text-[#00B69B]"
          />
          <p>8.5%</p>
        </div>
      ), // upstream
      message: "Up from past week",
    },
    {
      title: "Premium Plan",
      count: "500",
      icon: <Icon icon="mdi:crown-circle-outline" width="34" height="34" />,
      color: "text-[#FFD54F]",
      bgColor: "bg-[#FFD54F]/[21%]",
      icon2: (
        <div className="flex text-[#F93C65] gap-1 items-center">
          {" "}
          <Icon
            icon="ion:trending-down-sharp"
            width="24"
            height="24"
            className="text-[#F93C65]"
          />
          <p>4.3%</p>
        </div>
      ), // downstream
      message: "Down from yesterday",
    },
    {
      title: "Top Selling Plan",
      count: "Standard",
      icon: <Icon icon="mdi:crown-circle-outline" width="34" height="34" />,
      color: "text-[#FFD54F]",
      bgColor: "bg-[#FFD54F]/[30%]",
      icon2: (
        <div className="flex text-[#00B69B] gap-1 items-center">
          <p>60%</p>
        </div>
      ), // upstream
      message: "Up from yesterday",
    },
  ];
const SubscriptionDashboard = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-4 mb-4">
          <StateCards state={state} />

          <div className='w-full flex gap-8'>
            <div className='w-[66%] py-6 flex flex-col rounded-xl gap-10'>
              <AnalyticsChart />
              <SubscriberStats />
            </div>
            <div className='w-[44%] h-fit py-6 -mr-8 flex flex-col rounded-xl gap-10 overflow-hidden'>
              <ManageSubscription title={"Set Subscription Plans"} value={true}/>
            </div>
          </div>
        </div>
    </>
  )
}

export default SubscriptionDashboard
