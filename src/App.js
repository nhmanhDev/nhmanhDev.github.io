import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent({ load }) {
  const location = useLocation();
  const isMinimal = location.pathname === "/";

  return (
    <div
      className={isMinimal ? "App App-minimal" : "App"}
      id={!isMinimal && load ? "no-scroll" : "scroll"}
    >
      {!isMinimal && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing ready={!load} />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!isMinimal && <Footer />}
    </div>
  );
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    let active = true;
    const hide = () => {
      if (active) updateLoad(false);
    };
    const pageReady =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const minShow = new Promise((resolve) => setTimeout(resolve, 900));
    Promise.all([pageReady, fontsReady, minShow]).then(hide);
    const cap = setTimeout(hide, 5000);

    return () => {
      active = false;
      clearTimeout(cap);
    };
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <AppContent load={load} />
    </Router>
  );
}

export default App;
