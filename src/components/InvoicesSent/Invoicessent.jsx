import React from "react";
import "./Invoicessent.css";
import acc_yellowuser from "../../assets/acc_yellowuser.png";
import acc_playstation from "../../assets/acc_playstation.png";
import acc_apple from "../../assets/acc_apple.png";
import acc_person from "../../assets/acc_person.png";

const invoices = [
  {
    name: "Apple Store",
    amount: "$450",
    time: "5h ago",
    color: "#E0F7FA",
    image: acc_apple,
  },
  {
    name: "Michael",
    amount: "$160",
    time: "2 days ago",
    color: "#FFF3E0",
    image: acc_yellowuser,
  },
  {
    name: "Playstation",
    amount: "$1085",
    time: "5 days ago",
    color: "#E3F2FD",
    image: acc_playstation,
  },
  {
    name: "William",
    amount: "$90",
    time: "10 days ago",
    color: "#FFEBEE",
    image: acc_person,
  },
];

const InvoicesSent = () => {
  return (
    <div className="invoices-container">
      <h2>Invoices Sent</h2>
      {invoices.map((invoice, index) => (
        <div
          key={index}
          className="invoice-card"
          style={{ backgroundColor: invoice.color }}
        >
          <div className="invoice-icon">
            <img src={invoice.image} alt={invoice.name} />
          </div>
          <div className="invoice-details">
            <div className="invoice-name">{invoice.name}</div>
            <div className="invoice-time">{invoice.time}</div>
          </div>
          <div className="invoice-amount">{invoice.amount}</div>
        </div>
      ))}
    </div>
  );
};

export default InvoicesSent;
