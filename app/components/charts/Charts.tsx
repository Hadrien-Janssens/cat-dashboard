"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Page A", uv: 86 },
  { name: "Page A", uv: 98 },
  { name: "Page A", uv: 103 },
  { name: "Page A", uv: 120 },
  { name: "Page A", uv: 130 },
  { name: "Page A", uv: 150 },
  { name: "Page A", uv: 200 },
  { name: "Page A", uv: 300 },
];

const Charts = () => {
  return (
    <div className="m-5">
      <div className="border p-5 my-5">
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <XAxis />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Charts;
