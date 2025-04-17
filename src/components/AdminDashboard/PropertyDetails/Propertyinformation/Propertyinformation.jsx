import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Propertyinformation = () => {

  const handleButton = () => {
    alert("Currently Under Development");
  }
  
  return (
    <div className="flex mt-10 px-8 w-full justify-between">
      {/* Property Information Section */}
      <div className="flex flex-col w-[50%] gap-6">
        <Details />

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <p className="text-[#252A31] text-4xl font-[500]">
              Name of Building
            </p>
            <BsFillPatchCheckFill color="#00E6FF" size={20} />
          </div>

          <p className="text-[#697D95] text-2xl font-[500]">
            2BHK Flat in Hiranandani Estate, Pune
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#4F5E71] text-lg font-[500]">Overview</p>

          <p className="text-[#697D95] text-l font-[400] leading-4 w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Ut morbi sed consectetur
            facilisis. Erat sit nulla elit ultricies. Congue magna nulla varius
            bibendum massa. Ultricies est lorem condimentum nisi turpis bibendum
            placerat.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-[#252A31] text-2xl font-[500]">Name of seller</p>
          <p className="text-[#697D95] text-lg font-[500]">
            Location of Ofiice
          </p>
          <p className="text-[#697D95] text-lg font-[500]">
            +91**89****09 | ********@gmail.com
          </p>
        </div>

        <button className="w-max bg-[#00A58E] text-white text-sm py-2 rounded px-14 mt-2" onClick={handleButton}>
          Contact Seller
        </button>
      </div>

      {/* Property Images Section */}
      <PropertyImages />
    </div>
  );
};

// Details Component
const Details = () => (
  <ul className="flex w-full">
    <li className="flex flex-col border-r-1 border-[#B8C4D4] pr-4">
      <p className="text-2xl text-[#252A31] font-bold">1.5 Cr</p>
      <p className="text-sm text-[#697D95]">17,692/sqft</p>
    </li>
    <li className="flex flex-col border-r-1 border-[#B8C4D4] px-4">
      <p className="text-2xl text-[#252A31] font-bold">850 sqft</p>
      <p className="text-sm text-[#697D95]">Super Built-up Area</p>
    </li>
    <li className="flex flex-col px-4 ">
      <p className="text-2xl text-[#252A31] font-bold">2BHK</p>
      <p className="text-sm text-[#697D95]">Ready</p>
    </li>
  </ul>
);


const PropertyImages = () => <div className="w-[45%] h-[350px] flex rounded-2xl gap-0.5 overflow-hidden">
<div className="w-2/3 h-full">
  <img
    src="/propertyImage1.png"
    alt="property image1"
    className="w-full h-full object-cover rounded-l-2xl"
  />
</div>
<div className="w-1/3 h-full flex flex-col gap-0.5">
  <img
    src="/propertyImage2.png"
    alt="property image2"
    className="w-full h-1/3 object-cover rounded-tr-2xl"
  />
  <img
    src="/propertyImage3.png"
    alt="property image"
    className="w-full h-1/3 object-cover"
  />
  <img
    src="/propertyImage4.png"
    alt="property image"
    className="w-full h-1/3 object-cover rounded-br-2xl"
  />
</div>
</div>

export default Propertyinformation;
