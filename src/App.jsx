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
import ScoutDashboardLayout from './components/layout/ScoutDashboardLayout';
import ScoutProfile from './pages/ScoutProfile';
import PlayerSettings from './pages/PlayerSettings';
import ScoutFormRegister from './auth/ScoutFormRegister';
import ScoutSettings from './pages/ScoutSettings';
import LoginPayer from './auth/LoginPlayer';
import EmailVerify from './auth/EmailVerify';
import EditProfile from './pages/EditProfile';
import PlayerVideo from './pages/PlayerVideo'
import PasswordUpdate from './auth/PasswordUpdate';
import EmailSuccess from './auth/EmailSuccess';
import ForgotPasswordPlayer from './auth/ForgotPasswordPlayer';
import ResetPasswordPlayers from './auth/ResetPasswordPlayer';
import AdminDashboard from './components/Chiemerie/AdminDashboard';
import AdminPlayersManagement from './components/Chiemerie/AdminPlayersManagement';
import AdminScoutDashboard from './components/Chiemerie/AdminScoutDashboard';
import AdmindashboardOverview from './components/Chiemerie/AdmindashboardOverview';
import EmailPagePlayer from './auth/EmailPagePlayer';
import EmailVerifyPlayer from './auth/EmailVerifyPlayer';
import GetOnePlayerVideo from './pages/GetOnePlayerVideo';

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
          path: "/email_page_player",
          element: <EmailPagePlayer />,
        },
        {
          path: "/email_verify/:token",
          element: <EmailVerify/>,
        },
        {
          path: "/email_verify_player/:token",
          element: <EmailVerifyPlayer/>,
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
          path: "/forgot_password_player",
          element: <ForgotPasswordPlayer />,
        },
        {
          path: "/reset_password/:token",
          element: <ResetPassword />,
        },
        {
          path: "/reset_password_players/:token",
          element: < ResetPasswordPlayers />,
        },
        {
          path: "/login_option",
          element: <LoginOption />,
        },
        {
          path: "/signup_option",
          element: <SignupOption />,
        },
        {
          path: "/password_update",
          element: <PasswordUpdate />,
        },
        {
          path: "/email_success",
          element: <EmailSuccess />,
        },
      ],
    },
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "player_profile/:id",
          element: <PlayerProfile />,
        },
        {
          path: "edit_profile/:id",
          element: <EditProfile />,
        },
        {
          path: "player_video/:id",
          element: <PlayerVideo />,
        },
        {
          path: "player_setting/:id",
          element: <PlayerSettings />,
        },
      ],
    },
    {
      element: <ScoutDashboardLayout />,
      children: [
        {
          path: "scout_profile/:id",
          element: <ScoutProfile />,
        },

        {
          path: "/scout_form/:id",
          element: <ScoutFormRegister />,
        },
        {
          path: "scout_setting",
          element: <ScoutSettings />,
        },

        {
          path: "get_one_player_video",
          element: < GetOnePlayerVideo />,
        }
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },

    {
      element:<AdminDashboard/>,
      children:[
        {
          path:"admin_dashboard",element:<AdmindashboardOverview/>
        },
        {
          path:"players_admindashboard",element:<AdminPlayersManagement/>
        },
        {
          path:"scout_admindashboard",element:<AdminScoutDashboard/>
        },
       
      ]

    }
  ]);
  return (
    <div>
      <RouterProvider router={Router}/>
    </div>
  )
}

export default App
