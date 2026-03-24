import React, { useEffect, useState } from "react";

const themes = [
  {
    name: "Purple (Default)",
    color: "#c770f0", // Primary text/accent color
    bgGradient: "linear-gradient(to bottom left, rgba(17, 16, 16, 0.58), rgba(12, 8, 24, 0.9))",
    navActive: "#c95bf5",
    techPillBg: "rgba(199, 112, 240, 0.15)",
    techPillBorder: "rgba(199, 112, 240, 0.4)",
    aboutBg: "linear-gradient(160deg, rgba(17, 5, 35, 0.98) 0%, rgba(10, 5, 25, 0.98) 100%)",
  },
  {
    name: "Green (Matrix)",
    color: "#00ff41",
    bgGradient: "linear-gradient(to bottom left, rgba(10, 20, 10, 0.8), rgba(5, 10, 5, 0.95))",
    navActive: "#00ff41",
    techPillBg: "rgba(0, 255, 65, 0.15)",
    techPillBorder: "rgba(0, 255, 65, 0.4)",
    aboutBg: "linear-gradient(160deg, rgba(5, 20, 5, 0.95) 0%, rgba(0, 10, 0, 0.98) 100%)",
  },
  {
    name: "Blue (Ocean)",
    color: "#00d2ff",
    bgGradient: "linear-gradient(to bottom left, rgba(10, 15, 30, 0.8), rgba(5, 10, 20, 0.95))",
    navActive: "#00d2ff",
    techPillBg: "rgba(0, 210, 255, 0.15)",
    techPillBorder: "rgba(0, 210, 255, 0.4)",
    aboutBg: "linear-gradient(160deg, rgba(5, 15, 35, 0.95) 0%, rgba(0, 5, 20, 0.98) 100%)",
  },
  {
    name: "Orange (Sunset)",
    color: "#ff8c00",
    bgGradient: "linear-gradient(to bottom left, rgba(30, 20, 10, 0.8), rgba(20, 10, 5, 0.95))",
    navActive: "#ff8c00",
    techPillBg: "rgba(255, 140, 0, 0.15)",
    techPillBorder: "rgba(255, 140, 0, 0.4)",
    aboutBg: "linear-gradient(160deg, rgba(35, 20, 5, 0.95) 0%, rgba(20, 5, 0, 0.98) 100%)",
  }
];

function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || 0;
  });

  useEffect(() => {
    applyTheme(activeTheme);
  }, [activeTheme]);

  const applyTheme = (index) => {
    const theme = themes[index];
    document.documentElement.style.setProperty("--imp-text-color", theme.color);
    document.documentElement.style.setProperty("--section-background-color", theme.bgGradient);
    document.documentElement.style.setProperty("--nav-active-color", theme.navActive);
    document.documentElement.style.setProperty("--tech-pill-bg", theme.techPillBg);
    document.documentElement.style.setProperty("--tech-pill-border", theme.techPillBorder);
    document.documentElement.style.setProperty("--about-bg", theme.aboutBg);
    
    // Some static elements in CSS that we want to control via JS variables
    // We'll update the CSS file to use these generic variables.
  };

  const handleThemeChange = (index) => {
    setActiveTheme(index);
    localStorage.setItem("portfolio-theme", index);
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center", marginLeft: "15px" }}>
      {themes.map((theme, index) => (
        <button
          key={index}
          onClick={() => handleThemeChange(index)}
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: theme.color,
            border: activeTheme == index ? "2px solid white" : "2px solid transparent",
            cursor: "pointer",
            padding: 0,
            transition: "all 0.3s ease",
            boxShadow: activeTheme == index ? `0 0 8px ${theme.color}` : "none",
          }}
          title={theme.name}
          aria-label={`Switch to ${theme.name} theme`}
        />
      ))}
    </div>
  );
}

export default ThemeSwitcher;
