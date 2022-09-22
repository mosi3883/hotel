import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './ReservationForm.scss';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
const ReservationForm = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [hotelId, setHotelId] = useState(0);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  useEffect(() => {
    setHotelId(id);
  }, [id]);

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    // try to submit

    const apiUrl = 'https://portfoliorecovery.me/api/reservation.php';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          hotel_id: +hotelId,
          firstname: fname,
          lastname: lname,
          email: email,
          phone: phone,
          number_of_guests: +guest,
          checkin: checkIn,
          checkout: checkOut,
        }),
      });
      const data = await response.json();
      if (data.status) {
        Swal.fire({
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          icon: 'success',
          title: 'Reservation submited sucessfully',
        });

        setFname('');
        setLname('');
        setEmail('');
        setPhone('');
        setGuest('');
        setCheckIn('');
        setCheckOut('');
        setHotelId(0);
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

  const fnameChangeHandler = (e) => {
    setFname(e.target.value);
  };

  const hotelIdChangeHandler = (e) => {
    setHotelId(e.target.value);
  };

  const lnameChangeHandler = (e) => {
    setLname(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const guestsChangeHandler = (e) => {
    setGuest(e.target.value);
  };

  const checkInChangeHandler = (e) => {
    setCheckIn(e.target.value);
  };

  const checkOutChangeHandler = (e) => {
    setCheckOut(e.target.value);
  };
  return (
    <div className='container'>
      <form className='reservation-form' onSubmit={formSubmitHandler}>
        <h2 className='heading-secondary text-center'>Reservation Form</h2>
        <div className='reserve-form-content'>
          <div className='form-group'>
            <label htmlFor='firstName' className='reserve-label'>
              First name
            </label>
            <input
              type='text'
              id='firstName'
              className='reserve-input'
              onChange={fnameChangeHandler}
              value={fname}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName' className='reserve-label'>
              Last name
            </label>
            <input
              type='text'
              id='lastName'
              className='reserve-input'
              onChange={lnameChangeHandler}
              value={lname}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='hotel' className='reserve-label'>
              hotel id
            </label>
            <input
              type='number'
              id='hotel'
              className='reserve-input'
              onChange={hotelIdChangeHandler}
              value={hotelId}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email' className='reserve-label'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              className='reserve-input'
              onChange={emailChangeHandler}
              value={email}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='phone' className='reserve-label'>
              Phone number
            </label>
            <input
              type='text'
              id='phone'
              className='reserve-input'
              onChange={phoneChangeHandler}
              value={phone}
              required
            />
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-guests'>
                <label htmlFor='guests' className='reserve-label'>
                  Number of guests
                </label>
                <input
                  type='number'
                  className='reserve-input reserve-input__small'
                  onChange={guestsChangeHandler}
                  value={guest}
                  required
                />
              </div>
              <div className='input-checkin'>
                <label htmlFor='checkin' className='check-label'>
                  Check in
                </label>
                <input
                  type='date'
                  className='check-input'
                  onChange={checkInChangeHandler}
                  value={checkIn}
                  required
                />
              </div>
              <div className='input-checkout'>
                <label htmlFor='checkout' className='check-label'>
                  Check out
                </label>
                <input
                  type='date'
                  className='check-input'
                  onChange={checkOutChangeHandler}
                  value={checkOut}
                  required
                />
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
