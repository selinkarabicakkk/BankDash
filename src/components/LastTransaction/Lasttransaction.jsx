import React from "react";
import "./Lasttransaction.css"; // Ensure this CSS file is included for styling

const transactions = [
  {
    id: 1,
    icon: "spotify-icon",
    description: "Spotify Subscription",
    category: "Shopping",
    card: "1234 ****",
    date: "25 Jan 2021",
    status: "Pending",
    amount: -150,
  },
  {
    id: 2,
    icon: "mobile-icon",
    description: "Mobile Service",
    category: "Service",
    card: "1234 ****",
    date: "25 Jan 2021",
    status: "Completed",
    amount: -340,
  },
  {
    id: 3,
    icon: "transfer-icon",
    description: "Emilly Wilson",
    category: "Transfer",
    card: "1234 ****",
    date: "25 Jan 2021",
    status: "Completed",
    amount: 780,
  },
];

const Transaction = ({
  icon,
  description,
  category,
  card,
  date,
  status,
  amount,
}) => {
  return (
    <div className="transaction">
      <div className={`icon ${icon}`}></div>
      <div className="description">
        <div>{description}</div>
        <div className="date">{date}</div>
      </div>
      <div className="details">
        <span>{category}</span>
        <span>{card}</span>
        <span>{status}</span>
        <span className={`amount ${amount < 0 ? "negative" : "positive"}`}>
          {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}
        </span>
      </div>
    </div>
  );
};

const LastTransaction = () => {
  return (
    <div className="last-transaction">
      <h2>Last Transaction</h2>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </div>
  );
};

export default LastTransaction;
