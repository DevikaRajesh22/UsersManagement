import React from 'react';
import './AddUser.css';

const AddUser = () => {
  return (
    <div>
      <form>
        <div className="profile-image">
          <img src="/path/to/default-image.jpg" alt="User" />
          <input type="file" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" />
        </div>
        <div className="form-group">
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
