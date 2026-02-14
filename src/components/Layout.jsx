// src/components/Layout.jsx
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#121212",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      {/* Top Header / Navigation */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid #282828",
        }}
      >
        <h1 style={{ color: "#1DB954", margin: 0 }}>Spotify Lite</h1>

        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link
            to="/"
            style={{
              color: "#1DB954",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <Link
            to="/add-profile"
            style={{
              color: "#1DB954",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Add Profile
          </Link>
          <Link
            to="/profiles"
            style={{
              color: "#1DB954",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Other Profiles
          </Link>
          <Link
            to="/about"
            style={{
              color: "#1DB954",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About
          </Link>
        </nav>
      </header>

      {/* Optional Go Back button for nested pages */}
      <div style={{ padding: "0 2rem", marginTop: "1rem" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            backgroundColor: "#1DB954",
            color: "#000",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Go Back
        </button>
      </div>

      {/* Page content rendered here */}
      <main style={{ padding: "0 2rem", marginBottom: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
