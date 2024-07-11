import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Overview from "./components/Overview/Overview.jsx";
import Mycards from "./components/MyCards/Mycards.jsx";

function App() {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <Overview />
      </div>
    </>
  );
}

export default App;
