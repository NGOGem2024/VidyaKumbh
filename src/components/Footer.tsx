// import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/vidyalogo2.png";

const Footer = () => {
  return (
    <footer className="futuristic-footer">
      <div className="footer-content">
        <div className="footer-section brand">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="VidyaKumbh" className="logoimg" />
          </Link>
          <p className="brand-slogan">Discover Your Future</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#search">Search Colleges</a>
            </li>
            <li>
              <a href="#compare">Compare Institutions</a>
            </li>
            <li>
              <a href="#resources">Student Resources</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Connect With Us</h3>
          <p>Email: info@VidyaKumbh.in</p>
          <p>Phone: (555) 123-4567</p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 VidyaKumbh. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
