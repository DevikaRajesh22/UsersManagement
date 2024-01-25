// Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  // Function to handle logout (replace with your actual logout logic)
  const handleLogout = () => {
    // Your logout logic here
    console.log('Logout clicked');
  };

  return (
    <div className="header-container">
      <div className="user-info">
        <div className="welcome-message">
          <p>Welcome back, username!</p>
        </div>
        <div className="user-actions">
          <Link to="/profile" className="user-icon">
            <FaUser size={20} />
          </Link>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;