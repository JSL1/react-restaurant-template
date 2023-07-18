//Contact.js
import React, { Component } from 'react';

const Contact = () => {
  return (
    <div id="contact-main">
      <h2>Get in contact with us</h2>
      <h3>Your business and feedback are greatly appreciated.</h3>
      <form id="contact-form">
      <label for="name">Your name:</label>
      <input type="text" name="name" className="textbox-sm" placeholder="John Doe" />
      <label for="email">Your email:</label>
      <input type="email" name="email" placeholder="johndoe@hotmales.com" className="textbox-sm" />
      <label for="text">Your comments:</label>
      <textarea className="textbox-l" size="500" />
      <input type="submit" name="submit" className="button" />
      </form>
    </div>
  );
}

export default Contact;

