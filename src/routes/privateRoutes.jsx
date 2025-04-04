import React from 'react'
import { useSelector } from 'react-redux';
import { HomeLayout } from '../components';
import { Navigate } from 'react-router';

const PrivateRoutes = () => {
  const token = useSelector((state) => state.user.token);
  console.log(token)

  return ! token ? <HomeLayout /> : <Navigate to="/login" />;
}

export default PrivateRoutes
