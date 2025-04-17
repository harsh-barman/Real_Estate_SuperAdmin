import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className='relative w-120 py-18 px-4 bg-white rounded-lg shadow-md z-4 flex flex-col justify-center items-center'>
            <button className='bg-[#00A58E] text-white px-6 py-2 rounded-md mb-5'>Logo</button>
            <h2 className='text-center text-2xl font-semibold mb-10'>Log In</h2>

            <form className='w-[80%] flex flex-col items-center' onSubmit={handleSubmit}>
                <div className='mb-4 w-full'>
                    <input type="email" placeholder='Email ID' className='w-full p-2 pl-6 font-[600] border border-[#8F8F8F] rounded-sm placeholder-[#8F8F8F]' />
                </div>
                <div className='mb-4 w-full'>
                    <input type="password" placeholder='Password' className='w-full p-2 pl-6 font-[600] border border-[#8F8F8F] rounded-sm placeholder-[#8F8F8F]' />
                </div>

                <div className="flex justify-between items-center w-full text-sm mb-6">
                    <label className="flex items-center ">
                        <input type="checkbox" className="mr-2" />
                        <p className='text-[#7D7D7D]'>Remember Me</p>
                    </label>
                    <span className="text-[#00A58E] font-[500]" onClick={() => navigate("/forgotpassword")}>Forgot Password?</span>
                </div>

                <button className='w-[80%] mt-4 bg-[#00A58E] text-white py-2 rounded-md cursor-pointer font-[700]' onClick={() => navigate("/superadmin")}>
                    Login
                </button>
            </form>

            <p className='text-center text-sm text-[#7D7D7D] mt-2'>
                Don’t have an account? <span className='text-[#00A58E] font-[600]' onClick={() => navigate('/')}>Sign Up</span>
            </p>
        </div>
    )
}

export default Login
