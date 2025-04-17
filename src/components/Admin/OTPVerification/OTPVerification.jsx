import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import SuccessVerification from "./SuccessVerification";

const OTPVerification = () => {
  const [verification, setVerification] = useState(false);

  let [otp, setOtp] = useState([0, 0, 0, 0, 0]);

  const handleInput = (index, value) => {
    if(value === isNaN) return;

    if(0 <= value <= 9) {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(otp);

    setVerification(prev => !prev);
  };

  return (
    <section className="w-full relative h-full bg-[#daf1ff] flex">
      {/* Left Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center gap-40 ">
        <div className="w-[50%] flex flex-col">
          <div className="w-fit flex mb-4">
            <NavLink
              to="/admin/forgotpassword"
              className="flex items-center gap-2 text-[#16151C]"
            >
              <IoIosArrowBack size={24} />
              <p className="text-lg ">Back</p>
            </NavLink>
          </div>
          <p className="text-[#16151C] text-4xl font-[700] mb-2">Enter OTP</p>
          <p className="text-[#A2A1A8] text-l">
            We have share a code of your registered email address
            robertallen@example.com
          </p>

          <form className="w-full flex gap-4 mt-6">
            {otp.map((digit, index) => (
              <input
                type="text"
                value={digit}
                key={index}
                className="size-12 flex border-2 text-center text-2xl font-[600]
                 border-[#7152F3] rounded-xl p-2"
                maxLength={1}
                onChange={(e) => handleInput(index, e.target.value)}
              />
            ))}
          </form>
          <button
            className="w-full py-2 bg-[#3293E7] rounded mt-8 text-white"
            onClick={handleSubmit}
          >
            Verify
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center bg-white">
        <img src="/otppage.png" alt="OTP page" className="w-[64%]" />
      </div>

      {verification && <SuccessVerification />}
    </section>
  );
};

export default OTPVerification;
