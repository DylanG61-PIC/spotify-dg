import React, { useEffect, useState } from "react";
import Header from "./components/header";
import SearchBar from "./components/SearchBar";
import PlaylistCard from "./components/playlistcard";
import AddProfile from "./addprofile";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchName, setSearchName] = useState("");

  // Fetch titles for filter dropdown
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched titles:", data); // debug
        setTitles(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Title fetch error:", err);
        setTitles([]);
      });
  }, []);

  // Fetch profiles (filtered by title and search name)
  useEffect(() => {
    const url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${selectedTitle}&name=${searchName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfiles(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("Profile fetch error:", err);
        setProfiles([]);
      });
  }, [selectedTitle, searchName]);

  return (
    <div>
      <Header />
      <SearchBar setSearchName={setSearchName} />

      {/* Add Profile Form */}
      <AddProfile />

      {/* Existing hardcoded playlists */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <PlaylistCard title="Top Hits" />
        <PlaylistCard title="Chill Vibes" />
        <PlaylistCard title="Workout Mix" />
        <PlaylistCard title="Focus Music" />
      </div>

      {/* Fetched Profiles Section */}
      <section style={{ padding: "1rem" }}>
        <h2>Profiles (Fetched from API)</h2>

        <label>
          Filter by Title:{" "}
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.2rem" }}
          >
            <option value="">All</option>
            {Array.isArray(titles) &&
              titles.map((title, index) => (
                <option key={index} value={title}>
                  {title}
                </option>
              ))}
          </select>
        </label>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {profiles?.map((profile) => (
            <PlaylistCard
              key={profile.id}
              title={profile.name}
              subtitle={profile.title}
              description={profile.bio}
              image={profile.image_url}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
