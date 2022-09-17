import React from 'react';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';
import Footer from '../Components/Footer';
const LoginPage = () => {
  return (
    <div>
      <div className='container'>
        <Navbar page='login' />
        <Login />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
