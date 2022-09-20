import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login';
import Footer from '../Components/Footer';
const LoginPage = () => {
  return (
    <>
      <Navbar page='login' />
      <Login />

      <Footer />
    </>
  );
};

export default LoginPage;
