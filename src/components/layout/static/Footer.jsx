import React from 'react';
import "../../../styles/footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-body'>
      <div className='footer-details'>
        <div className='footer-logo'>
         <img src="/src/assets/public/Asset 2@2x 1 (1).png" alt="ZScouts logo" className='footer-logo-img' />
          <div className='social-icons'>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        <div className='footer-contact'>
          <h3>Contact</h3>
          <a href="mailto:zscoutzscouts@gmail.com"><p>zscoutzscouts@gmail.com</p></a>
          <p>+234 905 9461 351</p>
          <p>+234 802 499 5013</p>
        </div>

        <div className='footer-address'>
          <h3>Addresses</h3>
          <p>163, Muyibi street, Olodi-Apapa, Lagos.</p>
          <p>Carat24, 24 road, Festac town, Lagos.</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>©2025 ZScouts | All rights reserved</p>
      </div>

    </div>
  )
}

export default Footer;