import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import './AdminNavbar.css';
const AdminNavbar = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const username = authCtx.getAuthUser().name;
  return (
    <nav className='admin-nav'>
      <p className='welcome'>Welcome {username}</p>
      <ul className='admin-nav-list'>
        <li className='admin-nav-item'>
          <Link to='/admin/new-hotel' className='admin-nav-link'>
            Add Hotel
          </Link>
        </li>
        <li className='admin-nav-item'>
          <Link to='/admin' className='admin-nav-link'>
            Reservation List
          </Link>
        </li>
        <li className='admin-nav-item'>
          <Link
            to='#'
            className='admin-nav-link'
            onClick={(e) => {
              e.preventDefault();
              authCtx.logout();
              navigate('/');
            }}
          >
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
