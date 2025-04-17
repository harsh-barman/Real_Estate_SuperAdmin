import React from "react";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { x: 3, y: 40 },
  { x: 4, y: 30 },
  { x: 6, y: 45 },
  { x: 7, y: 60 },
  { x: 8, y: 50 }
];

const SubscriptionGraph = ({ stockColor }) => {

    const gradientId = `colorGradient-${stockColor.replace("#", "")}`;

  return (
    <ResponsiveContainer width="100%" height={150}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stockColor} stopOpacity={0.8} />
            <stop offset="100%" stopColor="white" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey="x" hide />
        <YAxis hide />
        <Area
          type="monotone"
          dataKey="y"
          stroke={stockColor}
          fill={`url(#${gradientId})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SubscriptionGraph;
