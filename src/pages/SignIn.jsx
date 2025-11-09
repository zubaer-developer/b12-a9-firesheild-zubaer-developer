//
import React, { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const { signInUser, signInGoogle } = use(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("GoogleSignIn successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("GoogleSignIn successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign In</title>

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Password */}
                <div className="relative">
                  <label className="block text-sm mb-1  text-white font-bold text-[17px]">
                    Password
                  </label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    required
                    className="input input-bordered w-full "
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-11 cursor-pointer z-50"
                  >
                    {show ? <IoEyeOff /> : <FaEye />}
                  </span>
                </div>
                <div>
                  <Link
                    to="/forgetpassword"
                    state={{ email }}
                    className="link link-hover text-blue-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {/* Google Signin */}
            <button
              onClick={handleGoogleSignIn}
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
