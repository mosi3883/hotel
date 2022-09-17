import React from 'react';
import './Footer.scss';
import { HiOutlineMail } from 'react-icons/hi';
import { GoCalendar } from 'react-icons/go';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { TbSocial } from 'react-icons/tb';
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div>
          <h4 className='heading-4 text-center'>Contact us</h4>
          <div className='addresses'>
            <div className='address-email'>
              <HiOutlineMail className='address-icon' />
              <h5 className='heading-5 text-center'>By email</h5>
              <p>contact@example.com</p>
            </div>
            <div className='address-date'>
              <GoCalendar className='address-icon' />
              <h5 className='heading-5 text-center'>Everyday on mondays</h5>
              <p>Lorem ipsum dolor sit.</p>
            </div>
            <div className='address-phone'>
              <AiOutlinePhone className='address-icon' />
              <h5 className='heading-5 text-center'>By phone</h5>
              <p>phone : +47-51-45-31-85-41</p>
            </div>
            <div className='address-location'>
              <HiOutlineLocationMarker className='address-icon' />
              <h5 className='heading-5 text-center'>our agency</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, id!</p>
            </div>
            <div className='address-socials'>
              <TbSocial className='address-icon' />
              <h5 className='heading-5 text-center'>on social media</h5>
              <div className='socials'>
                <a href='https://facebook.com/' target='_blank' rel='noreferrer'>
                  <BsFacebook />
                </a>
                <a href='https://instagram.com/' target='_blank' rel='noreferrer'>
                  <BsInstagram />
                </a>
                <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
                  <BsLinkedin />
                </a>
                <a href='https://youtube.com/' target='_blank' rel='noreferrer'>
                  <BsYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='email-sub-box'>
          <div className='email-sub-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ea. Et, quod,
            fugiat ut eos neque veritatis eius in, saepe facilis debitis ullam eligendi rem
            porro unde soluta! Odio, sit.
          </div>
          <div className='email-sub-form'>
            <form>
              <input type='email' className='email-sub-input' />
              <button type='submit' className='email-sub-btn'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
