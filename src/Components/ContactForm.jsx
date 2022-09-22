import React, { useContext, useState } from 'react';
import mailImg from './mailbox.png';
import './ContactForm.scss';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';
const ContactForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const fnameChangeHandler = (e) => {
    setFname(e.target.value);
  };
  const lnameChangeHandler = (e) => {
    setLname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHanlder = (e) => {
    setMessage(e.target.value);
  };
  const contactSubmitHandler = async (e) => {
    e.preventDefault();
    // validation
    if (
      fname.trim().length === 0 ||
      lname.trim().length === 0 ||
      email.trim().length === 0 ||
      message.trim().length === 0
    ) {
      Swal.fire({
        title: 'Error!',
        text: 'All Fields are required',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
      return;
    }
    // send contact data to api
    const apiUrl = 'https://portfoliorecovery.me/api/contact.php';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: fname,
          lastname: lname,
          email: email,
          message: message,
        }),
      });
      const data = await response.json();
      if (data.status) {
        if (true) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Form submited',
            showConfirmButton: false,
            timer: 1500,
          });
          setFname('');
          setLname('');
          setEmail('');
          setMessage('');
        }
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Something went wrong!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='container'>
      <form className='contact-form' onSubmit={contactSubmitHandler}>
        <h2 className='text-center heading-secondary'>Contact us</h2>
        <div className='contact-inner'>
          <div className='left-side'>
            <div className='form-group'>
              <label htmlFor='firstName' className='contact-label'>
                First name:
              </label>
              <input
                type='text'
                className='contact-input'
                onChange={fnameChangeHandler}
                value={fname}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName' className='contact-label'>
                Last name:
              </label>
              <input
                type='text'
                className='contact-input'
                onChange={lnameChangeHandler}
                value={lname}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email' className='contact-label'>
                Email address:
              </label>
              <input
                type='email'
                className='contact-input'
                id='email'
                onChange={emailChangeHandler}
                value={email}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='firstName' className='contact-label'>
                Message:
              </label>
              <textarea
                id='message'
                className='contact-textarea'
                onChange={messageChangeHanlder}
                value={message}
              ></textarea>
            </div>
          </div>
          <div className='right-side'>
            <img src={mailImg} alt='contact' className='post-img' />
          </div>
        </div>
        <div className='text-center'>
          <button className='main-btn' type='submit'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
