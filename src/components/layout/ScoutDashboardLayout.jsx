import React from 'react'
import DashboardNav from './static/DashboardNav'
import DashboardHeader from './static/DashboardHeader'
import { Outlet } from 'react-router'

const ScoutDashboardLayout = () => {
  return (
    <div className="dashboardLayout_body">
          <DashboardNav />
          <div className="mainContent">
            <DashboardHeader />
            <div className="content">
              <Outlet />
            </div>
          </div>
        </div>
  )
}

export default ScoutDashboardLayout
