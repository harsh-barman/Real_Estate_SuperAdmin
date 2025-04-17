import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { IoPersonSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";



const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <header 
    className={`fixed w-full h-18 flex items-center justify-between px-28 border-b border-[#E8EDF1]/20 z-10 transition-all duration-300 ${scrolled ? "bg-white text-[#969696] shadow-md" : "bg-transparent text-[#E4E4E4]"}`}>
      <a href="/">
        <h1 className="bg-[#00A58E] text-white text-l px-14 py-2 rounded text-center">
          Logo
        </h1>
      </a>

      <div className="w-[60%] flex justify-evenly">
        <div className="flex items-center gap-4">
          <SlLocationPin size={24} />
          <p className="text-lg font-[600]">Pune</p>
        </div>

        <ul className="flex items-center font-[600] text-lg">
          <li className="border-l-2 px-8">Buy</li>
          <li className="border-l-2 px-8">Rent</li>
          <li className="border-l-2 px-8">Project</li>
          <li className="border-l-2 px-8">Agent</li>
          <li className="border-x-2 px-8">Services</li>
        </ul>
      </div>

      <div className="w-[18%] flex items-center justify-between">
        <div className="w-[15%] relative items-center">
          <Icon icon="twemoji:bell" className="size-7" />
          <GoDotFill size={24} color="red" className="absolute -top-1 right-1" />
        </div>

        <div className="flex items-center gap-4">
          <IoPersonSharp
            className="text-white bg-[#00A58E] size-8 p-2 rounded-full "
          />
          <p className={` text-l font-[600] ${scroll ? "text-[#B0B0B0]" : "text-[#efefef]"}`}>LogIn/Register</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
