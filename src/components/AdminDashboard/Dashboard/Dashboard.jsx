import { Outlet } from "react-router-dom";


const Dashboard = ({handleHeading}) => {

  return (
    <div className="w-full mb-10">
      <div className="w-full">
        <Outlet handleHeading={handleHeading}/>
      </div>
    </div>
  );
};

export default Dashboard;



