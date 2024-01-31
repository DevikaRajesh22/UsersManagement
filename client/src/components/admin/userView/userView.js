import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './userView.css';
import Api from '../../../services/axios';

const UserView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await Api.get('/admin/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleAddUser = () => {
    navigate('/admin/addUser');
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteUser = async (userId) => {
    try {
      const res=await Api.delete(`/admin/deleteUser/${userId}`);
      setUsers(res.data.users);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const filteredUsers = searchQuery
    ? users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : users;

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button className="add-user-button" onClick={handleAddUser}>
        Add New
      </button>
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user._id} className="user-card">
            <span>Name : {user.name}</span>
            <div className="options">
              <FaEdit className="edit-icon" onClick={()=>navigate(`/admin/edituser/${user._id}`)} />
              <FaTrash
                className="delete-icon"
                onClick={() => handleDeleteUser(user._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserView;
