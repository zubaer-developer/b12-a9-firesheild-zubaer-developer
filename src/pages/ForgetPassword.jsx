import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();

  // Get the email passed from SignIn
  const defaultEmail = location.state?.email || "";
  const [email, setEmail] = useState(defaultEmail);

  const handleReset = (event) => {
    event.preventDefault();

    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Redirecting to Gmail...");
        //  redirect to Gmail
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Forget Password</title>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-3">
              Reset Password
            </h1>
            <form onSubmit={handleReset}>
              <label className="label font-medium text-gray-700">
                Enter your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className="btn btn-neutral w-full mt-4 text-white"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
