import React from 'react';
import "../../../styles/footer.css";
import zlogo from "../../../assets/whiteLogo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footer-body'>
      <div className='footer-details'>
        <div className='footer-logo'>
         <img src={zlogo} alt="ZScouts logo" className='footer-logo-img' />
          <div className='social-icons'>
            <a href="https://x.com/zcoutzcouts?s=21"><FaXTwitter /></a>
            <a href="https://www.facebook.com/share/16BCTeaFCK/?mibextid=wwXIfr"><FaFacebook /></a>
            <a href="https://www.instagram.com/zscoutzscouts/?__pwa=1Instagram"><FaInstagram /></a>
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