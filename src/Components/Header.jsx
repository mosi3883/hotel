import React from 'react';
import './Header.scss';
import heroImg from './hero.jpg';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='hero'>
          <div className='hero-text'>
            <h2 className='hero-text-heading'>Easily find where to stay in brgen!</h2>
            <p className='hero-text-paragraph'>
              There are many types of hotel, big and small. Big hotels, which are part of a
              'group', offer guests a standard that does not vary from one location to another.
              Hotels can be awarded 'Stars' if their facilities match.
            </p>
            <div></div>
          </div>
          <div className='hero-img-box'>
            <img src={heroImg} alt='hero' className='hero-img' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
