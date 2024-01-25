import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" action="#" method="post">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <p className="register-link">Don't have an account? <a href="/signup">Register now</a></p>
    </div>
  )
}

export default Login
