import { Outlet, Link, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Spotify Lite</h2>

      <button onClick={() => navigate(-1)}>Go Back</button>

      <nav style={{ margin: "10px 0" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add">Add Profile</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

export default Layout;
