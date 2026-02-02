import React from "react";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#1DB954", color: "white" }}>
      <h1>Spotify Lite</h1>
      <nav>
        <a href="#" style={{ marginRight: "1rem", color: "white" }}>Home</a>
        <a href="#" style={{ marginRight: "1rem", color: "white" }}>Search</a>
        <a href="#" style={{ color: "white" }}>Profile</a>
      </nav>
    </header>
  );
}

export default Header;
