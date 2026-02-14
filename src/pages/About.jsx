// About.jsx
import React from "react";
import Header from "../components/Header";

function About() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div style={{ padding: "2rem" }}>
        <h2 style={{ color: "#1DB954" }}>About Spotify Lite</h2>

        <p style={{ marginTop: "1rem", lineHeight: "1.6", fontSize: "1rem" }}>
          Spotify Lite is a lightweight, web-based music app inspired by Spotify. 
          You can browse playlists, add and view user profiles, and explore curated music collections.
        </p>

        <p style={{ marginTop: "1rem", lineHeight: "1.6", fontSize: "1rem" }}>
          This project was created by <strong>Dylan Grieger</strong> as a web development and React practice project. 
          It demonstrates the use of React components, dynamic routing, and API integration.
        </p>

        <p style={{ marginTop: "1rem", lineHeight: "1.6", fontSize: "1rem" }}>
          The app is designed with a modern, clean interface, featuring Spotify-inspired green and black color themes. 
          Profiles and playlists are interactive and easy to navigate.
        </p>

        <p style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#bbb" }}>
          © 2026 Dylan Grieger. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default About;
