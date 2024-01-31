import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const UserLoggedOut = () => {
    const {userInfo} = useSelector((state)=>state.auth)
    console.log(userInfo);
    return userInfo ? <Navigate to='/'/> : <Outlet/>
}

export default UserLoggedOut