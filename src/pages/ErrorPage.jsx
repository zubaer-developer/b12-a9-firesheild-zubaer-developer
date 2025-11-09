import React from "react";
import error_img from "../assets/error-page.jpg";
import { NavLink } from "react-router";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* page title */}
      <title>Error-Page</title>
      <div>
        <img className=" w-full h-dvh" src={error_img} alt="" />
        <div className="flex justify-center">
          <NavLink
            to={"/"}
            className="w-[150px] flex justify-center py-3 px-4 rounded-sm bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold cursor-pointer"
          >
            Go Back!
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
