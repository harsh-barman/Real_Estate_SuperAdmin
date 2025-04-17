import React from 'react'


const registrations = [
    {
        id: "#527269", img: "/profile1.jpeg", userName: "Ketan", locality: "Pune", category: "Builder", licenseNo: "12345 67890",mobile: "+91 12345 67890"
    },
    {
        id: "#748526", img: "/profile2.jpeg", userName: "Siddhart", locality: "Mumbai", category: "Agent", licenseNo: "------------",mobile: "+91 12345 67890"
    },
    {
        id: "#748526", img: "/profile3.jpeg", userName: "Sarah", locality: "Nagpur", category: "Builder", licenseNo: "12345 67890",mobile: "+91 12345 67890"
    },
]

const RecentRegistrationSeller = () => {

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
                    <p className='text-start px-2 font-[600]'>Category</p></th>
                    <th className='w-3/20 '>
                    <p className='text-start px-2 font-[600]'>License No.</p></th>
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
                                <p className='text-start'>{registration.category}</p>
                            </td>
                            <td className='w-3/20'>
                                <p className='text-start'>{registration.licenseNo}</p>
                            </td>
                            <td className='w-4/20'>
                                <p className='text-start'>{registration.mobile}</p>
                            </td>
                            <td className='w-3/20'>
                                <button className='bg-[#ECF8F7] text-[#007F6D] text-l rounded px-4 py-2' onClick={handleButton}>View Details</button>
                            </td>
                        </li>)
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default RecentRegistrationSeller
