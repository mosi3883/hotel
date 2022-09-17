import React from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
const Contact = () => {
  return (
    <div>
      <div className='container'>
        <Navbar page='contact' />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
