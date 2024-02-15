import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('userToken');

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/LoginForm" />;
};

export default ProtectedRoute;
