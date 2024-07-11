import React from "react";
import "./Mycards.css";
import ReactDOM from "react-dom";
import chip_card from "../../assets/chip_card.png";
import black_chip_card from "../../assets/black_chip_card.png";
import bluecard_logo from "../../assets/bluecard_logo.png";
import whitecard_logo from "../../assets/whitecard_logo.png";

const Mycards = ({ cardType }) => {
  const chipImage = cardType === "blue-card" ? chip_card : black_chip_card;
  const chipLogo = cardType === "blue-card" ? bluecard_logo : whitecard_logo;

  return (
    <div className={`card ${cardType}`}>
      <div className="mycards">
        <div className="top">
          <div className="inside-top">
            <div className="card-content">
              <div className="inside-top">
                <div className="balance-section">
                  <span>Balance</span>
                  <br />
                  <span>$5,756</span>
                </div>
                <div>
                  <img src={chipImage} alt="chip-icon" className="chip-icon" />
                </div>
              </div>
              <div className="card-details">
                <span>CARD HOLDER</span>
                <br />
                <span>Eddy Cusuma</span>
                <br />
                <span>VALID THRU</span>
                <br />
                <span>12/22</span>
              </div>
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
    </div>
  );
};

export default Mycards;
