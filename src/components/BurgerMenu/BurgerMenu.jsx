import React, { useState } from "react";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-menu-button" onClick={toggleMenu}>
        <span className="burger-menu-button__bar"></span>
        <span className="burger-menu-button__bar"></span>
        <span className="burger-menu-button__bar"></span>
      </div>
      {isOpen && (
        <div className="menu-modal">
          <div className="menu-items">
            <span className="exit-button" onClick={closeMenu}>
              &times;
            </span>
            <ul className="menu-items__list">
              <li className="menu-items__items">Home</li>
              <li className="menu-items__items">About</li>
              <li className="menu-items__items">Menu</li>
              <li className="menu-items__items">Hours & Location</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
