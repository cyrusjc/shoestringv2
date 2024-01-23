import React, { useState } from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";

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
              <li className="menu-items__items">
                <Link
                  to="/"
                  title="home"
                  className="burger-menu__link"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="menu-items__items">
                <Link
                  to="/Menu"
                  title="menu"
                  className="burger-menu__link"
                  onClick={toggleMenu}
                >
                  Menu
                </Link>
              </li>
              <li className="menu-items__items">
                <Link
                  to="/contact"
                  title="contact"
                  className="burger-menu__link"
                  onClick={toggleMenu}
                >
                  Contact Us!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
