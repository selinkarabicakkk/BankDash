import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from "react-i18next";

const ExpenseStatisticsChart = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("entertainment"), value: 30, color: "#2F3E9E" },
    { name: t("bill_expense"), value: 15, color: "#FF8042" },
    { name: t("investment"), value: 20, color: "#FF00FF" },
    { name: t("others"), value: 35, color: "#1814F3" },
  ];

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
