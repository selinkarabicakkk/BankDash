import React from "react";
import Mycards from "../../components/MyCards/Mycards.jsx";
import Box from "../../components/Box/Box.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import "./Accounts.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import MyExpense from "../../components/MyExpense/Myexpense.jsx";
import TransactionTable from "../../components/TransactionTable/Transactiontable.jsx";
import acc_balance from "../../assets/acc_balance.png";
import acc_income from "../../assets/acc_income.png";
import acc_expense from "../../assets/acc_expense.png";
import acc_saving from "../../assets/acc_saving.png";
import { blue } from "@mui/material/colors";
import LastTransaction from "../../components/LastTransaction/Lasttransaction.jsx";
import DebitCreditOverview from "../../components/DebitCreditOverview/Debitcreditoverview.jsx";
import acc_yellowuser from "../../assets/acc_yellowuser.png";
import acc_playstation from "../../assets/acc_playstation.png";
import acc_apple from "../../assets/acc_apple.png";
import acc_person from "../../assets/acc_person.png";
import InvoicesSent from "../../components/InvoicesSent/Invoicessent.jsx";
import { useTranslation } from "react-i18next";

const Accounts = () => {
  const { t } = useTranslation();
  return (
    <div className="acc-content">
      <div className="acc-row1">
        <Box className="flex-1">
          {
            <>
              <div className="acc_icon">
                <img src={acc_balance} alt="acc_balance" />{" "}
              </div>
              <div>
                <p>{t("my_balance")}</p>
                <p>$12,750</p>
              </div>
            </>
          }
        </Box>
        <Box className="flex-1">
          {
            <>
              <div className="acc_icon">
                <img src={acc_income} alt="acc_income" />
              </div>
              <div>
                {" "}
                <p>{t("income")}</p>
                <p>$5,600</p>
              </div>
            </>
          }
        </Box>
        <Box className="flex-1">
          {
            <>
              <div className="acc_icon">
                <img src={acc_expense} alt="acc_expense" />
              </div>
              <div>
                {" "}
                <p>{t("expense")}</p>
                <p>$3,460</p>
              </div>
            </>
          }
        </Box>
        <Box className="flex-1">
          {
            <>
              <div className="acc_icon">
                <img src={acc_saving} alt="acc_saving" />
              </div>
              <div>
                <p>{t("total_saving")}</p>
                <p>$7,920</p>
              </div>
            </>
          }
        </Box>
      </div>
      <div className="acc-row2">
        <div className="acc-row2-left flex-2">
          <h2>{t("last_transaction")}</h2>

          <Box>
            <LastTransaction />
          </Box>
        </div>
        <div className="acc-row2-right flex-1">
          <Box> {<Mycards cardType="blue-card" />}</Box>
        </div>
      </div>
      <div className="acc-row3">
        <div className="acc-row3-left flex-2">
          <h2>{t("debit_credit_overview")}</h2>
          <Box>{<DebitCreditOverview />}</Box>
        </div>
        <div className="acc-row3-right flex-1">
          <h2>{t("invoices_sent")}</h2>
          <Box>{<InvoicesSent />}</Box>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
