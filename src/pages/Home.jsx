import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import DemoHotels from '../Components/DemoHotels';
import Navbar from '../Components/Navbar/Navbar';
import bg from './fixedBg.jpg';
import { useEffect } from 'react';
const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return (
    <>
      <Navbar page='home' />
      <Header />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          height: '300px',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <DemoHotels />

      <Footer />
    </>
  );
};

export default Home;
