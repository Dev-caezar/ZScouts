import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoutes />,
        children: ([
            {
                index: true,
                element: <Homepage />
            },
        ]),
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/forgot_password",
        element: <ForgotPassword />
    },
    {
        path: "/reset_password",
        element: <ResetPassword />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])