// src/components/Layout.jsx
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModeContext } from "../context/ModeContext";

export default function Layout() {
  const navigate = useNavigate();
  const { mode, toggleMode } = useContext(ModeContext); // ✅ use ModeContext

  // Define styles based on mode
  const isDark = mode === "dark";

  const backgroundColor = isDark ? "#121212" : "#fff";
  const textColor = isDark ? "#fff" : "#000";
  const headerColor = "#1DB954"; // Keep header links green
  const buttonTextColor = isDark ? "#000" : "#fff";
  const buttonBgColor = "#1DB954";

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: backgroundColor,
        color: textColor,
        minHeight: "100vh",
      }}
    >
      {/* Top Header / Navigation */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: `1px solid ${isDark ? "#282828" : "#ccc"}`,
        }}
      >
        <h1 style={{ color: headerColor, margin: 0 }}>Spotify Lite</h1>

        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/" style={{ color: headerColor, textDecoration: "none", fontWeight: "bold" }}>Home</Link>
          <Link to="/add-profile" style={{ color: headerColor, textDecoration: "none", fontWeight: "bold" }}>Add Profile</Link>
          <Link to="/profiles" style={{ color: headerColor, textDecoration: "none", fontWeight: "bold" }}>Other Profiles</Link>
          <Link to="/about" style={{ color: headerColor, textDecoration: "none", fontWeight: "bold" }}>About</Link>
        </nav>

        {/* Theme toggle button */}
        <button
          onClick={toggleMode}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginLeft: "1rem",
          }}
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </header>

      {/* Optional Go Back button for nested pages */}
      <div style={{ padding: "0 2rem", marginTop: "1rem" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: buttonBgColor,
            color: buttonTextColor,
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Go Back
        </button>
      </div>

      {/* Page content rendered here */}
      <main style={{ padding: "0 2rem", marginBottom: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
