import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import Overview from "../../components/Overview/Overview.jsx";
import Mycards from "../../components/MyCards/Mycards.jsx";
import Transaction from "../Transaction/Transaction.jsx";
import "./Maindashboard.css";

function MainDashboard() {
  return (
    <>
      <div className="dashboard">
        <Overview />
      </div>
    </>
  );
}

export default MainDashboard;
