// userView.js

import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import './userView.css';

const UserView = () => {
  // Dummy user data (replace with your actual user data)
  const users = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    // Add more users as needed
  ];

  const handleAddUser = () => {
    // Implement logic to add a new user
    console.log('Add new user logic goes here');
  };

  return (
    <div>
      <button className="add-user-button" onClick={handleAddUser}>
        Add New
      </button>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <span>{user.name}</span>
            <div className="options">
              <FaEdit className="edit-icon" />
              <FaTrash className="delete-icon" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserView;
