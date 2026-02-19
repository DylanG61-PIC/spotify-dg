import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { FilterContext } from "../context/FilterContext"; // ✅ Import filter context

function OtherProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);

  // Use global filter state instead of local
  const { selectedTitle, setSelectedTitle } = useContext(FilterContext);

  // Fetch profiles from Hannah's API
  useEffect(() => {
    fetch("https://web.ics.purdue.edu/~zong6/profile-app/fetch-data.php")
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data);

        // Extract unique titles for filter
        const uniqueTitles = [...new Set(data.map((p) => p.title))];
        setTitles(uniqueTitles);
      })
      .catch((err) => console.error("Error fetching profiles:", err));
  }, []);

  // Filter profiles by selected title
  const filteredProfiles = selectedTitle
    ? profiles.filter((p) => p.title === selectedTitle)
    : profiles;

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h2 style={{ color: "#1DB954", marginBottom: "1rem" }}>All Profiles</h2>

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
          }}
        >
          <option value="">All</option>
          {titles.map((title, idx) => (
            <option key={idx} value={title}>
              {title}
            </option>
          ))}
        </select>
      </label>

      {/* Profile Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredProfiles.map((profile) => (
          <Link
            key={profile.id}
            to={`/profiles/${profile.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProfileCard
              title={profile.name}
              subtitle={profile.title}
              description={profile.bio}
              image={profile.image_url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OtherProfiles;
