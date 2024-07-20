import React from "react";
import "./Transactiontable.css";
import { useTranslation } from "react-i18next";

const TransactionTable = () => {
  const { t } = useTranslation();
  const transactions = [
    {
      description: t("spotify_subscription"),
      transactionId: "#12548796",
      type: t("shopping"),
      card: "1234 ****",
      date: "28 Jan, 12:30 AM",
      amount: -2500,
      receipt: t("download"),
    },
    {
      description: t("freepik_sales"),
      transactionId: "#12548796",
      type: t("transfer"),
      card: "1234 ****",
      date: "25 Jan, 10:40 PM",
      amount: 750,
      receipt: t("download"),
    },
    {
      description: t("mobile_services"),
      transactionId: "#12548796",
      type: t("service"),
      card: "1234 ****",
      date: "20 Jan, 10:40 PM",
      amount: -150,
      receipt: t("download"),
    },
    {
      description: t("wilson"),
      transactionId: "#12548796",
      type: t("transfer"),
      card: "1234 ****",
      date: "15 Jan, 03:29 PM",
      amount: -1050,
      receipt: t("download"),
    },
    {
      description: t("emilly"),
      transactionId: "#12548796",
      type: t("transfer"),
      card: "1234 ****",
      date: "14 Jan, 10:40 PM",
      amount: 840,
      receipt: t("download"),
    },
  ];

  return (
    <div className="transaction-table-container">
      <h2 style={{ color: "#343C6A" }}>{t("recent_transactions")}</h2>
      <div className="tabs">
        <button className="active-tab">{t("all_transactions")}</button>
        <button>{t("income")}</button>
        <button>{t("expense")}</button>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>{t("description")}</th>
            <th>{t("transaction_id")}</th>
            <th>{t("type")}</th>
            <th>{t("card")}</th>
            <th>{t("date")}</th>
            <th>{t("amount")}</th>
            <th>{t("receipt")}</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className="description-container">
                  <span
                    className={transaction.amount < 0 ? "icon-down" : "icon-up"}
                  ></span>
                  {transaction.description}
                </div>
              </td>
              <td>{transaction.transactionId}</td>
              <td>{transaction.type}</td>
              <td>{transaction.card}</td>
              <td>{transaction.date}</td>
              <td className={transaction.amount < 0 ? "negative" : "positive"}>
                {transaction.amount < 0
                  ? `-$${Math.abs(transaction.amount)}`
                  : `+$${transaction.amount}`}
              </td>
              <td>
                <button className="download-btn">{transaction.receipt}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
