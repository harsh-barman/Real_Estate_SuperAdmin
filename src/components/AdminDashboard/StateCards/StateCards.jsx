import React from 'react'

const StateCards = ({ state }) => {
    return (
        <ul className='flex w-full justify-between items-center'>
            {
                state.map((current, index) => {

                    const {title, count, color, icon, bgColor, icon2, message} = current;
                    return <li key={index} className={`flex flex-col w-[23%] bg-white py-2 px-4 rounded-xl gap-4 relative`}>
                        <p className='text-l text-[#202224]/[70%] font-[500]'>{title}</p>
                        <p className='text-xl font-[600]'>{count}</p>
                        <div className='flex items-center space-x-2'>
                            {icon2} 
                            <p className='text-[#606060] text-sm font-[500]'>{message ? message : "Updated Today Morning"}</p>
                        </div>
                        
                        <div className={`${color} ${bgColor} p-2 rounded-full absolute right-4`}>
                            {icon}
                        </div>
                    </li>
                })
            }
        </ul>
    )
}

export default StateCards
