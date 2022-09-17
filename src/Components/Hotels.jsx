import React from 'react';
import styles from './Hotels.module.css';
import hotel1 from './hotels/gal-1.jpg';
import hotel2 from './hotels/gal-2.jpg';
import hotel3 from './hotels/gal-3.jpg';
import hotel4 from './hotels/gal-4.jpg';
import hotel5 from './hotels/gal-5.jpg';
import hotel6 from './hotels/gal-6.jpg';
import hotel7 from './hotels/gal-7.jpg';
import hotel8 from './hotels/gal-8.jpg';
import hotel9 from './hotels/gal-9.jpg';
import hotel10 from './hotels/gal-10.jpg';

import { FaMapMarkerAlt, FaMoneyCheckAlt } from 'react-icons/fa';
const Hotels = () => {
  return (
    <div className={styles.hotels}>
      <div className={styles.hotel}>
        <img src={hotel1} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel2} alt='hotel2' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel3} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel4} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel5} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel6} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel7} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel8} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel9} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
      <div className={styles.hotel}>
        <img src={hotel10} alt='hotel' className={styles['hotel-img']} />
        <span className={styles['hotel-name']}>Beautiful Familiy House</span>
        <div className={styles['hotel-location']}>
          <FaMapMarkerAlt className={styles['location-icon']} />
          <p className={styles['hotel-info']}>USA</p>
        </div>
        <div class={styles['hotel-price']}>
          <FaMoneyCheckAlt className={styles['price-icon']} />
          <p className={styles['hotel-info']}>250$</p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
