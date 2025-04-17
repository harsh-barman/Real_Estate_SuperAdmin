import React from 'react'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const ComplaintsManagementsDashboard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/superadmin/complaintsmanagement/complaint");
    }

    return (
        <>
            <div className='w-full bg-white px-14 py-12 pb-40 mb-10 rounded-lg shadow-md'>
                <div className='w-full'>
                    {/* Header Row */}
                    <div className='w-full flex mb-2'>
                        <div className='w-1/3'>
                            <p className='text-start text-lg font-[600]'>Name</p>
                        </div>
                        <div className='w-1/3'>
                            <p className='text-start text-lg font-[600]'>Date</p>
                        </div>
                        {/* <div className='w-1/3'>
                            <p className='text-start text-lg font-[600]'>Action</p>
                        </div> */}
                    </div>

                    {/* Complaint Rows */}
                    <div className='w-full'>
                        {
                            [1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className='w-full border-b-2 border-[#E9E7FD] py-4 flex items-start'>
                                    {/* Name & Email */}
                                    <div className='w-1/3 flex gap-6 items-center'>
                                        <img src="/propertyImage.jpeg" alt="propertyImage" className='w-14 h-14 rounded-xl' />
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-l font-[600] cursor-default'>Name</p>
                                            <div className='flex gap-2 items-center'>
                                                <MdEmail size={20} className='text-[#00A58E]' />
                                                <p className='text-sm text-[#5E6670]'>Email@123</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Date */}
                                    <div className='w-1/3 flex items-center'>
                                        <p className='text-md text-[#5E6670]'>Feb 25, 2025 19:28</p>
                                    </div>

                                    {/* View Button under Action */}
                                    <div className='w-1/3 flex items-start'>
                                        <button
                                            className='bg-[#00A58E] hover:bg-[#c41c20] transition-colors duration-200 cursor-pointer text-white px-6 py-2 rounded-md text-sm shadow-sm'
                                            onClick={handleClick}
                                        >
                                            View
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComplaintsManagementsDashboard;
