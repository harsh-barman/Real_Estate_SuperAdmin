import StateCards from "../StateCards/StateCards";
import { PiBriefcaseFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaReceipt } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { Outlet } from "react-router-dom";

const state = [
  {
    title: "Active Property",
    count: 400,
    icon: <PiBriefcaseFill size={24} color="text-[#D3434D]" />,
    color: "text-[#D34A3D]",
    bgColor: "bg-[#FF6F61]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#D34A3D]" />,
  },
  {
    title: "New Property",
    count: 402,
    icon: <HiUserGroup size={24} />,
    color: "text-[#8280FF]",
    bgColor: "bg-[#8280FF]/[21%] ",
    icon2: <CiClock1 size={26} className="text-[#8280FF]" />,
  },
  {
    title: "Shortlist",
    count: 24,
    icon: <BsFillPersonLinesFill size={24} />,
    color: "text-[#46ad76]",
    bgColor: "bg-[#4AD991]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#46ad76]" />,
  },
  {
    title: "Shortlist Reviewed",
    count: 12,
    icon: <FaReceipt size={24} />,
    color: "text-[#FFD54F]",
    bgColor: "bg-[#FEC53D]/[21%]",
    icon2: <CiClock1 size={26} className="text-[#FFD54F]" />,
  },
];



const PropertyListing = () => {

  return (
    <div className="w-full flex flex-col items-center">
      <StateCards state={state} />

      <div className="w-full flex flex-col absolute top-30">
          <Outlet/>
      </div>

    </div>
  );
};

export default PropertyListing;
