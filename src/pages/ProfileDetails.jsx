// src/pages/ProfileDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div>
      <h2>{profile.name}</h2>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Title:</strong> {profile.title}</p>
      <p><strong>Bio:</strong> {profile.bio}</p>
    </div>
  );
}
