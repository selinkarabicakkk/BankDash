import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Mycards from "./components/MyCards/Mycards.jsx";
import Transaction from "./pages/Transaction/Transaction.jsx";
import MainDashboard from "./pages/MainDashboard/Maindashboard.jsx";
import Accounts from "./pages/Accounts/Accounts.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher.jsx";

function App() {
  return (
    <Router>
      <div className="whole-page">
        <Sidebar />
        <div>
          <Navbar />
          {/* <MainDashboard /> */}
          <Routes>
            <Route exact path="/dashboard" element={<MainDashboard />} />
            <Route exact path="/transactions" element={<Transaction />} />
            <Route exact path="/accounts" element={<Accounts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
