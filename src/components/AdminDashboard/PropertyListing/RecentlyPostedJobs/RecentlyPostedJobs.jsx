import React from 'react'


const RecentlyPostedJobs = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="w-[80%] h-min bg-white px-6 py-4 rounded-2xl ">
        <p className="text-lg  text-[#000000A3] font-[600]">Recently Posted Jobs</p>

        {/* Recently Posted Jobs Table */}
        <div className="my-5 w-full">
          
          {/* First Row */}
          <div className='flex h-24 items-center mb-3'>
            <div className="py-2 pl-2 w-[45%] ">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#0BA02C]" />
                <p className='text-lg text-[#202224]/70'>Hiranandani</p>
              </div>
              <div className="text-start mt-2">
                <p className='text-[#606060] font-[400]'>Pune, Maharashtra</p>
                <p className='text-sm text-[#666666] font-[200]'><span className='font-[300]'>Created on:</span> 24th Nov 2024 Expires on: 30th Nov 2025</p>
              </div>
            </div>
            <div className='flex w-[55%] h-full items-center justify-end'>
              <State label={"Post"} value={20} />
              <State label={"New"} value={20} />
              <State label={"Reviewed"} value={5} />
              <State label={"Rejected"} value={15} />
              <State label={"Selected"} value={5} />
            </div>
          </div>

          {/* Second Row */}
          <div className='flex h-24 items-center'>
            <div className="py-2 pl-2 w-[45%] ">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-[#0BA02C]" />
                <p className='text-lg text-[#202224]/70'>Hiranandani</p>
              </div>
              <div className="text-start mt-2">
                <p className='text-[#606060] font-[400]'>Pune, Maharashtra</p>
                <p className='text-sm text-[#666666] font-[200]'><span className='font-[300]'>Created on:</span> 24th Nov 2024 Expires on: 30th Nov 2025</p>
              </div>
            </div>
            <div className='flex w-[55%] h-full items-center justify-end'>
              <State label={"Post"} value={20} />
              <State label={"New"} value={20} />
              <State label={"Reviewed"} value={5} />
              <State label={"Rejected"} value={15} />
              <State label={"Selected"} value={5} />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


const State = ({ label, value }) => {
  return <>
    <div className='w-[18%] h-full flex flex-col items-center '>
      <p className='text-sm font-[400] text-[#606060] mb-1'>{label}</p>
      <p className="flex items-center justify-center w-[70%] h-[60%] text-lg bg-[#CCEDE8] text-[#666666] font-[500] rounded-xl text-center">
        {value}
      </p>
    </div>

  </>
}

export default RecentlyPostedJobs
