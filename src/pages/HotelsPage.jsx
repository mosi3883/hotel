import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import Hotels from '../Components/Hotels';
import { useEffect } from 'react';
const HotelsPage = () => {
  useEffect(() => {
    document.title = 'Hotels';
  }, []);
  return (
    <>
      <Navbar page='hotels' />
      <Hotels />

      <Footer />
    </>
  );
};

export default HotelsPage;
