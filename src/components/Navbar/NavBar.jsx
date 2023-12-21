import "./NavBar.scss";
import logo from "../../assets/logos/landing_resized.png";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 70) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <>
      <header
        className={
          navbar ? "primary-header primary-header__bg" : "primary-header"
        }
      >
        <div className="primary-header__inner">
          <span className="primary-header__logo">
            <Link to="/" title="home">
              <img src={logo} className="primary-header__logo" alt="logo" />
              {/* <h1 className="logo">Shoestring Café</h1> */}
            </Link>
          </span>
          <div className="primary-header__nav-links">
            <Link to="/" title="home" className="primary-header__buttons">
              Home
            </Link>
            <Link to="/Menu" title="menu" className="primary-header__buttons">
              Menu
            </Link>
            <Link to="/" title="home" className="primary-header__buttons">
              About
            </Link>
          </div>
          <div className="primary-header__hamburg">
            <BurgerMenu />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
