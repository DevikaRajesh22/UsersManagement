import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../../store/slices/authSlice';
import Api from '../../../services/axios';
import { Button } from "react-bootstrap";
import './Header.css';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const response = await Api.get('/logout');
    console.log('Logout clicked',response);
    dispatch(logout());
  };

  return (
    <div className="header-container">
      <div className="user-info">
        <div className="welcome-message">
          {
            userInfo?<p>Welcome back, {userInfo.name} !</p> : <p>Hi there, explorer</p>
          }
        </div>
        <div className="user-actions">
        {!userInfo ? (
          <div className="d-flex">
            <Link
              to="/login"
              className=" login-link text-white text-decoration-none mx-2 fw-bold"
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              className="text-white text-decoration-none fw-bold"
            >
              SIGNUP
            </Link>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <Link to='/profile' className="text-white pe-cursor fs-4">
              <FaUser />
            </Link>
            <Button
              onClick={handleLogout}
              className="text-white logout-button text-decoration-none fw-bold btn-sm btn-danger"
            >
              LOGOUT
            </Button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Header;