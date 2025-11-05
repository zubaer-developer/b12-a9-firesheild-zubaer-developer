//
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignIn now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                {/* Email */}
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                {/* Password */}
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {/* Google Signin */}
            <button
              onClick={handleWithGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-3 bg-gray-300 text-gray-800 px-5 py-2  w-full font-semibold hover:bg-gray-100 cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              SignIn with Google
            </button>
            <p>
              New in our Website ?
              <Link
                className="ml-3 text-blue-500 hover:text-blue-800"
                to="/signup"
              >
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
