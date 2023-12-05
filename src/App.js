import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import TextUtils from './components/TextUtils';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notification from './components/Notification';

function App() {

  const [mode, setMode] = useState("light");
  const [icon, setIcon] = useState("MoonStarsFill");
  const [filterStyle, setFilter] = useState({ filter: "none" });
  const [styler, setStyler] = useState({ background: "#fff", color: "#212529" });
  const [notify, setNotify] = useState(null);
  const showNotification = (message, type) => {
    setNotify({
      message: message,
      type: type
    });
    setTimeout(() => {
      setNotify(null);
    }, 1500);
  }
  const modeToggler = () => {
    if (mode === "light") {
      setMode("dark");
      setIcon("SunFill");
      setFilter({ filter: "invert(1)" });
      setStyler({ background: "#050530", color: "#fff" });
      document.documentElement.style.background = "#050530";
      showNotification("Dark mode has been enabled...", "success");
    } else {
      setMode("light");
      setIcon("MoonStarsFill");
      setFilter({ filter: "none" });
      setStyler({ background: "#fff", color: "#212529" });
      document.documentElement.style.background = "#fff";
      showNotification("Light mode has been enabled...", "success");
    }
  }

  return (
    <Router>
      <div style={styler}>
        <Navbar logo={logo} mode={mode} icon={icon} filterStyle={filterStyle} modeToggler={modeToggler} />
        <Notification notification={notify} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
            <Route exact path="/" element={<TextUtils mode={mode} showNotification={showNotification} />}>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;