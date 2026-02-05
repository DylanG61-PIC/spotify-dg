import { useState } from "react";

function AddProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    bio: "",
    image: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function validate() {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid email is required";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (formData.bio.length < 10) {
      newErrors.bio = "Bio must be at least 10 characters";
    }

    if (!formData.image.startsWith("http")) {
      newErrors.image = "Image must be a valid URL";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        title: "",
        bio: "",
        image: ""
      });
    } else {
      setSuccess(false);
    }
  }

  return (
    <div>
      <h2>Add Profile</h2>

      {success && <p style={{ color: "green" }}>Profile added successfully!</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.title}</p>

        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.bio}</p>

        <input
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.image}</p>

        <button type="submit">Add Profile</button>
      </form>
    </div>
  );
}

export default AddProfile;
