import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li className="sidebar-item">
          <Link to="/dashboard">
            <i className="fa-solid fa-house"></i>
            {t("dashboard")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transactions">
            <i className="fa-solid fa-money-bill-transfer"></i>
            {t("transactions")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/accounts">
            <i className="fa-solid fa-user"></i>
            {t("accounts")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/investments">
            <i className="fa-solid fa-chart-line"></i>
            {t("investments")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/credit-cards">
            <i className="fa-solid fa-credit-card"></i>
            {t("credit_cards")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/loans">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            {t("loans")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/services">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            {t("services")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/privileges">
            <i className="fa-solid fa-star"></i>
            {t("my_privileges")}
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings">
            <i className="fa-solid fa-gear"></i>
            {t("setting")}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
