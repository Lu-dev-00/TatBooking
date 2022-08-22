import React from 'react'
import { useAuth } from '../context/AuthContect';
import {Outlet, Navigate} from 'react-router-dom'

const PrivateRoutes = () => {
  const {isLoggedIn, getUser} = useAuth();
  const loggedIn = isLoggedIn();
  return (
        !loggedIn
        ? <Navigate to="/login"/>
        : <Outlet/>
  )
}

export default PrivateRoutes;