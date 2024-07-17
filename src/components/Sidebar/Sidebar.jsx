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
          <Link to="/dashboard">
            <i className="fa-solid fa-house"></i>
            Dashboard
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/transactions">
            <i className="fa-solid fa-money-bill-transfer"></i>
            Transactions
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/accounts">
            <i className="fa-solid fa-user"></i>
            Accounts
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/investments">
            <i className="fa-solid fa-chart-line"></i>
            Investments
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/credit-cards">
            <i className="fa-solid fa-credit-card"></i>
            Credit Cards
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/loans">
            <i className="fa-solid fa-hand-holding-dollar"></i>
            Loans
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/services">
            <i className="fa-solid fa-screwdriver-wrench"></i>
            Services
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/privileges">
            <i className="fa-solid fa-star"></i>My Privileges
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings">
            <i className="fa-solid fa-gear"></i>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
