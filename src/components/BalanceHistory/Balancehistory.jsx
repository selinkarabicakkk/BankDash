import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Balancehistory.css";
import { useTranslation } from "react-i18next";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BalanceHistoryChart = () => {
  const { t } = useTranslation();

  const data = {
    labels: [
      t("jul"),
      t("aug"),
      t("sep"),
      t("oct"),
      t("nov"),
      t("dec"),
      t("jan"),
    ],
    datasets: [
      {
        label: t("balance"),
        data: [150, 220, 420, 790, 200, 550, 220],
        borderColor: "rgba(0, 123, 255, 1)",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 800,
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} className="canvas" />
    </div>
  );
};
export default BalanceHistoryChart;
