import React, { Component } from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';
import { useState, useEffect} from 'react';

const Hamburger = (props) => {
  
  const hamburgerIcon = (<span className="material-symbols-outlined">menu</span>);
  
  return (
    <div id="hamburger" onClick={props.func}>
      {hamburgerIcon}
    </div>
  );
}

const Header = () => {
  
  const pizzaIcon = (<span className="material-symbols-outlined h1">local_pizza</span>);
  
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const toggle = () => {
    setMenuIsOpen(true);
  }
  
  const toggleOff = () => {
    setMenuIsOpen(false);
  }
  
  return (
  <div id="header">
    <span className="logo-main">
      {pizzaIcon}Goncharov's
    </span>
    <NavDesktop />
    {menuIsOpen ? <NavMobile func={toggleOff} /> : <Hamburger func={toggle} />}
  </div>
  );
}

export default Header;