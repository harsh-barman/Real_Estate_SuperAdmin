import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

const RecentRegistrations = () => {

    const navigate = useNavigate();

    const handleButton = () => {
        alert("Currently Under Developement");
    }

    return (
        <div className='w-full h-fit mt-10 rounded-xl px-8 py-6 bg-[#FFFFFF]'>
            <div className='w-full flex justify-between'>
                <p className='text-[#000000]/[70%] text-xl font-[500]'>Recent Registrations</p>
                <div className="flex w-[50%] items-center bg-white text-gray-700 rounded-sm px-4 py-2 border-1 border-[#e8edf1]">
                    <FiSearch color='#00A58E' size={24} />
                    <input className="outline-none w-full pl-2 text-l font-bold-" type="text" placeholder='Search Here' />
                </div>
            </div>

            <ul className='w-full h-150 overflow-y-scroll no-scrollbar flex flex-col mt-6 px-10'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => <li key={item} className='w-full flex border-b-2 border-[#BBB9B9] py-2 justify-between'>
                        <div className='w-fit flex items-center'>
                            <Icon icon="circum:image-on" width="62" height="62" className='p-4 bg-[#F0F0F0] rounded mr-6' />

                            <div className='w-fit flex flex-col gap-2'>
                                <p className='text-[#18191C] text-l font-[500]'>Builder Name</p>
                                <div className='flex w-fit items-center'>
                                    <Icon icon="proicons:location" width="34" height="34" className='mr-2 text-[#C8CCD1]' />
                                    <p className='text-[#5E6670] text-sm mr-2'>Pune, Maharashtra</p>
                                    <p className='text-[#5E6670] text-sm'>1.5cr-2.5cr</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-fit flex mr-30 py-3 gap-4'>
                            <button className='px-8 rounded text-sm font-[600] bg-[#DD2025] text-[#FFFFFF]' onClick={handleButton}>Reject</button>
                            <button className='px-8 rounded text-sm font-[600] bg-[#CCEDE8] text-[#00A38C]' onClick={() => navigate("/superadmin/usermanagement/seller/sellersdetails")}>View details</button>
                        </div>
                    </li>)
                }
            </ul>

        </div>
    )
}

export default RecentRegistrations
