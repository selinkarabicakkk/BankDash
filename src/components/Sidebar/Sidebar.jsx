import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import ReactDOM from "react-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-house"></i>
            Dashboard
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-money-bill-transfer"></i>
            Transactions
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-user"></i>
            Accounts
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-chart-line"></i>
            Investments
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-credit-card"></i>
            Credit Cards
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-hand-holding-dollar"></i>
            Loans
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-screwdriver-wrench"></i>
            Services
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-star"></i>My Privileges
          </span>
        </li>
        <li className="sidebar-item">
          <span>
            <i class="fa-solid fa-gear"></i>
            Settings
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
