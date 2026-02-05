import React from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import PlaylistCard from "./components/playlistcard";
import AddProfile from "./addprofile";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />

      {/* Add Profile Form */}
      <AddProfile />

      {/* Existing playlists */}
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
