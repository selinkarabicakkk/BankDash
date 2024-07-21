import React from "react";
import "./Invoicessent.css";
import acc_yellowuser from "../../assets/acc_yellowuser.png";
import acc_playstation from "../../assets/acc_playstation.png";
import acc_apple from "../../assets/acc_apple.png";
import acc_person from "../../assets/acc_person.png";
import { useTranslation } from "react-i18next";

const InvoicesSent = () => {
  const { t } = useTranslation();

  const invoices = [
    {
      name: t("apple_store"),
      amount: "$450",
      time: t("time_5h_ago"),
      color: "#E0F7FA",
      image: acc_apple,
    },
    {
      name: t("michael"),
      amount: "$160",
      time: t("time_2d_ago"),
      color: "#FFF3E0",
      image: acc_yellowuser,
    },
    {
      name: t("playstation"),
      amount: "$1085",
      time: t("time_2d_ago"),
      color: "#E3F2FD",
      image: acc_playstation,
    },
    {
      name: t("william"),
      amount: "$90",
      time: t("time_10d_ago"),
      color: "#FFEBEE",
      image: acc_person,
    },
  ];

  return (
    <div className="invoices-container">
      {invoices.map((invoice, index) => (
        <div key={index} className="invoice-card">
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
