import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import { NavLink } from "react-router-dom";

const Sidebar = ({ menuItems }) => {

  return (
    <div className="w-[20%] h-[100vh] bg-white p-4">
      <div className="text-center text-lg py-10">Logo</div>
      <ul className="gap-1 flex flex-col">
        {menuItems.map((item, index) => {
          return (
            <li key={item.title}>
              <NavLink to={item.link} end={item.link === "/superadmin"} key={index} className={({ isActive }) =>
                `flex items-center gap-2 p-3 cursor-pointer relative ${isActive ? "bg-[#bbe3dd] text-[#006355] border-l-4 border-l-[#006355] pl-6 font-bold" : "text-gray-600 text-sm font-[400]"
                }`
              }>
                <Icon icon={item.src} width="24" height="24"/>
                <p>{item.title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
