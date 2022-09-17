import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ReservationForm from '../Components/ReservationForm';

const ReservationPage = () => {
  return (
    <div>
      <div className='container'>
        <Navbar page='book-now' />
        <ReservationForm />
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
