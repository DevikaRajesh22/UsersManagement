import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserProtect = () => {
  const {userInfo} = useSelector((state)=>state.auth)
  console.log(userInfo)
  return userInfo ? <Outlet/> : <Navigate to='/login' /> 
}

export default UserProtect;