import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../navbarbutton/Button';
import { LangContext } from "../../context/langContext";
import { content } from "../../localization/content";
import LoadingSpinner from '../loading/Loading';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { lang, setLang } = useContext(LangContext);


  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 600); 
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <nav className="navbar">
        <a href="#home" className='no-underline'>
          <div className='d-flex align-items-center gap-2'>
            <img src={Logo} className="logo" alt="Logo" />
            <span style={{ fontSize: "25px", color: "#34bdbd", cursor: "pointer" }}>D-Clinics</span>
          </div>
        </a>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#home"> {content[lang]?.home} </a>
          <a href="#secondlines">For Whom</a>
          <a href="#works">Works</a>
          <a href="#models">Our Models</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <select
            id="language"
            value={lang}
            className="language-select"
            onChange={(e) => {
              setLang(e.target.value);
              setLoading(true);
            }}
          >
            <option value="en">en</option>
            <option value="ru">ru</option>
            <option value="uz">uz</option>
          </select>
        </div>

        <div className="navbar-button">
          <Button>Get Started</Button>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {loading && <LoadingSpinner loading={loading} />}
    </>
  );
}
