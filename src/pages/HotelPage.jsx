import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hotel from '../Components/Hotel';
import Navbar from '../Components/Navbar';

const HotelPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <div className='container'>
        <Navbar />
        <Hotel />
      </div>
      <Footer />
    </div>
  );
};

export default HotelPage;
