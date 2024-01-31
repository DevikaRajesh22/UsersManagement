import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import Api from '../../../services/axios';
import { setCredentials } from '../../../store/slices/authSlice';
import './userProfile.css';

const UserProfile = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log('1',userInfo);
  useEffect(() => {
    if (userInfo) {
      console.log('2',userInfo);
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
      setImage(userInfo.image);
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('password', password);
    formData.append('image', image);
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (name.length < 4) {
        setError('Enter a valid name');
        return;
      } else if (!emailRegex.test(email)) {
        setError("Enter valid email");
        return;
      } else if (password !== cpassword) {
        setError("Passwords don't match");
        return;
      }
      if (!userInfo || !userInfo._id) {
        console.error('User information or ID is not available');
        return;
      }
      console.log('api');
      const res = await Api.put(`/updateProfile?id=${userInfo._id}`, formData);
      console.log(res.data,'resdata');
      if (res.data.status) {
        dispatch(setCredentials({
          _id:res.data._id,
          name:res.data.name,
          email:res.data.email,
          phone:res.data.phone,
          image:res.data.image
        }));
        toast.success('Profile updated successfully');
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} id="contactNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="retypePassword">Retype Password:</label>
          <input type="password" value={cpassword} onChange={(e) => setCPassword(e.target.value)} id="retypePassword" />
        </div>
        <div className="profile-image">
          <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <p style={{ color: 'red' }}>{error}</p>
        <div className="form-group">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default UserProfile;
