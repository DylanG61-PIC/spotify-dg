// src/pages/AddProfile.jsx
import { useNavigate } from "react-router-dom";

export default function AddProfile() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch(
      "https://web.ics.purdue.edu/~zong6/profile-app/add.php",
      {
        method: "POST",
        body: formData,
      }
    );

    if (res.ok) {
      navigate("/"); // redirect to homepage
    } else {
      alert("Failed to add profile");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", gap: "10px" }}>
      <input name="name" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="title" placeholder="Title" required />
      <textarea name="bio" placeholder="Bio" required />
      <button type="submit">Add Profile</button>
    </form>
  );
}
