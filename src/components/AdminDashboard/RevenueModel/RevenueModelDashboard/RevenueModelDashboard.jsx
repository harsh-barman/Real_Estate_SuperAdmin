import React from 'react'
import { useNavigate } from 'react-router-dom';
import TransactionsHistoryTable from '../TransactionsHistoryTable/TransactionsHistoryTable';
import SubscriptionCards from '../TransationsDetails/SubscriptionCards/SubscriptionCards';
import StateCards from '../../StateCards/StateCards';
import { Icon } from '@iconify/react/dist/iconify.js';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const state = [
    {
      title: "Total Subscriptions",
      count: "5000",
      icon: <Icon icon="solar:users-group-rounded-bold" width="24" height="24" />,
      color: "text-[#D34A3D]",
      bgColor: "bg-[#FF6F61]/[21%] ",
      icon2: (
        <div className="flex text-[#00B69B] gap-1 items-center">
          <Icon icon="ion:trending-up-sharp" width="20" height="20" />
          <p>8.5%</p>
        </div>
      ), // upstream
      message: "Up from yesterday",
    },
    {
      title: "Active Subscription",
      count: "3000",
      icon: <BsFillPersonLinesFill size={24} />,
      color: "text-[#8280FF]",
      bgColor: "bg-[#8280FF]/[21%] ",
      icon2: (
        <div className="flex text-[#00B69B] gap-1 items-center">
          {" "}
          <Icon
            icon="ion:trending-up-sharp"
            width="24"
            height="24"
            className="text-[#00B69B]"
          />
          <p>1.3%</p>
        </div>
      ), // upstream
      message: "Up from past week",
    },
    {
      title: "Total Revenue",
      count: "42,00,000",
      icon: <Icon icon="solar:wallet-money-linear" width="24" height="24" />,
      color: "text-[#46ad76]",
      bgColor: "bg-[#4AD991]/[21%]",
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
      title: "Revenue This Month",
      count: "16,000",
      icon: <Icon icon="si:money-line" width="24" height="24" />,
      color: "text-[#688EF6]",
      bgColor: "bg-[#688EF6]/[30%]",
      icon2: (
        <div className="flex text-[#00B69B] gap-1 items-center">
          {" "}
          <Icon
            icon="ion:trending-up-sharp"
            width="24"
            height="24"
            className="text-[#00B69B]"
          />
          <p>1.4%</p>
        </div>
      ), // upstream
      message: "Up from yesterday",
    },
  ];

const RevenueModelDashboard = () => {

    let navigate = useNavigate();

    const handleViewAll = () => {
        navigate("/superadmin/revenuemodel/transactions");
    } 
    
  return (
    <div className="w-full flex flex-col items-center relative mb-10">
      <StateCards state={state} />

      <SubscriptionCards />

      <div className="w-full flex flex-col bg-white rounded-2xl p-10">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold">Transactions History Table</p>
          <p className="text-[#00A58E] pr-25 cursor-default" onClick={handleViewAll}>View All</p>
        </div>
        <TransactionsHistoryTable value={5}/>
      </div>
    </div>
  )
}

export default RevenueModelDashboard
