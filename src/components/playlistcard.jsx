function PlaylistCard({ title, subtitle, description, image }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        width: "220px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {/* Image (optional) */}
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
            borderRadius: "6px",
            marginBottom: "0.5rem",
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://via.placeholder.com/220x140?text=No+Image";
          }}
        />
      )}

      {/* Name / Title */}
      <h3 style={{ margin: "0.2rem 0", textAlign: "center" }}>{title}</h3>

      {/* Subtitle / Job Title */}
      {subtitle && (
        <p
          style={{
            margin: "0.2rem 0",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Bio / Description */}
      {description && (
        <p
          style={{
            margin: "0.2rem 0",
            textAlign: "center",
            fontSize: "0.85rem",
            color: "#555",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default PlaylistCard;
