import React, { useState } from 'react';
import './BurgerMenu.scss'; 

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
      <div className="burger-menu-button" onClick={toggleMenu}>
        <span className="burger-menu-button__bar"></span>
        <span className="burger-menu-button__bar"></span>
        <span className="burger-menu-button__bar"></span>
      </div>
      {isOpen && (
        <div className="menu-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Hours & Location</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
