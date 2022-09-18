import React, { useState } from 'react';
import postImg from './post_mail_mailbox.png';
import './ContactForm.scss';
import Swal from 'sweetalert2';
const ContactForm = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
  const contactSubmitHandler = (e) => {
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
    if (true) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Form submited',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
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
            >
              {message}
            </textarea>
          </div>
        </div>
        <div className='right-side'>
          <img src={postImg} alt='contact' className='post-img' />
        </div>
      </div>
      <div className='text-center'>
        <button className='main-btn' type='submit'>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
