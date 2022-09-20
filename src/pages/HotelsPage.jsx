import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Hotels from '../Components/Hotels';
const HotelsPage = () => {
  return (
    <>
      <Navbar page='hotels' />
      <Hotels />

      <Footer />
    </>
  );
};

export default HotelsPage;
