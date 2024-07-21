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
import "./Debitcreditoverview.css";
import { useTranslation } from "react-i18next";

const DebitCreditOverview = () => {
  const { t } = useTranslation();

  const data = [
    {
      name: t("sat"),
      [t("Debit")]: 2000,
      [t("Credit")]: 7560,
    },
    {
      name: t("sun"),
      [t("Debit")]: 3000,
      [t("Credit")]: 5400,
    },
    {
      name: t("mon"),
      [t("Debit")]: 2000,
      [t("Credit")]: 4200,
    },
    {
      name: t("tue"),
      [t("Debit")]: 2780,
      [t("Credit")]: 3100,
    },
    {
      name: t("wed"),
      [t("Debit")]: 1890,
      [t("Credit")]: 4300,
    },
    {
      name: t("thu"),
      [t("Debit")]: 2390,
      [t("Credit")]: 3800,
    },
    {
      name: t("fri"),
      [t("Debit")]: 3490,
      [t("Credit")]: 4300,
    },
  ];

  return (
    <div className="debitcredit">
      <p>{t("$7,560 Debited & $5,420 Credited in this Week")}</p>
      <ResponsiveContainer width="95%" height={350}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={t("name")} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={t("credit")} fill="#ffbb33" />
          <Bar dataKey={t("debit")} fill="#3366ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DebitCreditOverview;
