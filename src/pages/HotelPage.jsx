import React from 'react';
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hotel from '../Components/Hotel';
import Navbar from '../Components/Navbar/Navbar';

const HotelPage = () => {
  const { id } = useParams();
  useEffect(() => {
    document.title = 'Hotel detail';
  }, []);
  return (
    <>
      <Navbar />
      <Hotel id={id} />

      <Footer />
    </>
  );
};

export default HotelPage;
