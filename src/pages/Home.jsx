import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import DemoHotels from '../Components/DemoHotels';
import Navbar from '../Components/Navbar';
import bg from './large.jpg';
const Home = () => {
  return (
    <>
      <div className='container'>
        <Navbar page='home' />
        <Header />
      </div>
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
