import React from 'react';
import { Link } from 'react-router-dom';
const MainNavList = ({ page, mobile }) => {
  return (
    <ul className='main-nav__list' style={{ display: `${mobile ? 'flex' : ''}` }}>
      <li className='main-nav__item'>
        <Link to='/' className={`main-nav__link ${page === 'home' ? 'nav-active' : ''}`}>
          Home
        </Link>
      </li>
      <li className='main-nav__item'>
        <Link
          to='/hotels'
          className={`main-nav__link ${page === 'hotels' ? 'nav-active' : ''}`}
        >
          Hotels
        </Link>
      </li>
      <li className='main-nav__item'>
        <Link
          to='/reserve-now'
          className={`main-nav__link ${page === 'book-now' ? 'nav-active' : ''}`}
        >
          Book now
        </Link>
      </li>
      <li className='main-nav__item'>
        <Link
          to='/contact'
          className={`main-nav__link ${page === 'contact' ? 'nav-active' : ''}`}
        >
          contact us
        </Link>
      </li>
    </ul>
  );
};

export default MainNavList;
