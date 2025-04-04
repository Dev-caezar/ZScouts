import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";
import LoginOption from "../auth/LoginOption";
import SignupOption from "../auth/SignupOption";
import PlayerRegister from "../auth/playerRegister";
import ScoutRegister from "../auth/ScoutRegister";
import AuthLayout from "../components/layout/AuthLayout";
import PlayerLogin from "../auth/playerLogin";
import ScoutLogin from "../auth/ScoutLogin";
import EmailPage from "../auth/EmailPage";
import EmailVerify from "../auth/emailVerify";
import EmailNotify from "../auth/EmailNotify";

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
        path: "/",
        element: <AuthLayout />,
        children: ([
            {
                path: "/player_login",
                element: <PlayerLogin />
            },
            {
                path: "/scout_login",
                element: <ScoutLogin />
            },
            {
                path: "/player_register",
                element: <PlayerRegister />
            },
            {
                path: "/scout_register",
                element: <ScoutRegister />
            },
            {
                path: "/email_page",
                element: <EmailPage />
            },
            {
                path: "/email_verify",
                element: <EmailVerify />
            },
            {
                path: "/email_notify",
                element: <EmailNotify />
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
                path: "/login_option",
                element: <LoginOption />
            },
            {
                path: "/signup_option",
                element: <SignupOption />
            },
        ])
    },
    {
        path: "*",
        element: <ErrorPage />
    },
])