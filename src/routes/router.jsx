import { createBrowserRouter } from "react-router";
import { HomeLayout } from "../components";
import Homepage from "../pages/Homepage";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
        path: "/forgot_pass",
        element: <ForgotPassword />
    },
    {
        path: "/reset_pass",
        element: <ResetPassword />
    },
])