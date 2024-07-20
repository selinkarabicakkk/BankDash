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
      Debit: 2000,
      Credit: 7560,
    },
    {
      name: t("sun"),
      Debit: 3000,
      Credit: 5400,
    },
    {
      name: t("mon"),
      Debit: 2000,
      Credit: 4200,
    },
    {
      name: t("tue"),
      Debit: 2780,
      Credit: 3100,
    },
    {
      name: t("wed"),
      Debit: 1890,
      Credit: 4300,
    },
    {
      name: t("thu"),
      Debit: 2390,
      Credit: 3800,
    },
    {
      name: t("fri"),
      Debit: 3490,
      Credit: 4300,
    },
  ];

  return (
    <div>
      <h2>{t("debit_credit_overview")}</h2>
      <p>{t("debited_credited_week")}</p>
      <ResponsiveContainer width="100%" height={400}>
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
          <XAxis dataKey="name" />
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
