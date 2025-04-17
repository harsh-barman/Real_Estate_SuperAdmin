import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const CreatePassword = () => {

    const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    navigate("/signupsuccessfully");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
}

  const handleLogin = () => {
    navigate("/login");
  }

  return (
      <div className="relative w-120 py-20 bg-white rounded-lg shadow-md z-4 flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl font-semibold mb-6">Create Password</h2>
        <form className="w-[80%] flex flex-col items-center" onSubmit={handleSubmit}> 
          
          {/* Create Password Field */}
          <div className="mb-4 relative w-[90%]">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password*"
              className="w-full p-2 pl-6 font-[600] border border-[#8F8F8F] rounded-sm placeholder-[#8F8F8F] pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4 relative w-[90%]">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password*"
              className="w-full p-2 pl-6 font-[600] border border-[#8F8F8F] rounded-sm placeholder-[#8F8F8F] pr-10"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer text-xl"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          {/* Password Requirements */}
          <ul className="grid grid-cols-2 px-4 gap-2 w-[90%] text-sm text-[#66666699] mb-10">
            <li className={`flex items-center ${password.length >= 8 ? 'text-[#66666699]' : ''}`}>
              <div className={`${password.length >= 8 ? 'bg-[#00A58E]' : 'bg-[#00A58E]'} w-1 h-1 rounded-full mr-2`}></div>
              8 or more characters
            </li>
            <li className={`flex items-center ${/[!@#$%^&*]/.test(password) ? 'text-[#66666699]' : ''}`}>
              <div className={`${/[!@#$%^&*]/.test(password) ? 'bg-[#00A58E]' : 'bg-[#00A58E]'} w-1 h-1 rounded-full mr-2`}></div>
              One special character
            </li>
            <li className={`flex items-center ${/[A-Z]/.test(password) ? 'text-[#66666699]' : ''}`}>
              <div className={`${/[A-Z]/.test(password) ? 'bg-[#00A58E]' : 'bg-[#00A58E]'} w-1 h-1 rounded-full mr-2`}></div>
              One uppercase letter
            </li>
            <li className={`flex items-center ${/\d/.test(password) ? 'text-[#66666699]' : ''}`}>
              <div className={`${/\d/.test(password) ? 'bg-[#00A58E]' : 'bg-[#00A58E]'} w-1 h-1 rounded-full mr-2`}></div>
              One number
            </li>
          </ul>

          {/* Submit Button */}
          <button className="w-[70%] font-[700] bg-[#00A58E] text-white py-2 rounded-md mt-5 cursor-pointer" onClick={handleNext}>
            Next
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-[#7D7D7D] mt-2">
          Already have an account? <span className="text-[#00A58E] font-[600]" onClick={handleLogin}>Log In</span>
        </p>
      </div>
  )
}

export default CreatePassword
