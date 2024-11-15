import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



function SingleBarChart({ data }) {
  return (
    <div className="flex items-center justify-center h-[100%]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          barSize={80}
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <Tooltip cursor={{fill: 'transparent'}} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend layout="horizontal" align="right" verticalAlign="top" className="text-[#000000]"/> */}
          <Bar
            dataKey="sessions"
            fill="#1F36C7"
            activeBar={<Rectangle fill="#1F36C7" stroke="#1F36C7" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SingleBarChart;
