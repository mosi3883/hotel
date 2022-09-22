import React from 'react';
import { useEffect } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';
import ReservationForm from '../Components/ReservationForm';

const ReservationPage = () => {
  useEffect(() => {
    document.title = 'Reservation';
  }, []);
  return (
    <>
      <Navbar page='book-now' />
      <ReservationForm />

      <Footer />
    </>
  );
};

export default ReservationPage;
