import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoutes = ({children}) => {

  return sessionStorage.getItem("currentEmail") ? children : <Navigate to='/'></Navigate>
};
