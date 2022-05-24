import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

function RequireAuth({children, token}) {
    const location = useLocation();
  return token ? children : <Navigate to={"/login"} replace state={{from: location}}/>
}

export default RequireAuth;