import React from 'react';
import './ReservationForm.scss';
const ReservationForm = () => {
  return (
    <div className='container'>
      <form className='reservation-form'>
        <h2 className='heading-secondary text-center'>Reservation Form</h2>
        <div className='reserve-form-content'>
          <div className='form-group'>
            <label htmlFor='firstName' className='reserve-label'>
              First name
            </label>
            <input type='text' id='firstName' className='reserve-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName' className='reserve-label'>
              Last name
            </label>
            <input type='text' id='lastName' className='reserve-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='reserve-label'>
              Email Address
            </label>
            <input type='email' id='email' className='reserve-input' />
          </div>
          <div className='form-group'>
            <label htmlFor='phone' className='reserve-label'>
              Phone number
            </label>
            <input type='text' id='phone' className='reserve-input' />
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-guests'>
                <label htmlFor='guests' className='reserve-label'>
                  Number of guests
                </label>
                <input type='number' className='reserve-input reserve-input__small' />
              </div>
              <div className='input-checkin'>
                <label htmlFor='checkin' className='check-label'>
                  Check in
                </label>
                <input type='date' className='check-input' />
              </div>
              <div className='input-checkout'>
                <label htmlFor='checkout' className='check-label'>
                  Check out
                </label>
                <input type='date' className='check-input' />
              </div>
            </div>
          </div>
          <div className='form-group text-center'>
            <button type='submit' className='main-btn'>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
