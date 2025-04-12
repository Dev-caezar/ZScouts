import React from 'react'
import {createHashRouter, RouterProvider} from 'react-router'
import { HomeLayout } from './components';
import Homepage from './pages/Homepage';
import AboutUs from './components/Wisdom/AboutUs';
import ContactUs from './components/Wisdom/ContactUs';
import ErrorPage from './pages/ErrorPage';



const App = () => {
 const Router = createHashRouter([
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
    // {
    //   element: <AuthLayout />,
    //   children: [
    //     {
    //       path: "/player_login",
    //       element: <PlayerLogin />,
    //     },
    //     {
    //       path: "/scout_login",
    //       element: <ScoutLogin />,
    //     },
    //     {
    //         path: "/player_register",
    //         element: <RegisterPlayer />
    //     },
    //     {
    //       path: "/scout_register",
    //       element: <ScoutRegister />,
    //     },
    //     {
    //       path: "/email_page",
    //       element: <EmailPage />,
    //     },
    //     {
    //       path: "/email_verify",
    //       element: <EmailVerify />,
    //     },
    //     {
    //       path: "/email_notify",
    //       element: <EmailNotify />,
    //     },
    //     {
    //       path: "/forgot_password",
    //       element: <ForgotPassword />,
    //     },
    //     {
    //       path: "/reset_password",
    //       element: <ResetPassword />,
    //     },
    //     {
    //       path: "/login_option",
    //       element: <LoginOption />,
    //     },
    //     {
    //       path: "/signup_option",
    //       element: <SignupOption />,
    //     },
    //   ],
    // },
    // {
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: "player_profile",
    //       element: <PlayerProfile />,
    //     },
    //     {
    //       path: "player_video",
    //       element: <PlayerVideo />,
    //     },
    //     {
    //       path: "player_setting",
    //       element: <PlayerSettings />,
    //     },
    //   ],
    // },
    // {
    //   element: <ScoutDashboardLayout />,
    //   children: [
    //     {
    //       path: "scout_profile",
    //       element: <ScoutProfile />,
    //     },
    //   ],
    // },
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
