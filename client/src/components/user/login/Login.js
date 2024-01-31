import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Api from "../../../services/axios";
import { useDispatch } from "react-redux";
import { setCredentials } from '../../../store/slices/authSlice';

const Login = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Enter valid email");
        return;
      } else if (password.trim().length < 6) {
        setError("Enter password with minimum 6 characters");
        return;
      }

      const res = await Api.post("/login", { email, password,phone});
      console.log(res);
      if (res.data.status) {
        const userData = res.data;
        dispatch(setCredentials({
          _id:res.data._id,
          name:res.data.name,
          email:res.data.email,
          phone:res.data.phone
        }));
        setPhone(userData.phone)
        toast.success("logged in successfully..")
        navigate('/')
      } else if (!res.data.status) {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error.message+'a');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" required />
        </div>
        <p style={{ color: 'red' }}>{error}</p>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <p className="register-link">Don't have an account?  <Link to="/signup">Register</Link></p>
    </div>
  )
}

export default Login
