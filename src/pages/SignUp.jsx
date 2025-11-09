import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";

const SignUp = () => {
  const { signUpUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photo = event.target.PhotoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    //  Password validation
    if (!/[A-Z]/.test(password)) {
      return setError("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      return setError("Password must contain at least one lowercase letter");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long");
    }

    //  Create user
    signUpUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log("User created:", user);

        // Update display name & photo URL in Firebase
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Sign Up successful ");
            // redirect to profile page
            navigate("/profile");
          })
          .catch((error) => {
            console.error("Profile update failed:", error);
            toast.error("Profile update failed");
          });
      })
      .catch((error) => {
        console.error("SignUp error:", error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign Up</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-4xl font-bold mb-4 text-center text-gray-700">
              Create Account
            </h1>

            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset space-y-2">
                {/* Name */}
                <label className="label font-semibold">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />

                {/* Profile URL */}
                <label className="label font-semibold">Photo URL</label>
                <input
                  name="PhotoUrl"
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter photo URL"
                  required
                />

                {/* Email */}
                <label className="label font-semibold">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />

                {/* Password */}
                <label className="label font-semibold">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input input-bordered w-full"
                  placeholder="Enter password"
                  required
                />

                {/* Error message */}
                {error && (
                  <p className="text-red-500 text-sm mt-2 text-center">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn btn-neutral mt-4 w-full font-semibold"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>

            <p className="mt-4 text-center">
              Already have an account?
              <Link
                className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
                to="/signin"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
