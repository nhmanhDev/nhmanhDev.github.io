import React from "react";
import "./Pre.css";

// Boot loader: full-page overlay on first paint. App.js hides it when the page and fonts are ready (capped at 5s).
function readStored(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function Pre({ load }) {
  const theme = readStored("lp-theme", "light");
  const lang = readStored("lp-lang", "vi");

  return (
    <div
      className={`lp-boot${load ? "" : " lp-boot-hidden"}`}
      data-bs-theme={theme}
      role="status"
      aria-live="polite"
      aria-hidden={!load}
    >
      <div className="lp-boot-inner">
        <span className="lp-boot-badge">
          <span className="lp-boot-ring" aria-hidden="true" />
          <span className="lp-boot-mark">M</span>
        </span>
        <p className="lp-boot-text">
          {lang === "en" ? "Loading" : "Đang tải"}
          <span className="lp-boot-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Pre;
