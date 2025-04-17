import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const initialProperties = [
    { action: false, approve: false, comment: "" },
    { action: false, approve: false, comment: "" },
    { action: false, approve: false, comment: "" },
    { action: false, approve: false, comment: "" },
    { action: false, approve: false, comment: "" },
];

const PropertiesTable = ({ actionState }) => {
    const [properties, setProperties] = useState(initialProperties);

    const handleAction = (index) => {
        setProperties(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, action: !item.action } : { ...item, action: false }
            )
        );
    };

    const handleClick = () => {
        alert("Currently Under Development");
    };

    return (
        <table className="w-fit mt-10">
            <thead>
                <tr className='border-b-2 border-[#EFEFEF]  text-[#6F767E]'>
                    <th className='w-1/20 text-left'><input type="checkbox" className='w-4 h-4' /></th>
                    <th className='w-1/20'><p >Property</p></th>
                    <th className='w-3/20'><p className='text-start mx-2'>Property Name</p></th>
                    <th className='w-3/20'><p className='text-start mx-2'>Date</p></th>
                    <th className='flex justify-around items-center'>
                       <p>Price</p>
                       <Icon icon="lucide:arrow-up-down" width="20" height="20" />
                    </th>
                    <th className={`w-2/20`}>Status</th>
                    {actionState ? <th className='w-4/20'><p className='text-end'>Action</p></th> : <th className='w-4/20'></th>}
                </tr>
            </thead>

            <tbody>
                {properties.map((property, index) => (
                    <tr key={index} className='border-b-2 border-[#EFEFEF]'>
                        <td className='w-1/20'><input type="checkbox" className='w-4 h-4' /></td>
                        <td className='w-1/20'>
                            <img src='/propertyImage.jpeg' alt='property' className='w-12 h-12 rounded' />
                        </td>
                        <td className='w-3/20 text-sm text-[#6F767E] font-medium'>
                            <p className='text-start'>2BHK Flat in Hiranandani Estate, Pune</p>
                        </td>
                        <td className='w-3/20 text-sm text-[#6F767E] font-medium'>
                            <p className='text-start'>Feb 08 - Mar 08, 2025</p>
                        </td>
                        <td className='w-2/20 text-sm text-[#6F767E] font-medium'>
                            <p>1Cr-1.5</p>
                        </td>
                        <td className='w-1/20 text-sm font-medium'>
                            {actionState
                                ? <span className='text-[#F6866A]'>Pending</span>
                                : <span className='text-[#00A58E]'>Approve</span>
                            }
                        </td>
                        {actionState && (
                            <td className='w-1/20 relative text-end'>
                                <Icon
                                    icon="mage:dots"
                                    width="24"
                                    height="24"
                                    className='cursor-pointer text-[#6F767E] justify-self-end'
                                    onClick={() => handleAction(index)}
                                />
                                {property.action && (
                                    <div className='absolute z-10 bg-white py-4 px-6 shadow-md rounded top-0 right-14 w-48'>
                                        <div className='text-[#6F767E] flex items-center gap-2 cursor-pointer' onClick={handleClick}>
                                            <Icon icon="mdi:tick-circle-outline" width="24" height="24" />
                                            Approve
                                        </div>
                                        <div className='mt-2 text-[#6F767E] flex items-center gap-2 cursor-pointer' onClick={handleClick}>
                                            <Icon icon="fontisto:commenting" width="20" height="20" />
                                            Comment
                                        </div>
                                    </div>
                                )}
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default PropertiesTable;
