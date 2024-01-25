import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <h2>User Signup</h2>
      <form className="signup-form" action="#" method="post">
        <div className="form-group">
          <label htmlFor="username">Full Name:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Re-type Password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
      </form>
      <p className="login-link">Already have an account? <a href="/login">Login here</a></p>
    </div>
  )
}

export default Signup
