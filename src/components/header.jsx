// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#121212",
        color: "#fff",
        borderBottom: "1px solid #282828",
      }}
    >
      {/* Left: Spotify Lite */}
      <h1 style={{ color: "#1DB954", margin: 0 }}>Spotify Lite</h1>

      {/* Right: Navigation Links */}
      <nav style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/"
          style={{ color: "#1DB954", textDecoration: "none", fontWeight: "bold" }}
        >
          Home
        </Link>
        <Link
          to="/add-profile"
          style={{ color: "#1DB954", textDecoration: "none", fontWeight: "bold" }}
        >
          Add Profile
        </Link>
        <Link
          to="/profiles"
          style={{ color: "#1DB954", textDecoration: "none", fontWeight: "bold" }}
        >
          Other Profiles
        </Link>
        <Link
          to="/about"
          style={{ color: "#1DB954", textDecoration: "none", fontWeight: "bold" }}
        >
          About
        </Link>
      </nav>
    </header>
  );
}

export default Header;
