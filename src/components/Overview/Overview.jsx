import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Mycards from "../MyCards/Mycards.jsx";
import "./Overview.css";
import Box from "../Box/Box.jsx";
import transaction_card from "../../assets/transaction_card.png";
import transaction_pp from "../../assets/transaction_pp.png";
import transaction_dollar from "../../assets/transaction_dollar.png";
import WeeklyActivityChart from "../WeeklyActivityChart/Weeklyactivitychart.jsx";

const Overview = () => {
  return (
    <div className="overview">
      <Navbar />
      <div className="content">
        <div className="first-row">
          <div className="left-side">
            <h2>My Cards</h2>
            <h2 style={{ fontSize: "20px" }}> See All</h2>
            <div className="credit-cards">
              <Box className="flex-1">{<Mycards cardType="blue-card" />}</Box>
              <Box className="flex-1">{<Mycards cardType="white-card" />}</Box>
            </div>
          </div>
          <div>
            <div>
              <h2>Recent Transaction</h2>
            </div>
            <Box className="flex-1">
              {
                <>
                  <div className="recent-transaction">
                    <div className="row">
                      <div className="image-div">
                        <img src={transaction_card} alt="transaction_card" />
                      </div>
                      <div>
                        <p style={{ fontWeight: "500" }}>
                          Deposit from my Card
                        </p>
                        <p style={{ color: "#718EBF" }}>28 January 2021</p>
                      </div>
                      <div>
                        <p style={{ color: "red" }}>-$850</p>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft: "1rem" }}>
                      <div
                        className="image-div"
                        style={{ marginRight: "2rem" }}
                      >
                        <img src={transaction_pp} alt="transaction_pp" />
                      </div>
                      <div>
                        <p style={{ fontWeight: "500" }}>Deposit Paypal</p>
                        <p style={{ color: "#718EBF" }}>25 January 2021</p>
                      </div>
                      <div>
                        <p style={{ color: "#41D4A8" }}>+$2,500</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="image-div" style={{ marginRight: "rem" }}>
                        <img
                          src={transaction_dollar}
                          alt="transaction_dollar"
                        />
                      </div>
                      <div>
                        <p style={{ fontWeight: "500" }}>Jemi Wilson</p>
                        <p style={{ color: "#718EBF" }}>21 January 2021</p>
                      </div>
                      <div>
                        <p style={{ color: "#41D4A8" }}>+$5,400</p>
                      </div>
                    </div>
                  </div>
                </>
              }
            </Box>
          </div>
        </div>

        <div className="second-row">
          <div className="left-side">
            <h2>Weekly Activity</h2>
            <Box className="flex-2">{<WeeklyActivityChart />}</Box>
          </div>
          <div className="right-side">
            <h2>Expense Statistics</h2>
            <Box className="flex-1">{" fsfdfds"}</Box>
          </div>
        </div>

        <div className="third-row">
          <div className="left-side">
            <h2>Quick Transfer</h2>
            <Box className="flex-1">{" fsfdfds"}</Box>
          </div>
          <div className="right-side">
            <h2>Balance History</h2>
            <Box className="flex-2">{" fsfdfds"}</Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
