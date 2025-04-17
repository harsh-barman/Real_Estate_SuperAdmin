import { useState } from "react";
import { assets } from "../../assets/assets";

// const heading = [
//     { title: "Hello, Super Admin", back: 0 },
//     { title: "User Management-Buyers", back: 0 },
//     { title: "Property Listing", back: 0 },
//     { title: "Revenue Model", back: 0 },
//     { title: "Subscription Managements", back: 0 },
//     { title: "Advertisements", back: 0 },
//     { title: "Complaints Management", back: 0 },
//     {title: "Property Details", back: 1}, 
//     {title: "Transaction History", back: 1},
//     {title: "Transaction Details", back: 1},  
// ];

const menuItems = [
  { name: "Dashboard", src: assets.dashboard, link: "/superadmin", page: 0, sidebar: 1 },
  {
    name: "User Management",
    src: assets.user,
    link: "usermanagement",
    page: 1,
    sidebar: 1
  },
  {
    name: "Property Listing",
    src: assets.clipboard,
    link: "propertylisting",
    page: 2,
    sidebar: 1
  },
  {
    name: "Revenue Model",
    src: assets.revenue,
    link: "revenuemodel",
    page: 3,
    sidebar: 1
  },
  {
    name: "Subscription Management",
    src: assets.revenue,
    link: "subscriptionmanagement",
    page: 4,
    sidebar: 1
  },
  {
    name: "Advertisements",
    src: assets.megaphone,
    link: "advertisements",
    page: 5,
    sidebar: 1
  },
  {
    name: "Complaints Managements",
    src: assets.handshake,
    link: "complaintsmanagements",
    page: 6,
    sidebar: 1
  },
];

const useSuperAdmin = () => {
  

  const handleHeading = (title, back) => {
    heading = {
      ...heading, title: title,
      back: back
    }
  }

  return { heading, handleHeading };
}

export default useSuperAdmin;
