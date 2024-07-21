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
    { name: t("sat"), [t("deposit")]: 400, [t("withdraw")]: 240 },
    { name: t("sun"), [t("deposit")]: 300, [t("withdraw")]: 139 },
    { name: t("mon"), [t("deposit")]: 200, [t("withdraw")]: 980 },
    { name: t("tue"), [t("deposit")]: 278, [t("withdraw")]: 390 },
    { name: t("wed"), [t("deposit")]: 189, [t("withdraw")]: 480 },
    { name: t("thu"), [t("deposit")]: 239, [t("withdraw")]: 380 },
    { name: t("fri"), [t("deposit")]: 349, [t("withdraw")]: 430 },
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
