import { Outlet, useNavigate } from "react-router-dom";

export default function ProfileLayout() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "1rem" }}>
        ← Go Back
      </button>
      <Outlet /> {/* Nested route renders here */}
    </div>
  );
}
