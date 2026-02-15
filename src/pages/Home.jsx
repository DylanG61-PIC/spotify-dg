import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import PlaylistCard from "../components/PlaylistCard";
import ProfileCard from "../components/ProfileCard";

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchName, setSearchName] = useState("");

  // Fetch titles for dropdown
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => setTitles(Array.isArray(data) ? data : []))
      .catch(() => setTitles([]));
  }, []);

  // Fetch profiles based on selected title
  useEffect(() => {
    const url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${selectedTitle}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfiles(Array.isArray(data) ? data : []))
      .catch(() => setProfiles([]));
  }, [selectedTitle]);

  // Playlists (static)
  const playlists = [
    {
      title: "Top Hits",
      image:
        "https://images.pexels.com/photos/17367706/pexels-photo-17367706.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      title: "Chill Vibes",
      image:
        "https://images.pexels.com/photos/28960174/pexels-photo-28960174.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      title: "Workout Mix",
      image:
        "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
    {
      title: "Focus Music",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500",
    },
  ];

  // 🔹 Filter playlists by search
  const filteredPlaylists = playlists.filter((pl) =>
    pl.title.toLowerCase().includes(searchName.toLowerCase())
  );

  // 🔹 Filter profiles by search
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem 2rem" }}>
      {/* 🔹 SEARCH BAR AT THE TOP */}
      <SearchBar searchName={searchName} setSearchName={setSearchName} />

      {/* 🔹 PLAYLISTS SECTION */}
     <h2 style={{ color: "#1DB954", marginTop: "1rem" }}>Playlists</h2>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "1rem",
    justifyContent: "start",   // prevents single card from stretching
  }}
>
  {playlists
    .filter((pl) => pl.title.toLowerCase().includes(searchName.toLowerCase()))
    .map((pl) => (
      <PlaylistCard key={pl.title} title={pl.title} image={pl.image} />
  ))}
</div>


      {/* 🔹 PROFILES SECTION */}
      <h2 style={{ color: "#1DB954", marginTop: "2rem" }}>Profiles</h2>

      {/* Filter by title */}
      <label>
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

      {/* Profiles Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            title={profile.name}
            subtitle={profile.title}
            description={profile.bio}
            image={
              profile.image_url || `https://i.pravatar.cc/220?u=${profile.id}`
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
