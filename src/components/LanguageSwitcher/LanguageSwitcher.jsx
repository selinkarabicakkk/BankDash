import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css"; // Ensure this CSS file is included for styling
import ukflag from "../../assets/ukflag.svg";
import trflag from "../../assets/trflag.svg";
import cnflag from "../../assets/cnflag.svg";
import arrowIcon from "../../assets/caret_down.png";

const languages = [
  { code: "en", name: "English", flag: ukflag },
  { code: "tr", name: "Türkçe", flag: trflag },
  { code: "cn", name: "中文", flag: cnflag },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-selector">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="current-language"
      >
        <img
          src={currentLanguage.flag}
          alt={currentLanguage.name}
          className="flag"
        />
        <div className="dd_arrow">
          <img
            src={arrowIcon}
            alt="Dropdown arrow"
            className={`arrow ${dropdownOpen ? "open" : ""}`}
          />
        </div>
      </button>
      {dropdownOpen && (
        <div className="dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="dropdown-item"
            >
              <img src={lang.flag} alt={lang.name} className="flag" />
              <span className="dd-name">{lang.name}</span>
              {/* {lang.name} */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
