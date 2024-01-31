import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Api from '../../../services/axios';
import { useDispatch } from "react-redux";
import {setCredentials, setAdminCredentials} from '../../../store/slices/authSlice';
import './Login.css';

const Login = () => {
  const [error,setError]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Enter valid email");
        return;
      } else if (password.trim().length < 5) {
        setError("Enter password with minimum 5 characters");
        return;
      }
      const res = await Api.post("/admin/adminLogin", { email, password });
      console.log('res',res);
      if (res.data.status) {
        dispatch(setAdminCredentials({
          email:res.data.email,
          password:res.data.password
        }))
        navigate('/admin/');
        toast.success("Logged in successfully..");
     } else {
        toast.error(res.data.message);
     }
    }catch(error){
      console.log(error.message);
    }
  }
  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" required />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
