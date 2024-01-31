import React,{useState} from 'react';
import{Link, useNavigate} from 'react-router-dom';
import { toast } from "react-toastify";
import Api from '../../../services/axios';
import { useDispatch } from "react-redux";
import './AddUser.css';

const AddUser = () => {
  const [error,setError]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('');
  const navigate = useNavigate();
  console.log('1');
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (name.trim().length < 1) {
        setError("Enter a valid username");
         return;
       } else if (!emailRegex.test(email)) {
         setError("Enter valid email");
         return;
       } else if (password.trim().length < 6) {
         setError("Enter password with minimum 6 characters");
         return;
       } else if (password !== cpassword) {
         setError("Passwords don't match");
         return;
       }
       const res = await Api.post('/admin/addUser',{name,email,password,cpassword});
       console.log(res);
       if(res.data.status){
        navigate('/admin/')
        toast.success("user added  successfully")
      }
      else{
        console.log(res.data.message)
      }
    }catch(error){
      console.log('1',error.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} id="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} id="contactNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Password:</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Confirm Password:</label>
          <input type="password" value={cpassword} onChange={(e)=>setCpassword(e.target.value)} id="cpassword" />
        </div>
        <p style={{color:'red'}}>{error}</p>
        <div className="form-group">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
