import React from 'react';
import "./ContactInfo.css"

const ContactInfo = () => {
  return (
    <div className="contact-info-container">
         <div className="contact-info-item">
        <div className="contact-info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
          </svg>
        </div>
        <div className="contact-info-content">
          <h3 className="contact-info-heading">HEAD OFFICE:</h3>
          <p className="contact-info-text">Tashkent Yunusobod Shahriston street 3, 14</p>
        </div>
      </div>
      <div className="contact-info-item mt-5">
        <div className="contact-info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1 1 0 011.09-.27 12.31 12.31 0 003.89.63 1 1 0 011 1v3.51a1 1 0 01-1 1A18 18 0 013 6a1 1 0 011-1H7.5a1 1 0 011 1 12.31 12.31 0 00.63 3.89 1 1 0 01-.27 1.09z"/>
          </svg>
        </div>
        <div className="contact-info-content">
          <h3 className="contact-info-heading">PHONES:</h3>
          <p className="contact-info-text">+998 (97) 777-61-46</p>
        </div>
      </div>
      <div className="contact-info-item mt-5">
        <div className="contact-info-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </div>
        <div className="contact-info-content">
          <h3 className="contact-info-heading">WRITE US:</h3>
          <p className="contact-info-text">
            <a href="mailto:info@4dx.uz">info@4dx.uz</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;