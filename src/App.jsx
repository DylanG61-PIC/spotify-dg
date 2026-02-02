import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PlaylistCard from "./components/PlaylistCard";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div style={{ display: "flex", flexWrap: "wrap", padding: "1rem" }}>
        <PlaylistCard title="Top Hits" />
        <PlaylistCard title="Chill Vibes" />
        <PlaylistCard title="Workout Mix" />
        <PlaylistCard title="Focus Music" />
      </div>
    </div>
  );
}

export default App;
