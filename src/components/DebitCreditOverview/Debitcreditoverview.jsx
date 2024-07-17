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

const data = [
  {
    name: "Sat",
    Debit: 2000,
    Credit: 7560,
  },
  {
    name: "Sun",
    Debit: 3000,
    Credit: 5400,
  },
  {
    name: "Mon",
    Debit: 2000,
    Credit: 4200,
  },
  {
    name: "Tue",
    Debit: 2780,
    Credit: 3100,
  },
  {
    name: "Wed",
    Debit: 1890,
    Credit: 4300,
  },
  {
    name: "Thu",
    Debit: 2390,
    Credit: 3800,
  },
  {
    name: "Fri",
    Debit: 3490,
    Credit: 4300,
  },
];

const DebitCreditOverview = () => {
  return (
    <div>
      <h2>Debit & Credit Overview</h2>
      <p>$7,560 Debited & $5,420 Credited in this Week</p>
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
          <Bar dataKey="Credit" fill="#ffbb33" />
          <Bar dataKey="Debit" fill="#3366ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DebitCreditOverview;
