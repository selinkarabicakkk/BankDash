import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import Profile_Icon from "../../assets/profile_icon.png";
import { useLocation } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Overview";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      default:
        return "Page";
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>{getPageName()}</span>
      </div>
      <div className="navbar-right">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search for something"
          />
          <i class="fa-solid fa-magnifying-glass"></i>{" "}
        </div>
        <div className="navbar-icon-settings">
          <i class="fa-solid fa-gear"></i>
        </div>
        <div className="navbar-icon-notification">
          <i class="fa-regular fa-bell"></i>
        </div>
        <div className="profile-picture">
          <img src={Profile_Icon} alt="Profile Icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
