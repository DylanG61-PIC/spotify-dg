import React from "react";

function PlaylistCard({ title, image }) {
  return (
    <div
      style={{
        position: "relative",      // 👈 must be relative for overlay
        width: "220px",
        height: "220px",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://via.placeholder.com/220x220/1DB954/000000?text=${title.replace(
            /\s+/g,
            "+"
          )}`;
        }}
      />

      {/* Title Overlay */}
      <div
        style={{
          position: "absolute",     // 👈 absolutely position overlay inside parent
          bottom: 0,
          left: 0,
          width: "100%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          color: "#fff",
          padding: "10px",
          fontWeight: "bold",
          fontSize: "1rem",
          boxSizing: "border-box", // ensures padding doesn't overflow
        }}
      >
        {title}
      </div>
    </div>
  );
}

export default PlaylistCard;
