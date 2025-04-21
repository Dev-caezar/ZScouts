import React from 'react'
import { Outlet } from 'react-router'
import ScoutDashboardNav from './static/ScoutDashboardNav'
import ScoutDashboardHeader from './static/ScoutDashboardHeader'

const ScoutDashboardLayout = () => {
  return (
    <div className="dashboardLayout_body">
          <ScoutDashboardNav />
          <div className="mainContent">
            <ScoutDashboardHeader />
            <div className="content">
              <Outlet />
            </div>
            <div className="footer">
              <h4>©2025 Zscout | All rights reserved</h4>
              <h4>Privacy</h4>
              <h4>Terms</h4>
            </div>
          </div>
        </div>
  )
}

export default ScoutDashboardLayout
