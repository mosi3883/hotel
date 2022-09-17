import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ReservationForm from '../Components/ReservationForm';

const ReservationPage = () => {
  return (
    <>
      <div className='container'>
        <Navbar page='book-now' />
        <ReservationForm />
      </div>
      <Footer />
    </>
  );
};

export default ReservationPage;
