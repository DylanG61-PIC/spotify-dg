function PlaylistCard({ title, image }) {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",   // bigger
        height: "300px",  // bigger
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
          e.target.src = `https://via.placeholder.com/300x300/1DB954/000000?text=${title.replace(
            " ",
            "+"
          )}`;
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
          color: "#fff",
          padding: "15px",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      ></div>
    </div>
  );
}

export default PlaylistCard;
