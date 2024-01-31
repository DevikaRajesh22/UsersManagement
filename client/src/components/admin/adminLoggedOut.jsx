import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminLoggedOut = () => {
 const {adminInfo} = useSelector((state)=>state.auth)
 return adminInfo ? <Navigate to='/admin/dashboard' />: <Outlet/>
}

export default AdminLoggedOut;