// Footer.js
import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h5 className="footer-heading">About Us</h5>
            <ul>
              <li><a href="#">Company Information</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="footer-heading">Help</h5>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h5 className="footer-heading">Legal</h5>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CarWale. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.instagram.com" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://play.google.com" target="_blank">
              <i className="fab fa-google-play"></i>
            </a>
            <a href="https://twitter.com" target="_blank" >
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
