import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user?.displayName);
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <title>My Profile</title>

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h1 className="text-3xl font-bold mb-4">My Profile</h1>

          <img
            src={user?.photoURL || "https://via.placeholder.com/150"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-300 mb-4"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            {user?.displayName || "No Name Available"}
          </h2>
          <p className="text-gray-600 mb-4">{user?.email}</p>

          <button
            onClick={() => navigate("/updateProfile")}
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
