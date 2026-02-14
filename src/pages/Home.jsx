import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import PlaylistCard from "../components/playlistcard";

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/get-titles.php")
      .then((res) => res.json())
      .then((data) => setTitles(Array.isArray(data) ? data : []))
      .catch(() => setTitles([]));
  }, []);

  useEffect(() => {
    const url = `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-filter.php?title=${selectedTitle}&name=${searchName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProfiles(Array.isArray(data) ? data : []))
      .catch(() => setProfiles([]));
  }, [selectedTitle, searchName]);

  return (
    <div>
      <Header />
      <SearchBar setSearchName={setSearchName} />

      <section style={{ padding: "1rem" }}>
        <h2>Profiles (Fetched from API)</h2>

        <label>
          Filter by Title:
          <select
            value={selectedTitle}
            onChange={(e) => setSelectedTitle(e.target.value)}
            style={{ marginLeft: "0.5rem", padding: "0.2rem" }}
          >
            <option value="">All</option>
            {titles.map((title, index) => (
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
            marginTop: "1rem"
          }}
        >
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/profile/${profile.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <PlaylistCard
                title={profile.name}
                subtitle={profile.title}
                description={profile.bio}
                image={profile.image_url}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
