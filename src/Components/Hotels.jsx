import React, { useState } from 'react';
import styles from './Hotels.module.css';

import { FaMapMarkerAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
const Hotels = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchHotels = async () => {
    try {
      const res = await fetch(
        'https://portfoliorecovery.me/wp-json/wp/v2/posts?_embed&per_page=99'
      );
      const data = await res.json();
      setHotels(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className='container'>
      <div className={styles.hotels}>
        {loading && (
          <ReactLoading
            className='loading'
            type='bars'
            style={{ color: 'var(--color-one)' }}
          />
        )}
        {!loading &&
          hotels.map((hotel) => {
            const hotelThumb =
              hotel['_embedded']['wp:featuredmedia']?.[0].media_details.sizes?.large
                ?.source_url ??
              hotel['_embedded']['wp:featuredmedia']?.[0].media_details.sizes?.full
                ?.source_url;

            const parser = new DOMParser();
            const content = parser.parseFromString(hotel.content.rendered, 'text/html');
            const price = content.getElementsByClassName('price-value')?.[0]?.textContent ?? 0;
            const location =
              content.getElementsByClassName('location-value')?.[0]?.textContent ?? 'Paris';
            return (
              <div
                className={styles.hotel}
                key={hotel.id}
                onClick={() => navigate('/hotel/' + hotel.id)}
              >
                <img src={hotelThumb} alt='hotel' className={styles['hotel-img']} />
                <span className={styles['hotel-name']}>{hotel.title.rendered}</span>
                <div className={styles['hotel-location']}>
                  <FaMapMarkerAlt className={styles['location-icon']} />
                  <p className={styles['hotel-info']}>{location}</p>
                </div>
                <div className={styles['hotel-price']}>
                  <FaMoneyCheckAlt className={styles['price-icon']} />
                  <p className={styles['hotel-info']}>{price} NOK</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Hotels;
