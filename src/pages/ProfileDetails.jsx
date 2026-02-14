import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProfileDetails() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(
      `https://web.ics.purdue.edu/~zong6/profile-app/fetch-data-with-id.php?id=${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProfile(data[0]);
        } else {
          setProfile(null);
        }
      })
      .catch(() => setProfile(null));
  }, [id]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h3>{profile.name}</h3>
      <p>Email: {profile.email}</p>
      <p>Title: {profile.title}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
}

export default ProfileDetails;
