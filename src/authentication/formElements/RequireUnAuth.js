import React, {useEffect} from 'react'
import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'

const RequireUnAuth = () => {

    const navigate = useNavigate()
const location = useLocation()

const from = location?.from?.pathname || '/login'
    let token;
  return (
        false ? <Outlet/> : <Navigate to ='/login' state={{from: location}} replace/>
  )
}

export default RequireUnAuth