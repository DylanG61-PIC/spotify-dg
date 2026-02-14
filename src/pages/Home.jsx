import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Spotify Lite</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profiles">Profiles</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <p>Welcome to Spotify Lite! Your profiles will appear here.</p>
    </div>
  );
}

export default Home;
