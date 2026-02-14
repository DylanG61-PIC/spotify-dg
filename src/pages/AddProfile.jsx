import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    bio: "",
    image_url: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://web.ics.purdue.edu/~zong6/profile-app/insert-data.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/"); 
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="bio" placeholder="Bio" onChange={handleChange} required />
      <input name="image_url" placeholder="Image URL" onChange={handleChange} />

      <button type="submit">Add Profile</button>
    </form>
  );
}
