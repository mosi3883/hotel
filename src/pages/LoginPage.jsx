import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Components/Login';
import Footer from '../Components/Footer';
import { useEffect } from 'react';
const LoginPage = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);
  return (
    <>
      <Navbar page='login' />
      <Login />

      <Footer />
    </>
  );
};

export default LoginPage;
