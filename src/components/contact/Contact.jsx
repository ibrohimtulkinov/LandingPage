import { Fragment, useState } from "react"
import "./Contact.css"
import React from 'react';
import ContactInfoComponent from "../../ourmodels/contactinfo/ContactInfo";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [testimonials, setTestimonials] = useState('');
  const [testimonialsError, setTestimonialsError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleName(event) {
    const value = event.target.value;
    setName(value);
    const hasError = value.trim().length === 0;
    setNameError(hasError);
    updateButtonDisabledState(hasError, emailError, testimonialsError);
  }

  function handleEmail(event) {
    const value = event.target.value;
    setEmail(value);
    const hasError = value.trim().length === 0;
    setEmailError(hasError);
    updateButtonDisabledState(nameError, hasError, testimonialsError);
  }

  function handleTestimonials(event) {
    const value = event.target.value;
    setTestimonials(value);
    const hasError = value.trim().length === 0;
    setTestimonialsError(hasError);
    updateButtonDisabledState(nameError, emailError, hasError);
  }

  function updateButtonDisabledState(nameErr, emailErr, testimonialsErr) {
    setButtonDisabled(nameErr || emailErr || testimonialsErr);
  }

  return (
    <Fragment>
    <div className="contact-container">
      <div className="contact-flex">
        <div className="col-6">
          <h1>IF YOU HAVE QUESTIONS PLEASE CONTACT US</h1>
          <p>Fill fields and find approximate your repair</p>
          <div className="input-flex">
            <form>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Type your name"
                className="control"
                onChange={handleName}
                style={{
                  border: nameError ? '1px solid red' : null
                }}
              />
            </form>
            <form>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="Type your Email Address"
                className="control"
                onChange={handleEmail}
                style={{
                  border: emailError ? '1px solid red' : null
                }}
              />
            </form>
          </div>
          <form className="mt-4">
            <textarea
              type="text"
              id="testimonials"
              value={testimonials}
              className="control-test"
              placeholder="Tell us about you and about your proposal"
              onChange={handleTestimonials}
              style={{
                border: testimonialsError ? '1px solid red' : null
              }}
            />
          </form>
          <button
             className="contact-button"
             disabled={buttonDisabled}
             style={{
               cursor: buttonDisabled ? 'not-allowed' : 'pointer',
           }}
           >
            Send Message
         </button>
        </div>
        <div className="col-5">
           <ContactInfoComponent />
        </div>
      </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.9377575964193!2d69.28444346962935!3d41.35529730487583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0015f546b9%3A0xcb2ded8936a004cf!2sAL-RAQAM%20Hub!5e1!3m2!1sru!2s!4v1716378522782!5m2!1sru!2s" width="100%" height="600px" style={{border:0, marginTop: "5rem"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Fragment>
   
  );
};

export default function Contact() {
  return <ContactForm />;
}