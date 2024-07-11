import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Sat", Deposit: 400, Withdraw: 240 },
  { name: "Sun", Deposit: 300, Withdraw: 139 },
  { name: "Mon", Deposit: 200, Withdraw: 980 },
  { name: "Tue", Deposit: 278, Withdraw: 390 },
  { name: "Wed", Deposit: 189, Withdraw: 480 },
  { name: "Thu", Deposit: 239, Withdraw: 380 },
  { name: "Fri", Deposit: 349, Withdraw: 430 },
];

const WeeklyActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Deposit" fill="#1814F3" />
        <Bar dataKey="Withdraw" fill="#16DBCC" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyActivityChart;
