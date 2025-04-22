import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../components/layout/DashboardLayout';

const PrivateRoutes = () => {
  const token = useSelector((state) => state.player.playerToken);
  console.log("Token:", token);

  return token ? <DashboardLayout /> : <Navigate to="/login_option" />;
};

export default PrivateRoutes;
