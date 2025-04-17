import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className='relative w-120 py-22 px-4 bg-white rounded-lg shadow-md z-4 flex flex-col justify-center items-center'>
        <h2 className='text-center text-2xl font-semibold mb-4'>Forgot Password</h2>
        <p className='text-center text-sm text-[#666666] font-[400] mb-6'>Enter your registered email to receive a password reset link</p>
        
        <form className='flex w-[80%] flex-col' onSubmit={handleSubmit}>
            <div className= 'w-full justify-center items-center'>
                <input type="email" placeholder='Email ID*' className='w-full p-2 pl-6 font-[600] border-1 border-[#8F8F8F] rounded-sm placeholder-[#8F8F8F] justify-self-center' />
            </div>
            <p className='text-end text-sm text-[#7D7D7D] mt-2 mb-10'>Go back to <span className='text-[#00A58E] font-[500]' onClick={() => navigate('/login')}>Login</span>
            </p>

            <button className='w-80 mt-12 mx-auto bg-[#00A58E] text-white py-2 rounded-md justify-center items-center cursor-pointer font-[700]' onClick={() => navigate('/resetpassword')}>Reset Password</button>
        </form>
        <p className='text-center text-sm text-[#7D7D7D] mt-2'>
            Don’t have an account? <span className='text-[#00A58E] font-[600]' onClick={() => navigate('/')}>Sign up</span>
        </p>
      </div>
  )
}

export default ForgotPassword
