import React from 'react';
import postImg from './post_mail_mailbox.png';
import './ContactForm.scss';
const ContactForm = () => {
  return (
    <form className='contact-form'>
      <h2 className='text-center heading-secondary'>Contact us</h2>
      <div className='contact-inner'>
        <div className='left-side'>
          <div className='form-group'>
            <label htmlFor='firstName' className='contact-label'>
              First name:
            </label>
            <input type='text' className='contact-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName' className='contact-label'>
              Last name:
            </label>
            <input type='text' className='contact-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='contact-label'>
              Email address:
            </label>
            <input type='email' className='contact-input' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='firstName' className='contact-label'>
              Message:
            </label>
            <textarea id='message' className='contact-textarea'></textarea>
          </div>
        </div>
        <div className='right-side'>
          <img src={postImg} alt='contact' className='post-img' />
        </div>
      </div>
      <div className='text-center'>
        <button className='main-btn'>Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
