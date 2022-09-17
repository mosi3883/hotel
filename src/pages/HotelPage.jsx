import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hotel from '../Components/Hotel';
import Navbar from '../Components/Navbar';

const HotelPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className='container'>
        <Navbar />
        <Hotel id={id} />
      </div>
      <Footer />
    </>
  );
};

export default HotelPage;
