// OtherProfiles.jsx (with test data)
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";

function OtherProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  // Mock API data
  const testProfiles = [
    {
      id: 1,
      name: "Alice Johnson",
      title: "Top Hits Curator",
      bio: "Music enthusiast and playlist creator.",
      image_url: "https://i.pravatar.cc/220?img=19",
    },
    {
      id: 2,
      name: "Bob Smith",
      title: "Chill Vibes DJ",
      bio: "Loves relaxing tunes and chill playlists.",
      image_url: "https://i.pravatar.cc/220?img=2",
    },
    {
      id: 3,
      name: "Carol Lee",
      title: "Workout Mix Coach",
      bio: "Fitness music expert and motivator.",
      image_url: "https://i.pravatar.cc/220?img=5",
    },
    {
      id: 4,
      name: "David Kim",
      title: "Focus Music Specialist",
      bio: "Helps you concentrate with the perfect playlists.",
      image_url: "https://i.pravatar.cc/220?img=11",
    },
  ];

  // Load mock data on mount
  useEffect(() => {
    setProfiles(testProfiles);

    // Extract unique titles for filter
    const uniqueTitles = [...new Set(testProfiles.map((p) => p.title))];
    setTitles(uniqueTitles);
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
            to={`/profiles/${profile.id}`} // link to profile detail page
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
