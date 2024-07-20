import React from "react";
import "./Lasttransaction.css"; // Ensure this CSS file is included for styling
import { useTranslation } from "react-i18next";
import acc_bell from "../../assets/acc_bell.png";
import acc_tool from "../../assets/acc_tool.png";
import acc_person from "../../assets/acc_person.png";

const LastTransaction = () => {
  const { t } = useTranslation();
  const transactionData = [
    {
      id: 1,
      icon: acc_bell,
      descriptionKey: "spotify_subscription",
      categoryKey: "shopping",
      card: "1234 ****",
      date: "25 Jan 2021",
      statusKey: t("pending"),
      amount: -150,
    },
    {
      id: 2,
      icon: acc_tool,
      descriptionKey: t("mobile_services"),
      categoryKey: "service",
      card: "1234 ****",
      date: "25 Jan 2021",
      statusKey: t("completed"),
      amount: -340,
    },
    {
      id: 3,
      icon: acc_person,
      descriptionKey: t("emilly", "wilson"),
      categoryKey: "transfer",
      card: "1234 ****",
      date: "25 Jan 2021",
      statusKey: t("completed"),
      amount: 780,
    },
  ];

  const Transaction = ({
    icon,
    descriptionKey,
    categoryKey,
    card,
    date,
    statusKey,
    amount,
  }) => {
    return (
      <div className="transaction">
        <div className="icon">
          <img src={icon} alt={descriptionKey} />
        </div>

        <div className="description">
          <div>{t(descriptionKey)}</div>
          <div className="date">{date}</div>
        </div>
        <div className="details">
          <span>{t(categoryKey)}</span>
          <span>{card}</span>
          <span>{t(statusKey)}</span>
          <span className={`amount ${amount < 0 ? "negative" : "positive"}`}>
            {amount < 0 ? `-$${Math.abs(amount)}` : `+$${amount}`}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="last-transaction">
      <h2>{t("last_transaction")}</h2>
      {transactionData.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </div>
  );
};

export default LastTransaction;
