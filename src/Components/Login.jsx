import React from 'react';
import './Login.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  if (authCtx.isLoggedIn()) {
    navigate('/admin');
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginHandler = (e) => {
    e.preventDefault();
    // validation
    if (username.trim().length === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'username cant be empty',
        icon: 'error',
        confirmButtonText: 'ok',
      });
      return;
    }
    if (password.trim().length < 6) {
      Swal.fire({
        title: 'Error!',
        text: 'password should be at least 6 character',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
      return;
    }
    authCtx.login(username, password);
  };
  const userChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form autoComplete='off' className='login-form' onSubmit={loginHandler}>
      <h3 className='heading-tertiary text-center'>Login</h3>
      <div className='form-group'>
        <FaUser className='input-icon' />
        <input
          type='text'
          id='username'
          placeholder='Username'
          className='login-input'
          onChange={userChangeHandler}
          value={username}
        />
      </div>
      <div className='form-group'>
        <FaLock className='input-icon' />
        <input
          type='text'
          id='password'
          className='login-input'
          placeholder='password'
          onChange={passwordChangeHandler}
          value={password}
        />
      </div>
      <div className='form-group text-center'>
        <button type='submit' className='main-btn d-block'>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
