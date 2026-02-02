import React from "react";

function SearchBar() {
  return (
    <div style={{ padding: "1rem" }}>
      <input
        type="text"
        placeholder="Search songs, playlists..."
        style={{ padding: "0.5rem", width: "100%", maxWidth: "400px" }}
      />
    </div>
  );
}

export default SearchBar;
