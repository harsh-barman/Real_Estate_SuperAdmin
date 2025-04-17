import React from 'react';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/AdminDashboard/Dashboard/Dashboard';
import PropertyListing from './components/AdminDashboard/PropertyListing/PropertyListing';
import RevenueModel from './components/AdminDashboard/RevenueModel/RevenueModel';
import UserManagement from './components/AdminDashboard/UserManagement/UserManagement';
import SubscriptionManagement from './components/AdminDashboard/SubscriptionManagement/SubscriptionManagement';
import Advertisements from './components/AdminDashboard/Advertisements/Advertisements';
import ComplaintsManagements from './components/AdminDashboard/ComplaintsManagements/ComplaintsManagements';
import AppLayout from './components/AppLayout/AppLayout';
import Admin from './components/Admin/Admin';
import AdminLogin from './components/Admin/AdminLogin/AdminLogin';
import OTPVerification from './components/Admin/OTPVerification/OTPVerification';
import HomeDashboard from './components/AdminDashboard/Dashboard/HomeDashboard/HomeDashboard';
import Customers from './components/AdminDashboard/Dashboard/Customers/Customers';
import AgentsBuilders from './components/AdminDashboard/Dashboard/AgentsBuilders/AgentsBuilders';
import { Icon } from '@iconify/react/dist/iconify.js';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import RequestPropertyList from './components/AdminDashboard/PropertyListing/RequestPropertyList/RequestPropertyList';
import PropertiesListVerification from './components/AdminDashboard/PropertyListing/VerificationRequest/PropertiesListVerification';
import PropertyDetails from './components/AdminDashboard/PropertyDetails/PropertyDetails';
import AdvertisementDetails from './components/AdminDashboard/Advertisements/AdvertisementDetails/AdvertisementDetails';
import AdvertisementDashboard from './components/AdminDashboard/Advertisements/AdvertisementDashboard/AdvertisementDashboard';
import EditSubscriptionManagement from './components/AdminDashboard/SubscriptionManagement/EditSubscriptionManagement/EditSubscriptionManagement';
import SubscriptionDashboard from './components/AdminDashboard/SubscriptionManagement/SubscriptionDashboard/SubscriptionDashboard';
import RevenueModelDashboard from './components/AdminDashboard/RevenueModel/RevenueModelDashboard/RevenueModelDashboard';
import TransationsDetails from './components/AdminDashboard/RevenueModel/TransationsDetails/TransationsDetails';
import TransactionsHistory from './components/AdminDashboard/RevenueModel/TransactionsHistory/TransactionsHistory';
import ComplaintsManagementsDashboard from './components/AdminDashboard/ComplaintsManagements/ComplaintsManagementsDashboard/ComplaintsManagementsDashboard';
import Complaint from './components/AdminDashboard/ComplaintsManagements/Complaint/Complaint';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import CreatePassword from './pages/Password/CreatePassword/CreatePassword';
import SignUpSuccessfully from './pages/SignUp/SignUpSuccessfully/SignUpSuccessfully';
import ForgotPassword from './pages/Password/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/Password/ResetPassword/ResetPassword';
import ResetSuccessfully from './pages/Password/ResetPassword/ResetSuccessfully/ResetSuccessfully';
import Buyers from './components/AdminDashboard/UserManagement/Buyers/Buyers';
import Seller from './components/AdminDashboard/UserManagement/Seller/Seller';
import SellerDashboard from './components/AdminDashboard/UserManagement/Seller/SellerDashboard/SellerDashboard';
import RecentRegistered from './components/AdminDashboard/UserManagement/RecentRegistered/RecentRegisteredSeller';
import RecentRegistrations from './components/AdminDashboard/UserManagement/RecentRegistered/RecentRegistrations/RecentRegistrations';
import SellersDetails from './components/AdminDashboard/UserManagement/Seller/SellersDetails/SellersDetails';

const agentStats = [
  {
    title: "New Agents",
    count: "10",
    message: "Down from yesterday",
    icon: <Icon icon="healthicons:city-worker" width="28" height="28" />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>2.3%</p>
      </div>
    ),
    color: "text-[#FF8D80]",
    bgColor: "bg-[#FF8D80]/[21%]"
  },
  {
    title: "Total Agents",
    count: "900",
    message: "Last updated on 12 PM",
    icon: <Icon icon="solar:users-group-rounded-bold-duotone" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>8.5%</p>
      </div>
    ),
    color: "text-[#8A3DFE]",
    bgColor: "bg-[#8280FF]/[33%]",
  },
  {
    title: "Active Agents",
    count: "742",
    message: "Down from yesterday",
    icon: <BsFillPersonLinesFill size={24} />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>4.3%</p>
      </div>
    ),
    color: "text-[#00A58E]",
    bgColor: "bg-[#00A58E]/[33%]",
  },
  {
    title: "Top Agency",
    count: "The Estate",
    message: "Last 7 days",
    icon: <Icon icon="solar:medal-ribbon-star-outline" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>1.3%</p>
      </div>
    ),
    color: "text-[#F6AD04]",
    bgColor: "bg-[#F6AD04]/[30%]",
  },
];

