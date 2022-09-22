import React from 'react';

import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
import { useEffect } from 'react';
const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);
  return (
    <div>
      <Navbar page='contact' />
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
