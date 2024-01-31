import React,{useState} from 'react';
import{Link, useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import Api from '../../../services/axios';
import { useDispatch } from "react-redux";
import { setCredentials } from '../../../store/slices/authSlice';
import './Signup.css';

const Signup = () => {
  const [error,setError]=useState(null);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('');

  const navigate = useNavigate();
  const dispatch  = useDispatch();
  console.log('1');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (name.trim().length < 4) {
        setError('Invalid name length !!')
         return;
       } else if (!emailRegex.test(email)) {
         setError("Invalid email !!");
         return;
       } else if (password.trim().length < 6) {
         setError("Invalid password length !!");
         return;
       } else if (password !== cpassword) {
         setError("Passwords don't match !!");
         return;
       }else if(phone.trim().length!==10){
        setError('Invalid number length !!');
        return;
       }
       const res = await Api.post('/register',{name,email,phone,password,cpassword});
       if(res.data.status){
        dispatch(setCredentials({
          _id:res.data._id,
          name:res.data.name,
          email:res.data.email,
          phone:res.data.phone
        }))
        navigate('/')
        toast.success("signed up successfully")
      }
      else{
        toast.error(res.data.message)
      }
    }catch(error){
      console.log(error.message);
    }
  };
  return (
    <div className="signup-container">
      <h2>User Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Full Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} id="contactNumber" name="contactNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Re-type Password:</label>
          <input type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} id="confirmPassword" name="confirmPassword" required />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
      </form>
      <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}

export default Signup
