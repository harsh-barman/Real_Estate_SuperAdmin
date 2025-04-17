import { PiMetaLogoBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";


const AdminLogin = () => {


  const handleInput = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className='w-full h-full bg-[#daf1ff] flex'>

      {/* Left Section */}
      <div className='w-1/2 h-full flex flex-col justify-center items-center gap-40 bg-white'>
        <div className='flex gap-2 items-center'>
          <PiMetaLogoBold size={50} color="white" className="bg-[#96D7FF] rounded-full p-2" />
          <h1 className="font-[600] text-4xl text-[#16151C]"> HRMS</h1>
        </div>
        <div className="w-[80%]">
          <p className="text-justify text-2xl text-[#000000]">Welcome to the HRM System Log in to manage your personal information, time and attendance, and performance reviews securely. Your data is protected with the highest security standards.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-1/2 h-full flex flex-col justify-center items-center'>
        <div className="w-[50%] h-fit">
          <div className="flex gap-2 items-center text-2xl">
            <p className='text-[#16151C] font-[700]'>Welcome</p>
            <Icon icon="noto:waving-hand" />
          </div>
          <p className="text-[#A2A1A8] text-lg mb-4">Please login here</p>
          <p className="text-[#135078] text-3xl font-[700] tracking-widest">Admin Login</p>

          {/* Login Form */}
          <form className="w-full flex flex-col gap-4 mt-6">
            <div className="w-full flex flex-col border-2 border-[#7152F3] rounded py-2 px-4">
              <label htmlFor="email" className="text-[#7152F3] text-sm">Email Address</label>
              <input type="email" id="email" placeholder="rashmika02@example.com" className="bg-transparent focus:outline-none" autoComplete="off" onClick={handleInput} />
            </div>
            <div className="w-full flex flex-col border-2 border-[#7152F3] rounded py-2 px-4">
              <label htmlFor="password" className="text-[#7152F3] text-sm">Password</label>
              <div className="flex justify-between">
                <input type="password" id="password" placeholder="*************" className="w-full bg-transparent focus:outline-none" autoComplete="off" onClick={handleInput} />
                <FaRegEyeSlash size={22} />
              </div>
            </div>

            <div className="w-full h-full flex justify-between items-center">
              <div className="flex items-center gap-2">
                <input type="checkbox" id="remeberme" className="size-4" />
                <label htmlFor="rememberme" className="text-l font-[400]">Remember Me</label>
              </div>

              <div>
                <NavLink to="/admin/forgotpassword">
                  <p className="text-[#7152F3] text-l">Forgot Password?</p>
                </NavLink>
              </div>
            </div>

            <button className="w-full py-2 bg-[#3293E7] rounded mt-2 text-white" onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin
