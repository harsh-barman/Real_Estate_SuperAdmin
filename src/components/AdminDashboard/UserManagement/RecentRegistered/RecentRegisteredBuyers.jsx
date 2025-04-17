import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'


const registrations = [
    {
        id: "#527269", img: "/profile1.jpeg", userName: "Ketan", locality: "Pune", lookingFor: "Rental Properties",mobile: "+91 12345 67890"
    },
    {
        id: "#748526", img: "/profile2.jpeg", userName: "Siddhart", locality: "Mumbai", lookingFor: "Residential",mobile: "+91 12345 67890"
    },
    {
        id: "#748526", img: "/profile3.jpeg", userName: "Sarah", locality: "Nagpur", lookingFor: "Commercial",mobile: "+91 12345 67890"
    },
]

const RecentRegisteredBuyers = () => {

    const handleButton = () => {
        alert("Currently Under Developement");
    }

    return (
        <table className='w-full flex flex-col mt-4'>
            <thead>
                <tr className='w-full flex justify-between border-b-2 border-[#E9E7FD]'>
                    <th className='w-2/20'>
                    <p className='text-start px-2 font-[600]'>ID</p></th>
                    <th className='w-3/20 '>
                    <p className='text-start px-2 font-[600]'>Name</p></th>
                    <th className='w-2/20 '>
                    <p className='text-start px-2 font-[600]'>Locality</p></th>
                    <th className='w-3/20 '>
                    <p className='text-start px-2 font-[600]'>Looking For</p></th>
                    <th className='w-4/20 '>
                    <p className='text-start px-2 font-[600]'>Mobile</p></th>
                    <th className='w-3/20 '>
                    <p className='font-[600]'>Actions</p></th>
                </tr>
            </thead>
            <tbody>
                <tr className='w-full flex flex-col'>
                    {
                        registrations.map((registration, index) => <li key={index} className='w-full flex justify-between border-b-2 border-[#E9E7FD] text-[#666666] items-center'>
                            <td className='w-2/20'>
                                <p className='text-start'>{registration.id}</p>
                            </td>
                            <td className='w-3/20 flex gap-4 items-center'>
                                <img src={registration.img} alt="image" className='w-10 h-10 rounded-full'/>
                                <p className='text-black'>{registration.userName}</p>
                            </td>
                            <td className='w-2/20'>
                                <p className='text-start'>{registration.locality}</p>
                            </td>
                            <td className='w-3/20'>
                                <p className='text-start'>{registration.lookingFor}</p>
                            </td>
                            <td className='w-4/20'>
                                <p className='text-start'>{registration.mobile}</p>
                            </td>
                            <td className='w-3/20 flex items-center justify-center gap-4'>
                                <Icon icon="lucide:edit" width="24" height="24" onClick={handleButton} className='text-[#000000]'/>
                                <Icon icon="material-symbols-light:delete-outline-rounded" width="30" height="30" onClick={handleButton} className='text-[#FF0000]'/>
                            </td>
                        </li>)
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default RecentRegisteredBuyers
