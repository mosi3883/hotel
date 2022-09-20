import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ReservationForm from '../Components/ReservationForm';

const ReservationPage = () => {
  return (
    <>
      <Navbar page='book-now' />
      <ReservationForm />

      <Footer />
    </>
  );
};

export default ReservationPage;
