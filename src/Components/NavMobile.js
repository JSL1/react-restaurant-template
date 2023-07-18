//NavMobile.js
import React, { Component } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavMobile = (props) => {
  
  const exitIcon = (<span className="material-symbols-outlined">close</span>);
  
  return (
    <div id="nav-mobile">
      <div className="menu-x" onClick={props.func}>
        {exitIcon}
      </div>
      <div className="buttons-mobile">
        <div className="mobile-link">
          <span className="nav-button">
            <Link to='../'>Home & Location</Link>
          </span>
        </div>
        <div className="mobile-link">
          <span className="nav-button">
            <Link to='/menu'>Menu</Link>
          </span>
        </div>
        <div className="mobile-link">
          <span className="nav-button">
            <Link to='/contact'>Contact</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;