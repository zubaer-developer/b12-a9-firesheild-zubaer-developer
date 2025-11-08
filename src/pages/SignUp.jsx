import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const SignUp = () => {
  const { signUpUser } = use(AuthContext);
  const [error, setError] = useState("");
  const handleSignUp = (event) => {
    event.preventDefault();
    // clear previous error
    setError("");

    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.PhotoUrl.value;
    console.log(email, password, name, photo);

    if (password.length < 6) {
      setError("Password must be at least 6 charecters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must include at least one UPPERCASE letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must include at least one LOWERCASE letter.");
      return;
    }

    signUpUser(email, password)
      .then((res) => {
        console.log(res.user);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign Up</title>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            {/*  Error Message */}
            {error && (
              <p className="text-red-500 bg-red-100 p-2 rounded mb-3 text-center font-medium">
                {error}
              </p>
            )}
            <form onSubmit={handleSignUp}>
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
                <label className="label">Photo URL</label>
                <input
                  name="PhotoUrl"
                  type="text"
                  className="input"
                  placeholder="Photo URL"
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
