
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./NavBar.scss";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setNavbar(window.scrollY > 70);
    };

    window.addEventListener("scroll", changeBackground);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header className={navbar ? "primary-header primary-header__bg" : "primary-header"}>
      <div className="primary-header__inner">
        <span className="logo">
          <Link to="/" title="home">
            <h1 className="logo">Shoestring Café</h1>
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
  );
}

export default NavBar;