const builderStats = [
  {
    title: "New Builder",
    count: "10",
    message: "Down from yesterday",
    icon: <Icon icon="healthicons:city-worker" width="28" height="28" />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>2.3%</p>
      </div>
    ),
    color: "text-[#FF8D80]",
    bgColor: "bg-[#FF8D80]/[21%]"
  },
  {
    title: "Total Builders",
    count: "1100",
    message: "Last updated on 12 PM",
    icon: <Icon icon="solar:users-group-rounded-bold-duotone" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>8.5%</p>
      </div>
    ),
    color: "text-[#8A3DFE]",
    bgColor: "bg-[#8280FF]/[33%]",
  },
  {
    title: "Active Builders",
    count: "1000",
    message: "Down from yesterday",
    icon: <BsFillPersonLinesFill size={24} />,
    icon2: (
      <div className="flex text-[#F93C65] gap-1 items-center">
        <Icon icon="ion:trending-down-sharp" width="20" height="20" />
        <p>4.3%</p>
      </div>
    ),
    color: "text-[#00A58E]",
    bgColor: "bg-[#00A58E]/[33%]",
  },
  {
    title: "Top Builder",
    count: "Hiranandani",
    message: "Last 7 days",
    icon: <Icon icon="solar:medal-ribbon-star-outline" width="24" height="24" />,
    icon2: (
      <div className="flex text-[#00B69B] gap-1 items-center">
        <Icon icon="ion:trending-up-sharp" width="20" height="20" />
        <p>1.3%</p>
      </div>
    ),
    color: "text-[#F6AD04]",
    bgColor: "bg-[#F6AD04]/[30%]",
  },
];


const propertyList = [
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Residential Property",
  },
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Commercial Property",
  },
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Rental Property",
  },
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Land Property",
  },
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Commercial Property",
  },
  {
    propertyName: "Property Name",
    location: "Pune, Maharashtra",
    amount: "1.5cr-2.5cr",
    image:
      "https://s3-alpha-sig.figma.com/img/c823/97c0/028bdb66badfd481a5b138197f61744f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IJbRf2AjBukSQNNPKviSKeFdzsT6nA9S7LEcD~~1NTVGI1PO-sqcg5ItrydWIgIYQq7O9PFW4IbfXhkmFD4DhIhN7xjBuH~WNWorKD7J4UrImyW0jn3DSC3rAjP2xWQF5iKhDBhTvDqNTgh8-9HOiGbC9Afky5~NDbK0rP27nhlXPiksGxd60Sz1gPz4k2GmlIW2CfYt1Y~aBn4lw~saxmc8WC6IIkwDyJuLdUZgjjtZEM57fEyPDl9tT~gOx0mKAVMBdBKtDEk5HRmEMjLxAz3KPYNpN-IdmvvRJQIBCxuUe1umxZnSuF9xU99X5oQQ6C8nV7dPNByEyfeqyzJYAg__",
    dayTime: "Feb 25, 2025 19:28",
    type: "Land Property",
  },
];


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <SignUp />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/createpassword",
          element: <CreatePassword />
        },
        {
          path: "/signupsuccessfully",
          element: <SignUpSuccessfully />
        },
        {
          path: "/forgotpassword",
          element: <ForgotPassword />
        },
        {
          path: "/resetpassword",
          element: <ResetPassword />
        },
        {
          path: "/resetsuccessfully",
          element: <ResetSuccessfully />
        },
        {
          path: "/",
          element: <Login />
        },
      ]
    },
    {
      path: "/superadmin",
      element: <AdminDashboard />,
      children: [
        {
          path: '',
          element: <Dashboard />,
          children: [
            {
              path: '',
              element: <HomeDashboard />
            },
            {
              path: 'customers',
              element: <Customers />
            },
            {
              path: 'agents',
              element: <AgentsBuilders cardTitle={"Agent’s Classification Overview"} state={agentStats} />
            },
            {
              path: 'builders',
              element: <AgentsBuilders cardTitle={"Builder's Project Classification Overview"} state={builderStats} />
            },
          ]
        },
        {
          path: 'usermanagement',
          element: <UserManagement />,
          children: [
            {
              path: "",
              element: <Buyers />
            },
            {
              path: "seller",
              element: <Seller />,
              children: [
                {
                  path: "",
                  element: <SellerDashboard />
                },
                {
                  path: "recentregistrations",
                  element: <RecentRegistrations/>
                },
                {
                  path: "sellersdetails",
                  element: <SellersDetails/>
                },
              ]
            }
          ]
        },
        {
          path: "propertylisting",
          element: <PropertyListing />,
          children: [
            {
              path: "",
              element: <RequestPropertyList propertyList={propertyList}/>
            },
            {
              path: "propertyrequestlist",
              element: <PropertiesListVerification propertyList={propertyList} value={propertyList.length} />
            },
          ]
        },
        {
          path: "propertydetails",
          element: <PropertyDetails />
        },
        {
          path: "revenuemodel",
          element: <RevenueModel />,
          children: [
            {
              path: "",
              element: <RevenueModelDashboard />
            },
            {
              path: "transactions",
              element: <TransactionsHistory />
            },
            {
              path: "transactiondetails",
              element: <TransationsDetails />
            },
          ]
        },
        {
          path: "subscriptionmanagement",
          element: <SubscriptionManagement />,
          children: [
            {
              path:"",
              element: <SubscriptionDashboard/>
            },
            {
              path:"edit",
              element: <EditSubscriptionManagement />
            },
          ]
        },
        {
          path: "advertisements",
          element: <Advertisements />,
          children: [
            {
              path: "",
              element: <AdvertisementDashboard />
            },
            {
              path: "approvedlist",
              element: <AdvertisementDetails />
            },
          ]
        },
        {
          path: "complaintsmanagement",
          element: <ComplaintsManagements />,
          children: [
            {
              path: "",
              element: <ComplaintsManagementsDashboard />
            },
            {
              path: "complaint",
              element: <Complaint />
            }
          ]
        },

      ]
    },
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "/admin",
          element: <AdminLogin />
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />
        },
        {
          path: "otpverification",
          element: <OTPVerification />
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


