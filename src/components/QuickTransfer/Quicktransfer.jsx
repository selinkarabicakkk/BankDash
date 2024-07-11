import React from "react";
import "./Quicktransfer.css";
import livibator from "../../assets/livibator.png";
import randypress from "../../assets/randypress.png";
import workman from "../../assets/workman.png";

const QuickTransfer = () => {
  return (
    <div className="quick-transfer">
      <div className="people">
        <div className="liviabator">
          <img src={livibator} alt="liviabator" />
          <span>Livia Bator</span>
          <span style={{ color: "#718EBF" }}>CEO</span>
        </div>
        <div>
          <img src={randypress} alt="randypress" />
          <span>Randy Press</span>
          <span style={{ color: "#718EBF" }}>Director</span>
        </div>
        <div>
          <img src={workman} alt="workman" />
          <span>Workman</span>
          <span style={{ color: "#718EBF" }}>Designer</span>
        </div>
      </div>
      <div className="amount_part">
        <div>
          <span style={{ color: "#718EBF" }}>Write Amount</span>
        </div>
        <div className="amount_input">
          <input type="text" value="525.50" readOnly />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
