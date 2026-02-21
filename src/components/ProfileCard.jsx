import React, { useRef, useLayoutEffect, useState } from "react";

function ProfileCard({ title, subtitle, description, image }) {
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const width = cardRef.current.offsetWidth;
      setCardWidth(width);
    }
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        width: "250px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        backgroundColor: "#181818",
        color: "#fff",
        textAlign: "center",
        cursor: "pointer",
        transition: "transform 0.3s",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/250x250/1DB954/000000?text=No+Image";
          }}
        />
      )}

      <div style={{ padding: "10px" }}>
        <h3 style={{ margin: "5px 0", fontSize: "1.1rem", fontWeight: "bold" }}>
          {title}
        </h3>

        {subtitle && (
          <p style={{ fontSize: "0.95rem", fontWeight: "500", color: "#1DB954" }}>
            {subtitle}
          </p>
        )}

        {description && (
          <p style={{ fontSize: "0.85rem", color: "#ccc", marginTop: "5px" }}>
            {description}
          </p>
        )}

        {/* Display measured width */}
        <p style={{ fontSize: "0.75rem", marginTop: "8px", color: "#888" }}>
          Card width: {cardWidth}px
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;