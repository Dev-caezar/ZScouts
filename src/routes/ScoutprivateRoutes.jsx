import React from 'react'
import { useSelector } from 'react-redux'
import ScoutDashboardLayout from '../components/layout/ScoutDashboardLayout'
import { Navigate } from 'react-router'

const ScoutprivateRoutes = () => {
    const token = useSelector((state)=>state.user.scoutToken)
  return token ? <ScoutDashboardLayout /> : <Navigate to="/login_option" />
}

export default ScoutprivateRoutes
