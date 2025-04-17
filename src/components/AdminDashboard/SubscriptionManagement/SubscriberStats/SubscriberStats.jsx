import { Icon } from "@iconify/react/dist/iconify.js";
import "react-circular-progressbar/dist/styles.css";

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

const SubscriberStats = () => {
  return (
    <div className="flex w-full h-54 gap-4 px-8 py-6 bg-[#FCFCFC] rounded-4xl">
      {/* New Subscriber Card */}
      <Card className="w-[26%]" title={"New Subscriber"} count={200} percentage={8.5} />

      {/* Total Subscriber Card */}
      <Card className="w-[26%]" title={"Total Subscriber"} count={1500} percentage={2.5} />

      {/* Circular Progress Subscriber Card */}
      <CircularSubscriberCard />
    </div>
  );
}

export default SubscriberStats;

const Card = ({ title, count, percentage }) => {
  return (
    <div className="border-2 border-[#000000]/[33%] rounded-2xl flex flex-col">
      <div className="w-full h-[60%] px-4 pt-6 flex flex-col gap-1">
        <h3 className="text-l font-[600] text-[#202224]/[70%]">{title}</h3>
        <p className="text-xl font-bold">{count}</p>
      </div>
      <div className="w-full h-[40%] bg-[#48E13D]/[32%] text-green-600 rounded-b-2xl px-2 flex items-center">
        <div className="px-2 flex text-l gap-1 items-center">
          <Icon icon="ion:trending-up-sharp" width="20" height="20" />
          <p>{percentage}%</p>
        </div>
        <p className="text-[#606060] text-sm font-[500]">Up from last Month</p>
      </div>
    </div>
  )
}

const CircularSubscriberCard = () => {
  const totalSubscribers = 1500;
  const growthPercentage = 8.5;

  return (
    <div className="flex flex-col items-center w-[36%] h-full relative mt-2">
      <h2 className="text-[#636466]/[70%] text-2xl font-bold absolute -top-6">Total Subscriber</h2>
      <div className="relative w-32 h-32 my-4">
      <p className="text-2xl font-[700] absolute z-2 ml-9">{totalSubscribers}</p>
        <CircularProgressbarWithChildren
          value={growthPercentage}
          maxValue={12}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#00A58E",
            trailColor: "white",
            textColor: "#000",
            rotation: 0.15
          })}
        >
          <div className="w-[60%] flex items-center text-sm text-green-600 font-semibold flex-col text-center">
            <p className="ml-1 text-[#008C78] flex items-center gap-1"><Icon icon="ion:trending-up-sharp" width="16" height="16" className="text-[#008C78]"/>{growthPercentage}%</p>
            <p className="text-[#606060] w-fit">Up from last week</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
}