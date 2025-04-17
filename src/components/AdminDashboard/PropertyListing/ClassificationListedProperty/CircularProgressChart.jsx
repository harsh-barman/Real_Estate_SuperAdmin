import { useEffect, useState } from "react";

const CircularProgressChart = ({ value = 2000, max = 4000 }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((value / max) * 100);
  }, [value, max]);

  const circumference = 100;
  const strokeWidth = 6;
  const colors = ["#FABE7A","#F6866A","#29CC39","#00A58E"];
  const totalParts = colors.length;
  const segmentAngle = 360 / totalParts;

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg width="160" height="160" viewBox="0 0 100 100">

      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="36" fill="white" stroke="rgba(204, 237, 232, 1)" strokeWidth="0.5" />
      </svg>

        {colors.map((color, index) => {
          const offset = (circumference * (100 - progress)) / 100;
          const startAngle = index * segmentAngle;
          const endAngle = startAngle + segmentAngle - 10;
          const radius = 45;
          const x1 = 50 + radius * Math.cos((Math.PI * startAngle) / 180);
          const y1 = 50 + radius * Math.sin((Math.PI * startAngle) / 180);
          const x2 = 50 + radius * Math.cos((Math.PI * endAngle) / 180);
          const y2 = 50 + radius * Math.sin((Math.PI * endAngle) / 180);

          return (
            <path
              key={index}
              d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
              stroke={color}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              transform="rotate(180 50 50)"
            />
          );
        })}
      </svg>
      <span className="absolute text-black text-2xl font-semibold">{value}</span>
    </div>
  );
};

export default CircularProgressChart
