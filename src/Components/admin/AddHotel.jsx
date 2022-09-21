import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import './AddHotel.scss';
const AddHotel = () => {
  // function escapeHtml(text) {
  //   var map = {
  //     '&': '&amp;',
  //     '<': '&lt;',
  //     '>': '&gt;',
  //     '"': '&quot;',
  //     "'": '&#039;',
  //   };

  //   return text.replace(/[&<>"']/g, function (m) {
  //     return map[m];
  //   });
  // }

  const authCtx = useContext(AuthContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState('');
  const [thumb, setThumb] = useState('');
  const [images, setImages] = useState(null);

  const renderHtml = (name, price, location, img0, img1, img2, img3) => {
    return `<div class='home'>
        <h1 class='heading-primary'>${name}</h1>
        <div class='hotel-hero'>
          <div class='hotel-image-box'>
            <img src='${img0}' alt='hotel' class='hotel-img' />
          </div>
          <div class='hotel-intro-box'>
            <h4 class='heading-4'>${name}</h4>
            <p class='hotel-price-box'>
              <b>price(per night): </b> <span class="price-value">${price}</span> NOK
            </p>
            <p class='hotel-location-box'>
              <b>Location: </b> <span class="location-value">${location}</span>
            </p>
            <div class="hotel-images-box">
             <div class="hotel-image-box">
              <img src="${img1}" title="hotel image" class="hotel-sub-img" />
             </div>
              <div class="hotel-image-box">
              <img src="${img2}" title="hotel image" class="hotel-sub-img" />
             </div>
              <div class="hotel-image-box">
              <img src="${img3}" title="hotel image" class="hotel-sub-img" />
             </div>
            </div>
          </div>
        </div>
        <div class='hotel-description'>
          <h2 class='heading-tertiary'>Description</h2>
          ${description}
         
        </div>
      </div>`;
  };

  const uploadImage = async (file) => {
    const token = authCtx.getAuthUser().token;
    const res = await fetch('https://portfoliorecovery.me/wp-json/wp/v2/media', {
      method: 'POST',
      headers: {
        'Content-Disposition': `attachment; filename="${file.name}"`,
        Authorization: `Bearer ${token}`,
        'Content-Type': file.type ?? 'image/jpeg',
      },
      body: file,
    });
    const data = await res.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = authCtx.getAuthUser().token;
    console.log(thumb.files);
    const file = thumb.files[0];
    Swal.fire({
      text: 'we are uploading your images',
      position: 'top-end',
      timerProgressBar: true,
      timer: 9000,
      showConfirmButton: false,
    });
    const data0 = await uploadImage(file);
    let data1, data2, data3;
    if (images) {
      data1 = await uploadImage(images.files[0]);
      data2 = await uploadImage(images.files[1]);
      data3 = await uploadImage(images.files[2]);

      console.log('datas', data1, data2, data3);
    }

    const apiUrl = 'https://portfoliorecovery.me/wp-json/wp/v2/posts';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'publish',
          title: name,
          content: renderHtml(
            name,
            price,
            location,
            data0.source_url,
            data1.source_url,
            data2.source_url,
            data3.source_url
          ),
          featured_media: data0.id,
        }),
      });

      const data = await response.json();
      if (data.id) {
        Swal.fire({
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          icon: 'success',
          title: 'Hotel added successfully',
        });
        setName('');
        setDescription('');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const descChangeHandler = (e) => {
    setDescription(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };

  const FeaturedChangeHandler = (e) => {
    setThumb(e.target);
  };
  const imagesChangehandler = (e) => {
    setImages(e.target);
  };
  return (
    <div className='container'>
      <h3 className='heading-tertiary'>Add new Hotel</h3>
      <form className='addHotel-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='addHotel-label'>
            Name
          </label>
          <input
            type='text'
            className='addHotel-input'
            placeholder='hotel name...'
            id='name'
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price' className='addHotel-label'>
            Price
          </label>
          <input
            type='number'
            className='addHotel-input'
            placeholder='price'
            id='price'
            onChange={priceChangeHandler}
            value={price}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='location' className='addHotel-label'>
            Location
          </label>
          <input
            type='text'
            className='addHotel-input'
            placeholder='hotel location'
            id='location'
            onChange={locationChangeHandler}
            value={location}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='featured' className='addHotel-label'>
            Featured media
          </label>
          <input
            type='file'
            className='addHotel-input'
            id='featured'
            onChange={FeaturedChangeHandler}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='images' className='addHotel-label'>
            other images(max 3)
          </label>
          <input
            type='file'
            className='addHotel-input'
            id='images'
            onChange={imagesChangehandler}
            multiple
          />
        </div>
        <div className='form-group'>
          <label htmlFor='desc' className='addHotel-label'>
            Description
          </label>
          <textarea
            className='addHotel-textarea'
            placeholder='hotel desc...'
            id='desc'
            onChange={descChangeHandler}
            value={description}
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='main-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHotel;
