import React from "react";
import { useNavigate } from "react-router-dom";

const transactionsHistory = [
  {date: "22/11/24", name: "Damon", type: "Standard", amount: "299", action: ""},
  {date: "22/11/24", name: "Lily", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Adam", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Basic", amount: "99", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  {date: "22/11/24", name: "Nora", type: "Premium", amount: "499", action: ""},
  
]

const TransactionsHistoryTable = ({value}) => {

  let navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/superadmin/revenuemodel/transactiondetails`);
  }

  return (
    <table className="mt-10">
      <thead className="bg-[#E6F6F4]">
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          transactionsHistory.slice(0,value).map((current, index) => <tr key={index}>
          <td>{current.date}</td>
          <td>{current.name}</td>
          <td>{current.type}</td>
          <td>{current.amount}</td>
          <td className="text-[#00A58E] cursor-default" onClick={handleDetails}>View Details</td>
        </tr>)
        }
        
      </tbody>
    </table>
  );
};

export default TransactionsHistoryTable;
