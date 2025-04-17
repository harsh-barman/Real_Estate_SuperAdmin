import React from "react";
import CircularProgressChart from "./CircularProgressChart";

const property = [
  { type: "Rental property", value: "800", color1: "#FABE7A", color2: "#FCDEBC" },
  { type: "Residential property", value: "300", color1: "#F6866A", color2: "#FAC2B4" },
  { type: "Land property", value: "500", color1: "#29CC39", color2: "#93E59B" },
  { type: "Commercial property", value: "400", color1: "#00A58E", color2: "#7FD1C6" },
];

const ClassificationListedProperty = () => {
  return (
    <div className="w-full bg-white my-8 px-6 py-4 flex flex-col">
      <p className="text-xl font-bold">Classification of Listed Property</p>

      <div className="flex px-4 py-8">
        <ul className="w-4/6 grid grid-cols-2 gap-10">
          {property.map((current, index) => (
            <li key={index} className="border rounded-lg p-4 shadow-sm" style={{ borderColor: current.color2 }}>
              <p className="text-lg font-bold text-black">{current.type}</p>

              <div className="flex gap-6 mt-2">
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-4 h-4" style={{ backgroundColor: current.color1 }}></div>
                  <p className="text-sm">Verified Property</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="rounded-full w-4 h-4" style={{ backgroundColor: current.color2 }}></div>
                  <p className="text-sm">Unverified Property</p>
                </div>
              </div>

              <div className="w-[90%] h-6 mt-6 rounded-2xl relative justify-self-center">
                <div style={{ backgroundColor: current.color1 }} className="w-6/10 h-6 rounded-2xl z-2 absolute"></div>
                <div style={{ backgroundColor: current.color2 }} className="w-full top-0 h-6 rounded-2xl z-1 absolute"></div>
              </div>
              <p className="pl-20 text-sm">{current.value}</p>
            </li>
          ))}
        </ul>

        <div className="w-2/6 flex flex-col justify-center items-center">
          <p className="h-1.5/6 text-2xl font-[600]">Total Property</p>

          <div className="h-4.5/6 mt-10">
            <CircularProgressChart />
          </div>
        </div>
      </div>

    </div>
  );
};




export default ClassificationListedProperty;
