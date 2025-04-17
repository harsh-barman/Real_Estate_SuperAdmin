import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useNavigate } from 'react-router-dom'

const AdvertisementHeader = ({title, viewApprove}) => {

    const navigate = useNavigate();

    const handleButton = () => {
        alert("Currently Under Developement");
    }
    
    const handleViewApprove = () => {
        navigate("/superadmin/advertisements/approvedlist")
    }

    return (
        <div className='w-full flex justify-between items-center'>
            <div className='w-fit flex gap-2'>
                <p className='min-w-3 bg-[#00A58E] text-[#00A58E]'>-</p>
                <p className='text-lg font-[600]'>{title}</p>
            </div>

            <div className='w-fit flex gap-4 items-center'>
                <div className='w-fit flex gap-2 justify-start border-2 border-[#E8EDF1] px-4 py-2 rounded'>
                    <Icon icon="ri:search-line" width="24" height="24" className='text-[#00A58E]' />
                    <input type="text" placeholder='Search Here' className='text-[#697D95] min-w-[400px] focus:outline-none font-[500]' />
                </div>
                <div className='w-fit flex border-2 rounded border-[#EAEAEA] px-4 py-2' onClick={handleButton}>
                    <Icon icon="hugeicons:filter" width="24" height="24" className='text-[#00A58E]' />
                    <p className='text[#9A9FA5]/[75%]'>Filter</p>
                </div>
                {
                    viewApprove && 
                    <button className='w-fit flex bg-[#ECF8F7] text-[#00A58E] rounded  px-4 py-2 ' onClick={handleViewApprove}>
                    View Approve
                </button>
                }
            </div>
        </div>
    )
}

export default AdvertisementHeader
