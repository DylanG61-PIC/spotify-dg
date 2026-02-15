import React from "react";

function SearchBar({ searchName, setSearchName }) {
  return (
    <input
      type="text"
      placeholder="Search by name..."
      value={searchName}
      onChange={(e) => setSearchName(e.target.value)}
      style={{
        padding: "0.5rem",
        borderRadius: "8px",
        border: "none",
        width: "100%",
        maxWidth: "300px",
        marginBottom: "1rem"
      }}
    />
  );
}

export default SearchBar;
