import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 150 },
    { name: "Mar", value: 200 },
    { name: "Apr", value: 270 },
    { name: "May", value: 340 },
    { name: "Jun", value: 400 },
    { name: "Jul", value: 320 },
    { name: "Aug", value: 450 },
    { name: "Sep", value: 480 },
    { name: "Oct", value: 520 },
    { name: "Nov", value: 580 },
    { name: "Dec", value: 500 },
];

const AnalyticsChart = () => {
    return (
        <div className="w-full px-8 py-6 bg-white shadow-lg rounded-xl">
            <div className="flex justify-between items-center px-4 mb-4">
                <h2 className="text-2xl font-semibold text-[#000000]/[63%]">Analytics</h2>
                <select className="border-1 border-[#E9E9E9] rounded-full px-2 py-1 text-sm text-[#6B7A99] text-center">
                    <option>Months</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
            </div>

            <ResponsiveContainer height={270} className="w-full text-[#000000]/[63%]">
                <BarChart data={data} barSize={8}>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#888", dy: 10 }} />
                    <YAxis axisLine={false} tickLine={false} domain={[0, 600]} ticks={[0, 100, 200, 300, 400, 500, 600]} tick={{ fill: "#888", dx: -10 }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#22C55E" radius={[5, 5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>

            <div className="mt-8 w-[80%] flex items-center justify-self-center justify-between rounded-lg ">
                <p className="bg-[#CCEDE8] text-[#00A58E] border-1 border-[#CCEDE8] text-3xl font-semibold px-6 py-3 rounded-l-md">1230</p>
                <div className="border-2 flex w-full border-[#000000]/[20%] rounded-r-lg justify-around py-2 items-center border-l-0">
                    <p className="text-[#000000] text-xl font-[600]">User Not Subscribed Yet</p>
                    <Icon icon="icomoon-free:arrow-left2" width="42" height="42" className="text-[#CCEDE8] border-2 rounded-full rotate-135 p-1" />
                </div>

            </div>
        </div>
    );
};

export default AnalyticsChart;
