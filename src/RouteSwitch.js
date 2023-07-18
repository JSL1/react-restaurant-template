import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import Menu from './Components/Menu';
import Contact from './Components/Contact';

const RouteSwitch = () => {
  return (

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

  );
}

export default RouteSwitch;