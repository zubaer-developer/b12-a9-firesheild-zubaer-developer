import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(user, { displayName: name, photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center mb-4">
            Update Profile
          </h1>

          <form onSubmit={handleUpdate}>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full mb-4"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />

            <button type="submit" className="btn btn-primary w-full">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
