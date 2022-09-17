import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from './logo2.png';
import { FaSearch, FaAlignJustify } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';
import MainNavList from './MainNavList';
const Navbar = ({ page }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const openNavbar = () => {
    setShowNavbar(true);
  };

  // useEffect(() => {
  //   return () => setShowSearchModal(false);
  // });

  return (
    <nav className='main-nav'>
      <img src={logo} alt='logo' className='logo' />
      <MainNavList page={page} />
      {showNavbar && (
        <Modal closeModal={() => setShowNavbar(false)}>
          <MainNavList mobile={true} />
        </Modal>
      )}
      <ul className='main-nav__auth-list'>
        <li className='main-nav__auth-item'>
          <Link
            to='/login'
            className={`main-nav__auth-link ${page === 'login' ? 'nav-active' : ''}`}
          >
            Login
          </Link>
        </li>
        <li className='main-nav__auth-item'>
          <button className='search-btn' onClick={openSearchModal}>
            <FaSearch />
          </button>
        </li>
        <li className='main-nav__auth-item'>
          <button className='ham-btn' onClick={openNavbar}>
            <FaAlignJustify />
          </button>
        </li>
      </ul>

      {showSearchModal && (
        <Modal closeModal={closeSearchModal}>
          <form className='search-form' onSubmit={handleSearchSubmit}>
            <div className='autocomplete'>
              <input type='text' className='search-input' placeholder='Search ...' autoFocus />
              <div className='autocomplete-items'>
                <Link to='/hotel/25' className='autocomplete-link'>
                  hotel 25
                </Link>
                <Link to='/hotel/32' className='autocomplete-link'>
                  hotel 32
                </Link>
              </div>
            </div>

            <button type='submit' className='search-submit-btn'>
              Search
            </button>
          </form>
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
