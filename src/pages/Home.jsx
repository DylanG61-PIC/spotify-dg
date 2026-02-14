// Home.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PlaylistCard from "../components/PlaylistCard"; // Playlist cards
import ProfileCard from "../components/ProfileCard";     // Profile cards

// Playlist data with images
const playlists = [
  {
    title: "Top Hits",
    image:
      "https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    title: "Chill Vibes",
    image:
      "https://images.pexels.com/photos/164812/pexels-photo-164812.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    title: "Workout Mix",
    image:
      "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
  {
    title: "Focus Music",
    image:
      "https://images.pexels.com/photos/164853/pexels-photo-164853.jpeg?auto=compress&cs=tinysrgb&w=500",
  },
];



function Home() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchName, setSearchName] = useState("");

  // Fetch titles for filter
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => setTitles(Array.isArray(data) ? data : []))
      .catch(() => setTitles([]));
  }, []);

  // Fetch profiles based on filter/search
  useEffect(() => {
    const url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${selectedTitle}&name=${searchName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfiles(Array.isArray(data) ? data : []))
      .catch(() => setProfiles([]));
  }, [selectedTitle, searchName]);

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

      {/* Search Bar */}
      <div style={{ padding: "1rem 2rem" }}>
        <SearchBar setSearchName={setSearchName} />
      </div>

      {/* Playlists */}
      <div style={{ padding: "1rem 2rem" }}>
        <h2 style={{ color: "#1DB954", marginBottom: "1rem" }}>Playlists</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {playlists.map((pl) => (
            <PlaylistCard key={pl.title} title={pl.title} image={pl.image} />
          ))}
        </div>
      </div>

      {/* Profiles Section */}
      <div style={{ padding: "1rem 2rem", marginTop: "2rem" }}>
        <h2 style={{ color: "#1DB954" }}>Profiles</h2>

        {/* Filter by Title */}
        <label style={{ display: "block", marginBottom: "1rem" }}>
          Filter by Title:
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            style={{
              marginLeft: "0.5rem",
              padding: "0.3rem 0.5rem",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              backgroundColor: "#282828",
              color: "#fff",
            }}
          >
            <option value="">All</option>
            {titles.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </label>

        {/* Profile Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              title={profile.name}
              subtitle={profile.title}
              description={profile.bio}
              image={
                profile.image_url ||
                `https://i.pravatar.cc/250?u=${profile.id}`
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
