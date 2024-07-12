import React from "react";
import Mycards from "../../components/MyCards/Mycards.jsx";
import Box from "../../components/Box/Box.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Transaction.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MyExpense from "../../components/MyExpense/Myexpense.jsx";

const Transaction = () => {
  return (
    <div className="transaction-page">
      <Sidebar />
      <div className="other-than-sidebar">
        <Navbar />
        <div className="tr-content">
          <div className="tr-top-left">
            <div className="credit-cards">
              <h2>My Cards</h2>
              <h2 style={{ fontSize: "20px" }}> +Add Card</h2>
              <div className="credit-cards">
                <Box className="flex-1">{<Mycards cardType="blue-card" />}</Box>
                <Box className="flex-1">
                  {<Mycards cardType="white-card" />}
                </Box>
              </div>
            </div>

            <div className="tr-top-right">
              <h2>My Expense</h2>
              <Box> {<MyExpense />}</Box>
            </div>
          </div>

          <div className="tr-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
