import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from './logo.png';
import { FaSearch, FaAlignJustify } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../Modal';
import MainNavList from './MainNavList';
import SearchForm from './SearchForm';
const Navbar = ({ page }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  const openNavbar = () => {
    setShowNavbar(true);
  };

  const closeNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <nav className='main-nav'>
      <img src={logo} alt='logo' className='logo' />
      <MainNavList page={page} />
      {showNavbar && (
        <Modal closeModal={closeNavbar}>
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
          <SearchForm />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
