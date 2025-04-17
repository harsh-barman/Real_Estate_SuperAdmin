import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const ResetSuccessfully = () => {

    const navigate = useNavigate();

    return (
        <div className='relative w-120 p-6 backdrop-blur-xs bg-white rounded-lg shadow-lg shadow-[#00A58E59] z-10 flex flex-col items-center'>
            <div className='text-center w-[80%]'>
                <Icon icon="icon-park-solid:success" className='w-24 text-[#00A58E] h-24 justify-center items-center mx-auto mb-10 mt-20' />
                <h2 className='text-2xl font-[700]'> Password Reset Successful!</h2>
                <p className='text-sm mt-1 text-[#80807F]'>
                    You can log in with your new password
                </p>
                <button onClick={() => navigate('/login')} className='w-[80%] mt-8 mb-25 bg-[#00A58E] text-white py-2 px-6 rounded-md cursor-pointer font-[700]'>
                    Login
                </button>
            </div>
        </div>
    )
}

export default ResetSuccessfully
