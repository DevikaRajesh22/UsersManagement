

// AdminProtectedRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminProtectedRoute = ({ element }) => {
  const { adminInfo } = useSelector((state) => state.auth);
  console.log(adminInfo)

  return adminInfo ? (
    <Outlet/>
  ) : (
    <Navigate to="/admin" />
  );
};

export default AdminProtectedRoute;