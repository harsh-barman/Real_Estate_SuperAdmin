import React from 'react'
import { FiSearch } from 'react-icons/fi'
import PropertiesListVerification from './PropertiesListVerification';



const VerificationRequest = ({propertyList}) => {
    return (
        <div className='flex flex-col w-full p-8 bg-white rounded mb-10'>
            <div className='flex items-center justify-between'>
                <p className='text-xl  text-[#616161] font-[700]'>Request for Verification</p>
                <div className="flex items-center bg-white text-gray-700 rounded-sm px-2 py-2 w-110 justify-end border-1 border-[#E8EDF1]">
                    <FiSearch color='#00A58E' size={24} />
                    <input className="outline-none w-full pl-1.5 text-l font-bold-" type="text" placeholder='Search Here' />
                </div>
            </div>

            <PropertiesListVerification propertyList={propertyList} value={5} count={0}/>
        </div>
    )
}


export default VerificationRequest
