import React from 'react'
import { useNavigate } from 'react-router-dom';

const SuccessVerification = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/admin");
    }

  return (
    <section className='w-full h-full flex justify-center items-center bg-[#A2A1A8]/[33%] backdrop-blur-lg absolute'>
      <div className='size-90 flex flex-col gap-2 justify-center items-center bg-white pt-4 pb-8 px-8 rounded-4xl text-center shadow-2xl'>
        <img src="/popperr.png" alt="verification image" className='w-[50%]'/>
        <p className='text-2xl font-bold -mt-2'>Password Update Successfully</p>
        <p className='text-sm text-[#A2A1A8]'>Your password has been update successfully</p>
        <button className='w-full py-2 bg-[#3293E7] rounded-lg mt-6 text-white' onClick={handleSubmit}>Back to Login</button>
      </div>
    </section>
  )
}

export default SuccessVerification
