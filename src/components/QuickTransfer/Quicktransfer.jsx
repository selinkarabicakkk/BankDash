import React from "react";
import "./Quicktransfer.css";
import livibator from "../../assets/livibator.png";
import randypress from "../../assets/randypress.png";
import workman from "../../assets/workman.png";
import kite from "../../assets/kite.png";
import { useTranslation } from "react-i18next";

const QuickTransfer = () => {
  const { t } = useTranslation();
  return (
    <div className="quick-transfer">
      <div className="people">
        <div className="person">
          <img src={livibator} alt="liviabator" />
          <span>{t("livia_bator")}</span>
          <span style={{ color: "#718EBF" }}>CEO</span>
        </div>
        <div className="person">
          <img src={randypress} alt="randypress" />
          <span>{t("randy_press")}</span>
          <span style={{ color: "#718EBF" }}>Director</span>
        </div>
        <div className="person">
          <img src={workman} alt="workman" />
          <span>{t("workman")}</span>
          <span style={{ color: "#718EBF" }}>Designer</span>
        </div>
      </div>
      <div className="amount-part">
        <span style={{ color: "#718EBF" }}>{t("write_amount")}</span>
        <div className="amount-input">
          <input type="text" value="525.50" readOnly />
          <button>
            {t("send")}
            <img src={kite} alt="kite" className="kite" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
