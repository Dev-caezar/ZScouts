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
          </div>
        </div>
  )
}

export default ScoutDashboardLayout
