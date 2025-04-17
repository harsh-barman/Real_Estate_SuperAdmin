import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'

const NewBuyers = () => {

    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className='w-full flex gap-6'>
                <p className={`text-xl font-[500] cursor-default ${(toggle ? "text-[#00A58E] underline" : "text-[#000000]/[70%]")}`} onClick={() => setToggle(true)}>New Enquires</p>
                <p className={`text-xl font-[500] cursor-default ${(!toggle ? "text-[#00A58E] underline" : "text-[#000000]/[70%]")}`} onClick={() => setToggle(false)}>New Visits</p>
            </div>

            {toggle &&
                <ul className='w-full h-100 flex flex-col mt-4 px-4 overflow-y-scroll no-scrollbar'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9,10].map((item) => <li key={item} className='w-full flex flex-col px-4 border-b-2 border-[#BBB9B9] py-2 '>
                            <p className='text-[#18191C] text-l font-[600]'>Name of Customer</p>

                            <p className='text-[#697D95] text-sm font-[400] mr-2'>Name, Requested an enquiry for...</p>
                        </li>)
                    }
                </ul>
            }

            {!toggle &&
                <ul className='w-full h-100 flex bg-[#F8F8F8] flex-col mt-4 px-10 py-4 gap-4 overflow-y-scroll no-scrollbar'>
                    {
                        [1, 2, 3, 4].map((item) => <li key={item} className='w-full flex shadow-md rounded-2xl justify-around px-4 py-4 bg-white'>
                            <img src="/profile1.jpeg" alt="profile-image" className='w-18 h-18 rounded-full border-1' />

                            <div className='w-[70%] flex flex-col gap-2'>
                                <div className='w-full'>
                                    <p className='text-xl'>Mahi Sharma</p>
                                    <p>mahisharma01@gmail.com</p>
                                    <p>+91 1234567890</p>
                                </div>

                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='text-l font-[600]'>Name of Property</p>
                                        <p className='flex items-center text-sm font-[600] text-[#697D95]'><Icon icon="mdi:location" width="24" height="24" /> Location of Property</p>
                                    </div>

                                    <div>
                                        <p className='text-sm font-[600] text-[#697D95]'>Schedule on:</p>
                                        <p className='text-lg font-[500]'>10/02/2025</p>
                                    </div>
                                </div>
                            </div>
                        </li>)
                    }
                </ul>
            }
        </>
    )
}

export default NewBuyers
