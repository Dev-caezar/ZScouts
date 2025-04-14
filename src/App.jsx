import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import { HomeLayout } from './components';
import Homepage from './pages/Homepage';
import AboutUs from './components/Wisdom/AboutUs';
import ContactUs from './components/Wisdom/ContactUs';
import ErrorPage from './pages/ErrorPage';
import AuthLayout from './components/layout/AuthLayout';
import ScoutLogin from './auth/ScoutLogin';
import RegisterPlayer from './auth/RegisterPlayer';
import ScoutRegister from './auth/ScoutRegister';
import EmailPage from './auth/EmailPage';
import EmailNotify from './auth/EmailNotify';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import LoginOption from './auth/LoginOption';
import SignupOption from './auth/SignupOption';
import DashboardLayout from './components/layout/DashboardLayout';
import PlayerProfile from './pages/PlayerProfile';
import PlayerSettings from './pages/PlayerSettings';
import ScoutDashboardLayout from './components/layout/ScoutDashboardLayout';
import ScoutProfile from './pages/ScoutProfile';
import ScoutSettings from './pages/ScoutSettings';
import LoginPayer from './auth/LoginPlayer';
import EmailVerify from './auth/EmailVerify';
import EditProfile from './pages/EditProfile';
import PlayerVideo from './pages/PlayerVideo'


const App = () => {
 const Router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: "about_us",
          element: <AboutUs />,
        },
        {
          path: "contact_us",
          element: <ContactUs />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/player_login",
          element: <LoginPayer />,
        },
        {
          path: "/scout_login",
          element: <ScoutLogin />,
        },
        {
            path: "/player_register",
            element: <RegisterPlayer />
        },
        {
          path: "/scout_register",
          element: <ScoutRegister />,
        },
        {
          path: "/email_page",
          element: <EmailPage />,
        },
        {
          path: "/email_verify",
          element: <EmailVerify/>,
        },
        {
          path: "/email_notify",
          element: <EmailNotify />,
        },
        {
          path: "/forgot_password",
          element: <ForgotPassword />,
        },
        {
          path: "/reset_password",
          element: <ResetPassword />,
        },
        {
          path: "/login_option",
          element: <LoginOption />,
        },
        {
          path: "/signup_option",
          element: <SignupOption />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "player_profile",
          element: <PlayerProfile />,
        },
        {
          path: "edit_profile",
          element: <EditProfile />,
        },
        {
          path: "edit_video",
          element: <PlayerVideo />,
        },
        {
          path: "player_setting",
          element: <PlayerSettings />,
        },
      ],
    },
    {
      element: <ScoutDashboardLayout />,
      children: [
        {
          path: "scout_profile",
          element: <ScoutProfile />,
        },
        {
          path: "scout_setting",
          element: <ScoutSettings />,
        }
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
