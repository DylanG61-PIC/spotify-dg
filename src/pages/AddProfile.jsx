// AddProfile.jsx
import React, { useReducer, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  title: "",
  bio: "",
  image: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function AddProfile() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  // useRef for auto-focus
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call
    console.log(state);

    dispatch({ type: "RESET" });

    // After adding, redirect to Home
    navigate("/");
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "500px",
        margin: "0 auto",
        backgroundColor: "#1e1e1e",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ color: "#1DB954", marginBottom: "1rem" }}>Add Profile</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
      >
        <input
          ref={nameInputRef}
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
          }
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
        />

        <input
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
          }
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
        />

        <input
          type="text"
          placeholder="Title"
          value={state.title}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "title", value: e.target.value })
          }
          required
          style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
        />

        <textarea
          placeholder="Bio"
          value={state.bio}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "bio", value: e.target.value })
          }
          required
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            border: "none",
            resize: "vertical",
          }}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={state.image}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "image", value: e.target.value })
          }
          style={{ padding: "0.5rem", borderRadius: "6px", border: "none" }}
        />

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            backgroundColor: "#1DB954",
            color: "#000",
            padding: "0.6rem",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Add Profile
        </button>
      </form>
    </div>
  );
}

export default AddProfile;