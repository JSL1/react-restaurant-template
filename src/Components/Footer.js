//Footer.js
import React, { Component } from 'react';

const Footer2 = () => {
  return (
    <div id="footer2">
      &copy; 2023 Jeremy St Pierre <img src="images/github-mark.svg" />
    </div>
  );
}

const Footer = () => {
  return (
    <>
    <div id="footer">
      <span className="logo-main">Goncharov's</span>
      <div className="address">
        Goncharov's <br />
        1108 St Louis<br />
        Windsor ON<br />
        519-555-3877<br />
      </div>
      <div className="nav-bottom">
        HOME/LOCATIONS<br />MENU<br />CONTACT<br />
      </div>
    </div>
    <Footer2 />
    </>
  );
}

export default Footer;