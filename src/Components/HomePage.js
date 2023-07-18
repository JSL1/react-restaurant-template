//HomePage.js
import React, { Component } from 'react';

const HomePage = () => {
  
  const PizzaIcon = <span className="material-symbols-outlined h1">local_pizza</span>;
  const fireplaceIcon = <span className="material-symbols-outlined h1">fireplace</span>;
  const carIcon = <span className="material-symbols-outlined">local_taxi</span>

  return (
    <>
      <div className="description">
        <div className="description-container">
          <h2>Original wood-fired pizza</h2>
          {fireplaceIcon}
           <h2>est. 1972</h2>
            <div className="p-mid">
            <h3>
              
              Goncharov's has been serving delicious pizza since 1972. Our family recipe is cooked to perfection in our iconic wood-fired oven. Unquestionably the best tasting, highest quality pizza or your money back. Come in to Goncharov's tonight!
              
            </h3>
            </div>
          </div>
        </div>
        <div className="delivery">
          <h3>
            FAST, FREE DELIVERY!
            {carIcon}
          </h3>
          <h4>
            Just don't forget to tip the driver!
          </h4>
        </div>
        <div className="decription address">
          <address>
            <h3>Goncharov's Original Wood-fired Pizza</h3>
            <h3>1108 St. Louis Street</h3>
            <h3>Windsor ON</h3>
            <h3>519-555-3877</h3>
          </address>
          <div id="pizza-location">
            
          </div>
          <div id="oven-photo">
            
          </div>
        </div>
    </>
  );
}

export default HomePage;