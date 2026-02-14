import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, [id]);

  if (!profile) {
    return <p style={{ color: "#fff" }}>Loading profile...</p>;
  }

  return (
    <div style={{ color: "#fff", maxWidth: "600px", margin: "auto" }}>
      <img
        src={profile.image_url || `https://i.pravatar.cc/300?u=${profile.id}`}
        alt={profile.name}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "1rem" }}
      />
      <h2 style={{ color: "#1DB954" }}>{profile.name}</h2>
      <h4>{profile.title}</h4>
      <p>{profile.bio}</p>
    </div>
  );
}

export default ProfileDetail;
