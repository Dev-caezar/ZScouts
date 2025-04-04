import React from 'react'
import AuthNav from './static/AuthNav'
import "../../styles/authLayout.css"
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='layoutBody'>
      <AuthNav />
      <Outlet />
    </div>
  )
}

export default AuthLayout
