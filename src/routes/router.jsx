import { createBrowserRouter } from "react-router";
import Homepage from "../pages/Homepage";
import ForgotPassword from "../auth/ForgotPassword";
import ResetPassword from "../auth/ResetPassword";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "./privateRoutes";
import LoginOption from "../auth/LoginOption";
import SignupOption from "../auth/SignupOption";
import ScoutRegister from "../auth/ScoutRegister";
import AuthLayout from "../components/layout/AuthLayout";
import PlayerLogin from "../auth/playerLogin";
import ScoutLogin from "../auth/ScoutLogin";
import EmailPage from "../auth/EmailPage";
import EmailVerify from "../auth/emailVerify";
import EmailNotify from "../auth/EmailNotify";
import PlayerRegister from "../auth/PlayerRegister";
import { HomeLayout } from "../components";
import AboutUs from "../components/Wisdom/AboutUs";
import ContactUs from "../components/Wisdom/ContactUs";


export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: ([
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "about_us",
                element: <AboutUs />
            },
            {
                path: "contact_us",
                element: <ContactUs />
            },
        ]),
    },
    {
        // path: "/",
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