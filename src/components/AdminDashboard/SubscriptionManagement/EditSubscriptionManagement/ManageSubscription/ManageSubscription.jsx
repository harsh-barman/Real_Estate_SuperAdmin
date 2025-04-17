import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const subscriptionPlan = [
    {
        color: "#F78B72",
        title: "Basic Plan",
        bio: "Lorem ipsum dolor sit amet consectetur. Sit hendrerit felis a id magna elit faucibus sit egestas. Elementum turpis felis tristique vestibulum sed integer commodo pellentesque",
        amount: 99
    },
    {
        color: "#64EB33",
        title: "Standard Plan",
        bio: "Lorem ipsum dolor sit amet consectetur. Sit hendrerit felis a id magna elit faucibus sit egestas. Elementum turpis felis tristique vestibulum sed integer commodo pellentesque",
        amount: 299
    },
    {
        color: "#FFD830",
        title: "Premium Plan",
        bio: "Lorem ipsum dolor sit amet consectetur. Sit hendrerit felis a id magna elit faucibus sit egestas. Elementum turpis felis tristique vestibulum sed integer commodo pellentesque",
        amount: 499
    },
]


const ManageSubscription = ({ title, value}) => {

    let navigate = useNavigate();

    const handleEdit = () => {
        navigate("/superadmin/subscriptionmanagement/edit")
    }

    return (
        <div className='bg-white w-full rounded-2xl px-10 py-6 pb-22 flex flex-col gap-10'>
            <div className='w-full flex justify-between'>
                <p className='text-xl text-[#000000]/[70%] font-[600] px-6'>{title}</p>
                
                    {
                        value &&
                        <div className='w-fit flex items-center gap-1 cursor-default' onClick={handleEdit}>
                            <FiEdit />
                            <p className='text-lg text-[#000000]/[70%] font-[500]'>Edit</p>
                        </div>
                    }
                
            </div>

            <ul className='w-full flex gap-8'>
                {
                    subscriptionPlan.map((plan, index) => {
                        return (
                            <li className='min-w-[320px] h-fit flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.25)] rounded-xl px-10 py-8' key={index}>
                                <Icon icon="material-symbols:asterisk" width="24" height="24" color={plan.color} className='size-10 font-extrabold' />

                                <p className='text-xl font-[600] mt-2'>{plan.title}</p>

                                <p className='text-sm text-justify mt-4 text-[#5E6670] '>{plan.bio}</p>

                                <div className='w-full flex mt-16 items-center'>
                                    <MdOutlineCurrencyRupee size={36} />
                                    <p className='text-5xl font-bold'>{plan.amount}</p>
                                </div>
                                <p className='text-[#656565] text-sm'>per month</p>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ManageSubscription
