import React from "react";
import "./Navbar.css";
import ReactDOM from "react-dom";
import Profile_Icon from "../../assets/profile_icon.png";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.jsx";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const getPageName = () => {
    switch (location.pathname) {
      case "/dashboard":
        return t("overview");
      case "/transactions":
        return t("transactions");
      case "/accounts":
        return t("accounts");
      default:
        return t("page_not_found");
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
            placeholder={t("search_for_something")}
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
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
