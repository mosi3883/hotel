import React from 'react';
import './Login.scss';
import { FaUser, FaLock } from 'react-icons/fa';
const Login = () => {
  return (
    <form autoComplete='off' className='login-form'>
      <h3 className='heading-tertiary text-center'>Login</h3>
      <div className='form-group'>
        <FaUser className='input-icon' />
        <input type='text' id='username' placeholder='Username' className='login-input' />
      </div>
      <div className='form-group'>
        <FaLock className='input-icon' />
        <input type='text' id='password' className='login-input' placeholder='password' />
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
