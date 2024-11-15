import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function CustomLineChart({ data }) {
     console.log(data)
  return (
    <div className="flex flex-row items-center justify-center h-[85%]">
      {<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dates" />
          <YAxis />
          <Tooltip />
          {/* <Legend layout="horizontal" align="right" verticalAlign="top" /> */}
          {/* {data && data[0]?.weights && <><Line
            type="monotone"
            dataKey="max"
            stroke="#002BC5"
            connectNulls
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#002BC5"
            connectNulls
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="avg"
            stroke="#002BC5"
            connectNulls
            activeDot={{ r: 8 }}
          />
          </>} */}
          {data && <><Line
            type="monotone"
            dataKey="avg"
            stroke="#131921"
            connectNulls
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#00D7C4"
            connectNulls
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            connectNulls
            dataKey="max"
            stroke="#1F36C7"
            activeDot={{ r: 8 }}
          /></>}
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>}
    </div>
  );
}

export default CustomLineChart;
