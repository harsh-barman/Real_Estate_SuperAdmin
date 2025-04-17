import React from 'react'

const transactionsDetails = [
    {title: "Transaction ID", value: "TXN123456789"},
    {title: "Date & Time", value: "12 Mar 2025, 10:30 AM"},
    {title: "User Name & Role", value: "Rohan Roy (Agent)"},
    {title: "Subscription Type", value: "Premium"},
    {title: "Amount", value: "499"},
    {title: "Payment Status", value: "Successful"},
    {title: "Payment Method", value: "UPI"},
]

const TransationsDetails = () => {
  return (
    <div className='w-full flex flex-col absolute bg-white top-0 rounded-2xl p-10'>
      <p className='text-xl font-[600]'>Details</p>
      <ul className='flex flex-col w-[40%] gap-2 mt-10 pl-4'>
        {
            transactionsDetails.map((current, index) => <li key={index} className='flex text-lg'>
                <p className='w-1/2 font-[500]'>{current.title}</p>
                <p className='w-1/2 text-[#7F8786]'>{current.value}</p>
            </li>)
        }
      </ul>
    </div>
  )
}

export default TransationsDetails
