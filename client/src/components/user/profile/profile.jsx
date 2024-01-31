import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Api from '../../../services/axios';
import { setCredentials } from '../../../store/slices/authSlice';
import icon from './icon.jpg';

import './profile.css';

const Profile = () => {
  const [image, setImage] = useState(null);
  const { userInfo } = useSelector((state) => state.auth);
  console.log('1',userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo || !userInfo._id) {
      console.error('User information or ID is not available');
      // Optionally, handle the error by displaying a message to the user or redirecting them
      return;
    }
    
    const fetchUserData = async () => {
      try {
        const res = await Api.get(`/profile?id=${userInfo._id}`);
        console.log('resdata', res.data);
        if (res.data) {
          dispatch(setCredentials({
            _id: res.data._id,
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
            image: res.data.image
          }));
        } else {
          const errorMessage = res.data.message || "An error occurred while fetching profile";
          console.error('API response error:', errorMessage);
          // Handle API response error, e.g., display an error message
        }        
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle network or other errors, e.g., display an error message
      }
    };
  
    fetchUserData();
  }, []); // Empty dependency array ensures the hook runs only once
  

  useEffect(() => {
    console.log(userInfo);
    setImage(userInfo ? userInfo.image : null);
  }, [userInfo]);

  return (
    <div className="profile-container">
      {userInfo && (
        <>
          <img
            src={image || icon }
            alt="User"
            className="user-image"
          />
          <h2>Name: {userInfo.name}</h2>
          <p>Email: {userInfo.email}</p>
          <p>Phone: {userInfo.phone}</p>
          <button className="edit-profile-button">
            <Link to="/editProfile" className="edit-profile-link">
              Edit Profile
            </Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
