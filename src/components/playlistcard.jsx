import React from "react";

function PlaylistCard({ title }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      margin: "0.5rem",
      width: "150px",
      textAlign: "center"
    }}>
      <div style={{
        height: "100px",
        backgroundColor: "#eee",
        borderRadius: "4px",
        marginBottom: "0.5rem"
      }}>Cover</div>
      <h3>{title}</h3>
      <button style={{
        marginTop: "0.5rem",
        padding: "0.3rem 0.6rem",
        backgroundColor: "#1DB954",
        color: "white",
        border: "none",
        borderRadius: "4px"
      }}>Play</button>
    </div>
  );
}

export default PlaylistCard;
