import React from "react";
import { useTranslation } from "react-i18next";

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

const WeeklyActivityChart = () => {
  const { t } = useTranslation();

  const data = [
    { name: t("sat"), Deposit: 400, Withdraw: 240 },
    { name: t("sun"), Deposit: 300, Withdraw: 139 },
    { name: t("mon"), Deposit: 200, Withdraw: 980 },
    { name: t("tue"), Deposit: 278, Withdraw: 390 },
    { name: t("wed"), Deposit: 189, Withdraw: 480 },
    { name: t("thu"), Deposit: 239, Withdraw: 380 },
    { name: t("fri"), Deposit: 349, Withdraw: 430 },
  ];

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
        <Bar dataKey={t("deposit")} fill="#1814F3" />
        <Bar dataKey={t("withdraw")} fill="#16DBCC" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyActivityChart;
