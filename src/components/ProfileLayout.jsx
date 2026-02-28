import { Outlet } from "react-router-dom";
import useGoBack from "../hooks/useGoBack";

export default function ProfileLayout() {
  const goBack = useGoBack();

  return (
    <div>
      <button onClick={goBack} style={{ marginBottom: "1rem" }}>
        ← Go Back
      </button>
      <Outlet />
    </div>
  );
}