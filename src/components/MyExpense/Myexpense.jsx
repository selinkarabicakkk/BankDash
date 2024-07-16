import React from "react";
import "./Myexpense.css";
import ReactDOM from "react-dom";
import { Box } from "../Box/Box.jsx";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyExpenseChart = () => {
  const data = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Expenses",
        data: [7500, 10000, 8500, 4500, 12500, 6500],
        backgroundColor: [
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
          "#EDF0F7",
          "#16DBCC",
          "#EDF0F7",
        ],
        borderColor: [
          "rgba(0, 123, 255, 1)",
          "rgba(0, 123, 255, 1)",
          "rgba(0, 123, 255, 1)",
          "rgba(0, 123, 255, 1)",
          "rgba(0, 255, 255, 1)",
          "rgba(0, 123, 255, 1)",
        ],
        borderRadius: 15,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyExpenseChart;
