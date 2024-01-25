// Header.js

import React from 'react';
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
