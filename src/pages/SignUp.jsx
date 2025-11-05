import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <form>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {/* Profile URL */}
                <label className="label">Profile URL</label>
                <input
                  name="profileUrl"
                  type="text"
                  className="input"
                  placeholder="Profile URL"
                />
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
                <button className="btn btn-neutral mt-4">SignUp</button>
              </fieldset>
            </form>
            <p>
              Already have an account ?
              <Link
                className="ml-3 text-blue-500 hover:text-blue-800"
                to="/signin"
              >
                SignIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
