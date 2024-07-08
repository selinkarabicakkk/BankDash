import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import Profile_Icon from "../../assets/profile_icon.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span>Overview</span>
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
