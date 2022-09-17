import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hotels from '../Components/Hotels';
const HotelsPage = () => {
  return (
    <div>
      <div className='container'>
        <Navbar page='hotels' />
        <Hotels />
      </div>
      <Footer />
    </div>
  );
};

export default HotelsPage;
