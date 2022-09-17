import React from 'react';
import './DemoHotels.scss';
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
import hotel11 from './hotels/gal-11.jpg';
import hotel12 from './hotels/gal-12.jpg';
import hotel13 from './hotels/gal-13.jpg';
import hotel14 from './hotels/gal-14.jpg';
const DemoHotels = () => {
  return (
    <section className='section-hotel'>
      <div className='container'>
        <div className='hotels-inner'>
          <h3 className='heading-tertiary'>
            Hard to Decide? Consider all hotels and details!
          </h3>
          <div className='hotels'>
            <div className='hotel'>
              <img src={hotel1} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel2} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel3} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel4} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel5} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel6} alt='hotel' className='hotel-img' />
            </div>
            {/* <div className='hotel'>
              <img src={hotel7} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel8} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel9} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel10} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel11} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel12} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel13} alt='hotel' className='hotel-img' />
            </div>
            <div className='hotel'>
              <img src={hotel14} alt='hotel' className='hotel-img' />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHotels;
