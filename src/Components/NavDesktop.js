//NavDesktop.js
import React, { Component } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

const NavDesktop = () => {
  return (
    <div className="buttons-main">
      <span className="nav-button">
        <Link to='../'>Home & Location</Link>
      </span>
      <span className="nav-button">
        <Link to='/menu'>Menu</Link>
      </span>
      <span className="nav-button">
        <Link to='/contact'>Contact Us</Link>
      </span>
    </div>
  );
}

export default NavDesktop;