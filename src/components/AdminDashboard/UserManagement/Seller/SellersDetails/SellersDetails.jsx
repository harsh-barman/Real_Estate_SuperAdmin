import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const SellerData = [
    {
        id: 1,
        name: "Name of seller ",
        location: "Location of Office ",
        rating: "4.0",
        sale: "115 ",
        saletext: " Properties for sale",
        rent: "21 ",
        renttext: "  Properties for rent",
        title1: "Operating Areas :",
        title2: "About",
        operatingAresa:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aperiam, ab laudantium harum blanditiis asperiores quo nulla ea doloremque accusantium.",
        about:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aperiam, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aperiam, ab laudantium harum blanditiis asperiores quo nulla ea doloremque accusantium.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aperiam, ab laudantium harum blanditiis asperiores quo nulla ea doloremque accusantium.",
    },
];

const SellersDetails = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="bg-white flex flex-col rounded-xl w-full mt-10 py-8 px-10 text-black">
                <h1 className="text-[#000000]/[70%] font-[600] text-xl">
                    Seller`s Details
                </h1>

                <div className="w-full h-fit flex mt-8 justify-end gap-10">
                    {/* Left Division */}
                    <div className="w-1/2 flex ">
                        <div className="bg-[#F9F9F9] shadow-md py-4 px-8 pt-15 rounded">
                            {SellerData.map(
                                ({
                                    id,
                                    name,
                                    location,
                                    title1,
                                    title2,
                                    sale,
                                    rent,
                                    rating,
                                    operatingAresa,
                                    about,
                                    saletext,
                                    renttext,
                                }) => {
                                    return (
                                        <div key={id} className="w-full">
                                            <div className="flex gap-16">
                                                <Icon
                                                    icon="circum:image-on"
                                                    className="w-30 h-30 bg-[#FFFFFF] p-8 rounded-xl"
                                                />
                                                <div className="w-fit">
                                                    <h1 className="font-bold text-xl">{name}</h1>
                                                    <h2 className="text-gray-700 text-l">{location}</h2>
                                                    <div className="flex gap-5">
                                                        <p className="text-[#4F5E71]">{rating}</p>
                                                        <div className="text-[#FF6F47] flex">
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                            <FaStar />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-5">
                                                        <p className="text-black">{sale}</p>
                                                        <p className="text-gray-700">{saletext}</p>
                                                    </div>
                                                    <div className="flex gap-7">
                                                        <p className="text-black">{rent}</p>
                                                        <p className="text-gray-700">{renttext}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-10">
                                                <h1 className="font-[600] text-xl">{title1}</h1>
                                                <p className="w-full text-[#697D95] text-justify mt-2">
                                                    {operatingAresa}
                                                </p>
                                            </div>
                                            <div className="mt-10">
                                                <h1 className="font-[600] text-xl">{title2}</h1>
                                                <p className="w-full text-[#697D95] text-justify mt-2">
                                                    {about}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    {/* Right Division */}
                    <div className="w-1/2 flex flex-col justify-around">
                        <div className="bg-[#F9F9F9] shadow-md w-full py-2 rounded items-center justify-center ">
                            <Inquries />
                        </div>
                        <div className="bg-[#F9F9F9] shadow-md rounded mt-4">
                            <Piechart />
                        </div>

                        <div className="bg-[#F9F9F9] shadow-md flex mt-4 h-fit items-center justify-center w-full py-4 rounded gap-4">
                            <div className="bg-white rounded-2xl h-fit w-[28%] text-center">
                                <h1 className="text-4xl font-[600] text-[#007A69]">30</h1>
                                <h2 className="text-l text-[#007A69] font-[600]">Jan,Mon</h2>
                                <button className="bg-[#00A58E] text-white px-4 py-2 rounded-b-2xl w-full mt-5" onClick={() => alert("Currently Under Developement")}>
                                    View Details
                                </button>
                            </div>

                            <div className="bg-white rounded-2xl h-fit w-[28%] text-center">
                                <h1 className="text-4xl font-[600] text-[#007A69]">30</h1>
                                <h2 className="text-l text-[#007A69] font-[600]">Jan,Mon</h2>
                                <button className="bg-[#00A58E] text-white px-4 py-2 rounded-b-2xl w-full mt-5" onClick={() => alert("Currently Under Developement")}>
                                    View Details
                                </button>
                            </div>

                            <div className="bg-white rounded-2xl h-fit w-[28%] text-center">
                                <h1 className="text-4xl font-[600] text-[#007A69]">30</h1>
                                <h2 className="text-l text-[#007A69] font-[600]">Jan,Mon</h2>
                                <button className="bg-[#00A58E] text-white px-4 py-2 rounded-b-2xl w-full mt-5" onClick={() => alert("Currently Under Developement")}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full justify-center flex mt-10 gap-6">
                    <button className="bg-[#ECF8F7] text-[#007F6D] font-[600] w-60 h-10 rounded cursor-pointer" onClick={() => navigate(-1)}>
                        Back to list of Seller
                    </button>
                        <button className="bg-[#007F6D]  text-white font-[600] w-60 h-10 rounded cursor-pointer" 
                        onClick={() => alert("Currently Under Developement")}>
                            View Properties
                        </button>
                </div>
            </div>
        </>
    );
};

export default SellersDetails;

const Inquries = () => {
    return (
        <div className="flex gap-8 bg-[#F9F9F9] w-full justify-center py-2">
            {/* {Inquiries} */}
            <div className="bg-white border-1 rounded-xl border-[#00A58E] w-[28%] overflow-hidden relative">
                <h1 className="font-[700] text-[#004D41] text-l pl-2 mt-2">Inquiries</h1>
                <img src="/Vector1.png" className="w-20 h-20 absolute index-1 right-0 " />
                <div className="flex relative py-2">
                    <div className="font-bold px-2 index-2">
                        <p className="mt-5 text-2xl text-[#004D41]">0</p>
                        <p className="mt-2 text-[#BAC7D5] font-[400]">View</p>
                    </div>
                </div>
            </div>

            {/* {Appointment} */}
            <div className="bg-white border-1 rounded-xl border-[#00A58E] w-[28%] overflow-hidden relative">
                <h1 className="font-[700] text-[#004D41] text-l pl-2 mt-2">Appointment</h1>
                <img src="/Vector2.png" className="w-20 h-20 absolute index-1 right-0 " />
                <div className="flex relative py-2">
                    <div className="font-bold px-2 index-2">
                        <p className="mt-5 text-2xl text-[#004D41]">0</p>
                        <p className="mt-2 text-[#BAC7D5] font-[400]">View</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Piechart = () => {
    return (
        <div className="bg-[#F9F9F9] px-6 py-4">
            <h1 className="font-bold text-xl text-[#252A31]">Property Insights</h1>
            <div className="w-full grid grid-cols-2 gap-4 px-14 mt-4">
                    <div className="flex gap-3 items-center">
                        <FaCircle className="text-[#00A58E]/[48%]" />
                        <p className="text-l font-[400]">Just started</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaCircle className="text-[#FABE7A]" />
                        <p className="text-l font-[400]">Underconstructon</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaCircle className="text-[#F6866A]" />
                        <p className="text-l font-[400]">Ready Position</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <FaCircle className="text-[#F6866A]" />
                        <p className="text-l font-[400]">Ready Position</p>
                    </div>
            </div>
            
            <div className="w-full flex justify-center items-center py-2">
                <PropertiesChart />
            </div>
        </div>
    );
};

const PropertiesChart = () => {
    const segments = [
      { color: "#00A58E7A", value: 20 },
      { color: "#FABE7A", value: 10 },
      { color: "#F6866A", value: 35 },
      { color: "#F6866A", value: 35 },
    ];
  
    const radius = 38;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const total = segments.reduce((sum, seg) => sum + seg.value, 0);

  let offset = 0;
  
    return (
        <div className="w-fit h-fit relative">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {segments.map((segment, index) => {
            const segmentLength = (segment.value / total) * circumference;
            const dashArray = `${segmentLength} ${circumference - segmentLength}`;
            const dashOffset = offset;
  
            offset += segmentLength;
  
            return (
              <circle
                key={index}
                r={radius}
                cx="50"
                cy="50"
                fill="transparent"
                stroke={segment.color}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeDashoffset={-dashOffset}
                strokeLinecap="round"
              />
            );
          })}
        </svg>
  
        {/* Center Label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-[600] text-[#004D41]">110</span>
          <span className="text-xl font-[700] text-[#004D41] text-center leading-tight">Properties Listed</span>
        </div>
      </div>
    );
  };
