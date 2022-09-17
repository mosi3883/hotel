import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import DemoHotels from '../Components/DemoHotels';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <>
      <div className='container'>
        <Navbar page='home' />
        <Header />

        <DemoHotels />
      </div>
      <Footer />
    </>
  );
};

export default Home;
