import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedLogin = ({children}) => {

  return !localStorage.getItem("currentEmail") ? children : <Navigate to='/login-to-app'></Navigate>
};
