import React, { useEffect, useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdArrowBackIos } from "react-icons/md";
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';


const SuperAdminHeader = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [toggle, setToggle] = useState(false);
  const [logout, setLogout] = useState(false);
  const [profile, setProfile] = useState(false);

  const [heading, setHeading] = useState({
    title: "",
    back: false
  });

  useEffect(() => {
    switch (location.pathname) {
      case "/superadmin": setHeading({ title: "Hello, Super Admin", back: false });
        break;
      case "/superadmin/customers": setHeading({ title: "Buyer’s Statistics", back: true });
        break;
      case "/superadmin/agents": setHeading({ title: "Agent’s Statistics", back: true });
        break;
      case "/superadmin/builders": setHeading({ title: "Builder’s Statistics", back: true });
        break;
      case "/superadmin/usermanagement": setHeading({ title: "User Management - Buyers", back: false });
        break;
      case "/superadmin/usermanagement/seller": setHeading({ title: "User Management - Seller", back: true });
        break;
      case "/superadmin/usermanagement/seller/recentregistrations": setHeading({ title: "User Management - Seller", back: true });
      case "/superadmin/usermanagement/seller/sellersdetails": setHeading({ title: "User Management - Seller", back: true });
        break;
      case "/superadmin/propertylisting": setHeading({ title: "Property Listing", back: false });
        break;
      case "/superadmin/propertylisting/propertyrequestlist": setHeading({ title: "Property Listing", back: true });
        break;
      case "/superadmin/propertydetails": setHeading({ title: "Property Details", back: true });
        break;
      case "/superadmin/advertisements": setHeading({ title: "Advertisements", back: false });
        break;
      case "/superadmin/advertisements/approvedlist": setHeading({ title: "Advertisements Details", back: true });
        break;
      case "/superadmin/subscriptionmanagement": setHeading({ title: "Subscription Managements", back: false });
        break;
      case "/superadmin/subscriptionmanagement/edit": setHeading({ title: "Edit Subscription Managements", back: true });
        break;
      case "/superadmin/revenuemodel": setHeading({ title: "Revenue Model", back: false });
        break;
      case "/superadmin/revenuemodel/transactions": setHeading({ title: "Transaction History", back: true });
        break;
      case "/superadmin/revenuemodel/transactiondetails": setHeading({ title: "Transaction Details", back: true });
        break;
      case "/superadmin/complaintsmanagement": setHeading({ title: "Complaints Management", back: false });
        break;
      case "/superadmin/complaintsmanagement/complaint": setHeading({ title: "View Complaints ", back: true });
        break;
    }
  }, [location.pathname]);

  const handleBack = () => {
    navigate(-1);
  }

  const handleToggle = () => {
    setToggle(prev => !prev);
  }

  const handleLogout = () => {
    setLogout(prev => !prev);
  }
  const handleProfile = () => {
    setProfile(prev => !prev);
  }

  return (
    <div className='bg-[#00a58e] text-white ml-30p w-full px-8 py-10 h-60 flex flex-col'>
      {/* Search bar */}
      <div className="w-full flex h-10 justify-between">
        <div className="flex items-center h-10 bg-white text-gray-700 rounded-sm px-2 py-2 w-110">
          <FiSearch color='#00A58E' size={24} />
          <input className="outline-none w-full pl-1.5 text-l font-bold-" type="text" placeholder='Search Here' />
        </div>

        {/* User details */}
        <div className="flex items-center space-x-4 relative">
          {/* <div className='bg-[#C9ECE7] p-1.5 rounded-full'>
            <RxChatBubble color='black' size={22}/>
          </div> */}
          {/* <div className='bg-[#C9ECE7] p-1.5 rounded-full'>
            <BsBell color='black' size={22} />
          </div> */}
          <div className={`flex flex-col gap-2 ${toggle ? "absolute right-0 rounded-md p-4 w-70 top-0 shadow-md z-20   bg-white text-black": "items-center p-2"}`} onClick={handleToggle}>
            <div className={`flex gap-4 items-center ${toggle ? "border-b-1 border-[#F0F0F0] pb-2": ""}`} >
              <img src="/profile1.jpeg" alt='profile-img' className='w-12 h-12 rounded-full border-2 border-black' />
              <div>
                <span className="block text-sm font-semibold">Mahi Sharma</span>
                <span className="text-sm">mahisharma1@gmail.com</span>
              </div>
            </div>
            {
              toggle &&
              <div className='flex flex-col justify-start'>
                <div className='w-full flex justify-between items-center py-2 border-b-2 border-[#F0F0F0]' onClick={handleProfile}>
                  <div className='flex flex-col'>
                    <p className='text-[#697D95] font-[400] text-lg'>Personal Info</p>
                    <p className='text-[#B0B0B0] font-[400] text-sm'>name, email, contact...</p>
                  </div>
                  <Icon icon="ix:user-profile" width="28" height="28"  className='text-[#B0E3DC]'/>
                </div>
                <div className='w-full flex justify-between items-center py-2' onClick={handleLogout}>
                  <p className='text-[#CE1313] font-[500]'>Log out</p>
                  <Icon icon="humbleicons:logout" width="28" height="28"  className='text-[#CE1313]'/>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Hello, Super Admin */}
      <div className="mt-5 mb-5 flex items-center gap-2 h-min">
        {heading.back ? <MdArrowBackIos size={24} onClick={handleBack} /> : <></>}
        <h2 className="text-2xl font-[500]">{heading.title}</h2>
      </div>

      {
        logout && 
        <div className='w-screen backdrop-blur-sm h-screen absolute right-0 top-0 flex justify-center items-center z-24'>
          <div className='w-fit bg-white flex flex-col justify-center shadow-2xl text-center gap-4 py-14 px-20 rounded-4xl'>
            <p className='text-[#1B1C1F] font-[700] text-xl'>Log out</p>
            <p className='text-[#4F4F4F] font-[500] text-lg'>Are you sure want to log out?</p>
            <div className='w-full flex justify-around items-center'>
              <button onClick={() => navigate("/")} className='bg-[#D21C1C] text-white rounded px-6 font-[500] py-2'>Log Out</button>
              <button onClick={handleLogout} className='bg-[#FCF3F3] text-[#D21C1C] rounded font-[500] px-6 py-2'>Cancle</button>
            </div>

          </div>
        </div>
      }
{
        profile && 
        <div className='w-screen backdrop-blur-sm h-screen absolute right-0 top-0 flex justify-center items-center z-24'>
          <div className='w-[50%] bg-white flex flex-col justify-center shadow-2xl text-center gap-4 rounded'>
            <div className='w-full justify-between px-6 py-4 flex '>
            <p className='text-[#697D95] font-[500] text-2xl'>Edit Personal Information</p>
              <Icon icon="bitcoin-icons:cross-filled" width="28" height="28" className='text-[#726B6B]' onClick={handleProfile}/>
            </div>

            <div className='w-full justify-center items-center text-center py-8 px-10'>
              <Icon icon="uil:upload" width="100" height="100"  className='bg-[#D9D9D9] text-white justify-self-center p-8 rounded-full' onClick={() =>alert("Currently Under Developement")} />
              <p className='text-[#000000] font-[400] mt-2'>Upload Your Profile picture <span className='italic'>(Optional)</span></p>

              <div className='w-full flex border-1 justify-between items-center text-center px-4 mt-6 gap-10'>
                  <div className='w-1/2 flex flex-col border-1 gap-6'>
                      <input type="text" value={"Mahi Sharma"} className='border-2 border-[#232A31] py-1 px-6 rounded text-lg text-[#232A31]' />
                      <input type="text" value={"mahisharma01@gmail.com"} className='border-2 border-[#232A31] py-1 px-6 rounded text-lg text-[#232A31]'/>
                  </div>
                  <div className='w-1/2 flex flex-col border-1 gap-6'>
                      <input type="text" placeholder='Enter New Name' className='border-2 border-[#697D95] py-1 px-6 rounded text-lg text-[#232A31]' />
                      <input type="text" placeholder='Updated Email ID' className='border-2 border-[#697D95] py-1 px-6 rounded text-lg text-[#232A31]'/>
                  </div>
              </div>

              <button className='bg-[#00A991] text-white font-[500] px-8 py-2 rounded mt-14' onClick={() =>alert("Currently Under Developement")}>Save Changes</button>
            </div>
          </div>
        </div>
      }

    </div>
  );
}

export default SuperAdminHeader;
