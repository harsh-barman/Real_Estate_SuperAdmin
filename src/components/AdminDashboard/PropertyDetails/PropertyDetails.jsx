import React from "react";
import PropertyProfile from "./PropertyProfile/PropertyProfile";
import Propertyinformation from "./Propertyinformation/Propertyinformation";

const amenities = [
  {
    icon: "/icon1.png",
    titie: "Street Light",
  },
  {
    icon: "/icon2.png",
    titie: "Water Storage",
  },
  {
    icon: "/icon3.png",
    titie: "Parking Service",
  },
  {
    icon: "/icon4.png",
    titie: "Gym/Fitness Area",
  },
  {
    icon: "/icon5.png",
    titie: "Play Area",
  },
  {
    icon: "/icon6.png",
    titie: "Intercom Service",
  },
  {
    icon: "/icon7.png",
    titie: "Network Connectivity",
  },
  {
    icon: "/icon8.png",
    titie: "Lift Service",
  },
  {
    icon: "/icon9.png",
    titie: "Park",
  },
  {
    icon: "/icon10.png",
    titie: "Waste Disposal",
  },
  {
    icon: "/icon11.png",
    titie: "Swimming Pool",
  },
];

const PropertyDetails = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center bg-[white] rounded-2xl px-10 py-10 mb-10">
        
        {/* Property Header */}
        <PropertyProfile propertyName={"Property Name"} />

        <hr className="w-[60%] justify-center mt-6" />

        {/* Property Information and Images section */}
        <Propertyinformation />

        {/* Amenities Section */}
        <Amenities />

        <PostButtons />
      </div>
    </>
  );
};

const Amenities = () => <div className="flex flex-col px-4 gap-2 w-full mt-8">
<p className="text-[#252A31] text-2xl font-[500]">Amenities</p>

<ul className="grid grid-cols-4 mt-4 gap-4 px-12">
  {amenities.map((element, index ) => (
    <li key={index} className="flex gap-2">
      <img src={element.icon} alt="icon" className="size-8" />
      <p className="text-[#4F5E71] text-lg">{element.titie}</p>
    </li>
  ))}
</ul>
</div>

const PostButtons = () =>{

  const handlebutton = () => {
    alert("Currently Under Development");
  }

  return (
  <div className="flex items-center mt-16 gap-10">
    <button className="py-2 px-16 bg-[#ECF8F7] text-[#007F6D] text-l rounded" onClick={handlebutton}>
      Previous Property Post
    </button>
    <button className="py-2 px-16 bg-[#00A58E] text-white text-l rounded" onClick={handlebutton}>
      View Next Property Post
    </button>
  </div>
)};

export default PropertyDetails;
