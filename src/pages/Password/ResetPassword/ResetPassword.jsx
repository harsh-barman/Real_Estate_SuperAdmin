import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = () => {


  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNext = () => {
    navigate("/signupsuccessfully");
  };

  const handleLogin = () => {
    navigate("/login");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
}

  return (
    <div className="relative w-120 py-22 px-4 bg-white rounded-lg shadow-md z-4 flex flex-col justify-center items-center">
            <h2 className="text-center text-2xl font-semibold mb-4">Reset Password</h2>
            <p className="text-center text-sm text-[#666666] font-[400] mb-8">Set a new password to access your account</p>
            <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
              
              {/* Create Password Field */}
              <div className="mb-4 relative w-[80%]">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password*"
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
              <div className="mb-4 relative w-[80%]">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
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
    
              {/* Submit Button */}
              <button className="w-80 bg-[#00A58E] text-white py-2 font-[700] rounded-md mt-5 cursor-pointer" onClick={() => navigate("/resetsuccessfully")}>
                Create New Password
              </button>
            </form>
    
            {/* Login Link */}
            <p className="text-center text-sm text-[#7D7D7D] mt-2">
              Already have an account? <span className="text-[#00A58E] font-[600]" onClick={() => navigate("/")}>Sign Up</span>
            </p>
          </div>
  )
}

export default ResetPassword
