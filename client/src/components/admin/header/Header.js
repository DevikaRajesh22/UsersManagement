import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout, logout } from "../../../store/slices/authSlice";
import Api from "../../../services/axios";
import './Header.css';

const Header = () => {
  const dispatch = useDispatch()
const navigate = useNavigate()

  const handleLogout =async() => {
    try{
      const response = await Api.get(`/admin/logoutAdmin`);
      console.log(response);
      if(response.data.status){
        dispatch(adminLogout());
        navigate('/admin/login');
      }
    }catch(error){
      console.log(error.message);
    }
    
  };

  return (
    <div className="header-container">
      <div className="user-info">
        <div className="welcome-message">
          <p>Welcome back, Admin!</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
