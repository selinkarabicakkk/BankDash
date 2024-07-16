import React from "react";
import Mycards from "../../components/MyCards/Mycards.jsx";
import Box from "../../components/Box/Box.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Transaction.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MyExpense from "../../components/MyExpense/Myexpense.jsx";
import TransactionTable from "../../components/TransactionTable/Transactiontable.jsx";
import pagination from "../../assets/recent_tr_pagination.png";

const Transaction = () => {
  return (
    <div className="transaction-page">
      <Sidebar />
      <div className="other-than-sidebar">
        <Navbar />
        <div className="tr-content">
          <div className="tr-top">
            <div className="tr-top-left">
              <div className="captions">
                <h2>My Cards</h2>
                <h2>+Add Card</h2>
              </div>
              <div className="credit-cards">
                <Box className="flex-1">{<Mycards cardType="blue-card" />}</Box>
                <Box className="flex-1">
                  {<Mycards cardType="white-card" />}
                </Box>
              </div>
            </div>
            <div className="tr-top-right">
              <h2 style={{ color: "#343C6A" }}>My Expense</h2>
              <Box className="flex-1"> {<MyExpense />}</Box>
            </div>
          </div>

          <div className="tr-bottom">
            <TransactionTable />
            <div className="pagination">
              <img src={pagination} alt="pagination" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
