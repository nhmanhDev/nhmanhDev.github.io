import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Landing from "./components/Landing/Landing";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <Routes>
        <Route path="/" element={<Landing ready={!load} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
