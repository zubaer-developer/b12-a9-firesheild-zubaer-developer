// import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  // const { user } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex gap-5">
        <NavLink className="btn" to="/signin">
          Sign In
        </NavLink>
        <NavLink className="btn" to="/signup">
          Sign Up
        </NavLink>
      </div>
      {/* <div className="navbar-end">
        {loading ? (
          <HashLoader color="red" />
        ) : user ? (
          <div className="text-center space-y-3">
            <div className="flex gap-2 items-center">
              <button
                className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                Profile
              </button>
              <img
                src={
                  user?.photoURL ||
                  "https://img.icons8.com/?size=100&id=2952&format=png"
                }
                className="h-12 w-12 rounded-full border-2 border-orange-600 object-cover"
                alt=""
              />
            </div>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm flex flex-col gap-3"
              popover="auto"
              id="popover-1"
              style={{ positionAnchor: "--anchor-1" }}
            >
              <h2 className="text-black text-xl font-semibold">
                {user?.displayName || "No Name"}
              </h2>
              <p className=" font-black">{user?.email || "No Email"}</p>

              <button onClick={handleSignout} className="my-btn">
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <NavLink
            to={"/signIn-page"}
            className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-center"
          >
            Sign in
          </NavLink>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
