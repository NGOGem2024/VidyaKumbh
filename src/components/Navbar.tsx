import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/vidyalogo2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="VidyaKumbh" className="logoimg" />
        </Link>
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="leftcnt">
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/colleges" className="nav-link">
                Colleges
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alerts" className="nav-link">
                Alerts
              </Link>
            </li> */}
          </ul>
          {/* <div className="signbtndiv">
            <button className="loginbtn">
              <Link to="/register" className="signuplink">
                Sign Up
              </Link>
            </button>
            <button className="loginbtn">
              <Link to="/login" className="signuplink">
                Login
              </Link>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
