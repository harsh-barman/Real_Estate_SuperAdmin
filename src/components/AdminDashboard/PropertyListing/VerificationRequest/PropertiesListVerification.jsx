import React, { useEffect } from "react";

import { SlLocationPin } from "react-icons/sl";
import { MdReportGmailerrorred } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const PropertiesListVerification = ({ propertyList, value, count = 1 }) => {

    const navigate = useNavigate();

  const handleReject = () => {
    alert("Currently in Developement");
  };

  const handleVerify = () => {
    alert("Currently in Developement");
  };

  const handleDetails = () => {
    navigate("/superadmin/propertydetails");
  };

  return (
    <div className={`${count ? "w-full top-10 mt-12 py-2 bg-[white] rounded-xl": "w-full"} mb-10 `}>
      <div className={`${count ? "w-full px-8 pb-6 pr-28": ""}`}>
        <ul className="w-full mt-4 mb-6">

          {count === 0 && (
            <p className="w-fit justify-self-end text-[#8B909A] text-sm text-end pr-10 cursor-default">
              <NavLink to="/superadmin/propertylisting/propertyrequestlist">
                View More
              </NavLink>
            </p>
          )}

          {count !== 0 ? (
            <div className="flex items-center justify-between mb-6">
              <p className="text-xl  text-[#616161] font-[700]">
                Lists of Properties
              </p>
              <div className="flex items-center bg-white text-gray-700 rounded-sm px-2 py-2 w-110 justify-end border-1 border-[#E8EDF1]">
                <FiSearch color="#00A58E" size={24} />
                <input
                  className="outline-none w-full pl-1.5 text-l font-bold-"
                  type="text"
                  placeholder="Search Here"
                />
              </div>
            </div>
          ) : null}

          {propertyList.slice(0, value).map((ele, index) => (
            <li
              className="flex items-center py-4 space-x-2 border-b-2 border-b-[#E9E7FD] "
              key={index}
            >
              <img
                src="/propertyImage.jpeg"
                alt="Property Image"
                className="size-14 rounded"
              />

              <div className="ml-3 w-[30%]" onClick={handleDetails}>
                <p className="text-[#18191C] text-l font-[500] mb-2 cursor-default">
                  {ele.propertyName}
                </p>
                <div className="flex items-center text-[#5E6670]">
                  <SlLocationPin size={24} color="#C8CCD1" />
                  <p className="ml-2 text-sm">{ele.location}</p>
                  <p className="ml-4 text-sm">{ele.amount}</p>
                </div>
              </div>

              <div className="w-[15%]">
                <p className="text-sm">{ele.dayTime}</p>
              </div>

              <div className="w-[18%] ">
                <PropertyType type={ele.type} />
              </div>

              <div className="w-[27%] flex justify-around">
                <button
                  className="px-6 py-2 rounded bg-[#DD2025] text-[#ffffff] text-l font-[500]"
                  onClick={handleReject}
                >
                  Reject
                </button>
                <button
                  className="px-6 py-2 rounded bg-[#CCEDE8] text-[#00A58E] text-l font-[500]"
                  onClick={handleVerify}
                >
                  Verify
                </button>
              </div>
            </li>
          ))}
        </ul>
       </div>
     </div>
  );
};

const PropertyType = ({ type }) => {
  if (type === "Residential Property") {
    return <p className="text-[#F6866A] text-sm">Residential Property</p>;
  } else if (type === "Commercial Property") {
    return <p className="text-[#00A58E] text-sm">Commercial Property</p>;
  } else if (type === "Rental Property") {
    return <p className="text-[#FABE7A] text-sm">Rental Property</p>;
  } else if (type === "Land Property") {
    return <p className="text-[#29CC39] text-sm">Land Property</p>;
  } else {
    return (
      <p className="flex items-center text-[#DD2025] space-x-1 text-sm">
        {" "}
        <MdReportGmailerrorred size={20} />
      </p>
    );
  }
};

export default PropertiesListVerification;
