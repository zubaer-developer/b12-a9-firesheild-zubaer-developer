import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import About from "../pages/about";
import Contact from "../pages/contact";
import GamesDetail from "../pages/GamesDetail";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgetPassword from "../pages/forgetPassword";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gamesDetail/:id",
        element: <GamesDetail></GamesDetail>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
