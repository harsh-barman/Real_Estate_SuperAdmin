import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";

const ForgotPassword = () => {

    const navigate = useNavigate();

    const handleInput = (event) => {
        event.preventDefault();
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/admin/otpverification");
    }

    return (
        <section className='w-full h-full bg-[#daf1ff] flex'>

            {/* Left Section */}
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-40 '>
                <div className='w-[60%] flex flex-col'>
                    <div className="w-fit flex mb-4">
                        <NavLink to="/admin" className="flex items-center gap-2 text-[#16151C]">
                            <IoIosArrowBack size={24} />
                            <p className='text-lg '>Back</p>
                        </NavLink>
                    </div>
                    <p className='text-[#16151C] text-4xl font-[700] mb-2'>Forgot Password</p>
                    <p className='text-[#A2A1A8] text-l'>Enter your registered email address. we'll send you a code to reset your password.</p>

                    <form className='w-full flex flex-col gap-4 mt-6'>
                        <div className="w-full flex flex-col border-2 border-[#7152F3] rounded py-2 px-4">
                            <label htmlFor="email" className="text-[#7152F3] text-sm">Email Address</label>
                            <input type="email" id="email" placeholder="rashmika02@example.com" className="bg-transparent focus:outline-none" autoComplete="off" onClick={handleInput} />
                        </div>

                        <button className="w-full py-2 bg-[#3293E7] rounded mt-2 text-white" onClick={handleSubmit}>Send OTP</button>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div className='w-1/2 h-full flex flex-col justify-center items-center bg-white'>
                <img src="/forgotpassword.png" alt="forgot password page" className='w-[80%]'/>
            </div>

        </section>
    )
}

export default ForgotPassword
