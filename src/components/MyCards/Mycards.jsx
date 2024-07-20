import React from "react";
import "./Mycards.css";
import chip_card from "../../assets/chip_card.png";
import black_chip_card from "../../assets/black_chip_card.png";
import bluecard_logo from "../../assets/bluecard_logo.png";
import whitecard_logo from "../../assets/whitecard_logo.png";
import { useTranslation } from "react-i18next";

const Mycards = ({ cardType }) => {
  const chipImage = cardType === "blue-card" ? chip_card : black_chip_card;
  const chipLogo = cardType === "blue-card" ? bluecard_logo : whitecard_logo;
  const { t } = useTranslation();

  return (
    <div className={`card ${cardType}`}>
      <div className="top">
        <div className="inside-top">
          <div className="balance-section">
            <span>{t("balance")}</span>
            <br />
            <span>$5,756</span>
          </div>
          <div>
            <img src={chipImage} alt="chip-icon" className="chip-icon" />
          </div>
        </div>
        <div className="card-details">
          <div className="card-holder">
            <span>{t("card_holder")}</span>
            <span>{t("eddy_cusuma")}</span>
          </div>
          <div className="valid-thru">
            <span>{t("valid_thru")}</span>
            <span>12/22</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="inside-bottom">
          <span>3778 **** **** 1234</span>
          <img src={chipLogo} alt="chip_logo" className="chip-logo" />
        </div>
      </div>
    </div>
  );
};

export default Mycards;
