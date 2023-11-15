import "./NavBar.scss";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function NavBar() {
  return (
    <>
      <navbar className="navbar">
      <div className="navbar__container">
        <Link to="/" title="home">
          {/* <img
            src={logo}
            className="navbar__logo"
            alt="logo"
          /> */} 
          <h1 className="logo">Shoestring Café</h1>
        </Link>
        {/* this eventually be a logo for the cafe */}
        
        <BurgerMenu/>
      </div>
    </navbar>
    </>
  );
}

export default NavBar;
