import React from "react";
import "./Transactiontable.css";

const transactions = [
  {
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: -2500,
    receipt: "Download",
  },
  {
    description: "Freepik Sales",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: 750,
    receipt: "Download",
  },
  {
    description: "Mobile Service",
    transactionId: "#12548796",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: -150,
    receipt: "Download",
  },
  {
    description: "Wilson",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03:29 PM",
    amount: -1050,
    receipt: "Download",
  },
  {
    description: "Emilly",
    transactionId: "#12548796",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10:40 PM",
    amount: 840,
    receipt: "Download",
  },
];

const TransactionTable = () => {
  return (
    <div className="transaction-table-container">
      <h2 style={{ color: "#343C6A" }}>Recent Transactions</h2>
      <div className="tabs">
        <button className="active-tab">All Transactions</button>
        <button>Income</button>
        <button>Expense</button>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Transaction ID</th>
            <th>Type</th>
            <th>Card</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Receipt</th>
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
