import React,{useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import Api from '../../../services/axios';
import './EditUser.css'; 

const EditUser = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const {id}=useParams();
  console.log(id);
  const navigate=useNavigate();
  useEffect(()=>{
    const fetchUserData=async()=>{
      try{
        console.log('a');
        const response = await Api.get(`/admin/users/${id}`);
        const userData = response.data;
        setName(userData.name);
        setEmail(userData.email);
        setPhone(userData.phone);
      }catch(error){
        console.log(error.message);
      }
    }
    fetchUserData();
  },[id]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await Api.put(`/admin/editUser/${id}`, { name, email, phone });
      navigate('/admin/');
    } catch (error) {
      console.error('Error updating user data:', error);
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
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditUser;