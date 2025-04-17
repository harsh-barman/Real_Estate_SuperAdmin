import React from 'react';

const Cards = ({ stats }) => {
  return (
    <div className='w-full relative flex'>
      
      <div className='w-full flex justify-between'>
        {stats.map((stat, index) => (
            <div key={index} className='flex flex-col items-start p-4 bg-white shadow-md rounded-lg w-60'> 
              <div className='flex items-center justify-between w-full'>
                <h3 className='text-gray-700 text-sm font-semibold'>{stat.title}</h3>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${stat.bgColor}`}>
                    <img src={stat.icon} alt={stat.title} className='w-5 h-5' /> 
                </div>
              </div>
              <p className='text-xl font-bold mt-1'>{stat.value}</p> 
              <div className='flex items-center gap-2 mt-3'> 
                  <img src={stat.changeIcon} alt='change icon' className='w-4 h-4' /> 
                  <p className='text-xs'><span className='text-[#00a58e] font-semibold'>{stat.change.split(' ')[0]}</span> <span className='text-[#606060]'>{stat.change.substring(stat.change.indexOf(' ') + 1)}</span></p>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
