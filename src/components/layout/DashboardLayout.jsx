import React from 'react'
import DashboardHeader from './static/DashboardHeader'
import DashboardNav from './static/DashboardNav'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout_body">
      <DashboardNav />
      <div className="mainContent">
        <DashboardHeader />
        <div className="content">
          <Outlet />
        </div>
        <div className="footer">
          <h4>©2025 Zscout | All rights reserved</h4>
          <h4>Privacy</h4>
          <h4>Terms</h4>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
