// AddProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function AddProfile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call
    console.log({ name, email, title, bio, image });

    // After adding, redirect to Home
    navigate("/");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Header with navigation */}
      <Header />

      {/* Add Profile Form */}
      <div
        style={{
          padding: "2rem",
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "#1e1e1e",
          borderRadius: "12px",
        }}
      >
        <h2 style={{ color: "#1DB954", marginBottom: "1rem" }}>
          Add Profile
        </h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
          />
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            style={{ padding: "0.5rem", borderRadius: "6px", border: "none", resize: "vertical" }}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
          />

          <button
            type="submit"
            style={{
              marginTop: "1rem",
              backgroundColor: "#1DB954",
              color: "#000",
              padding: "0.6rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProfile;
