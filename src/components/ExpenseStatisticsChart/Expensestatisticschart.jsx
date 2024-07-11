import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#2F3E9E" },
  { name: "Bill Expense", value: 15, color: "#FF8042" },
  { name: "Investment", value: 20, color: "#FF00FF" },
  { name: "Others", value: 35, color: "#1814F3" },
];

const ExpenseStatisticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label={({ name, value }) => `${value}% ${name}`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpenseStatisticsChart;
