import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import Icons from "../Icons/Icons";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaYelp } from "react-icons/fa";

export default function FooterWithLogo() {
  return (
    <>
      <footer className="footer main-colour-text ">
        <span className="footer-container__main-heading">
          <h2 className="footer-container__title1">Shoestring</h2>
          <h2 className="footer-container__title2"> Cafe</h2>
        </span>
        <div className="text-center` footer-container">
          <Row className="footer-container__main">
            <Col className="footer-container__element">
              <h2 className="footer-container__heading">Hours</h2>
              <p className="footer-container__text"> Monday 5pm to 10 pm</p>
              <p className="footer-container__text"> Tuesday 5pm to 10 pm </p>
              <p className="footer-container__text"> Wednesday 5pm to 10 pm </p>
              <p className="footer-container__text"> Thursday 5pm to 10 pm </p>
              <p className="footer-container__text"> Friday 5pm to 10 pm </p>
              <p className="footer-container__text"> Saturday 5pm to 10 pm </p>
              <p className="footer-container__text"> Sunday 5pm to 10 pm </p>
            </Col>
            <Col className="footer-container__element">
              <h2 className="footer-container__heading">Contact</h2>
              <p className="footer-container__text"> 604 232-0900</p>
              <p className="footer-container__text">shoestringcafe@gmail.com</p>
              <p className="footer-container__text">4611 No 6 Rd #180</p>
              <p className="footer-container__text">Richmond, BC V6V 1Z7</p>
              <div className="icons-row">
                <Icons
                  url="//www.instagram.com/shoestringcafe"
                  icon={<FiInstagram />}
                />
                <Icons
                  url="//www.facebook.com/p/Shoestring-Cafe-100070670794392/?locale=en_GB"
                  icon={<FaFacebook />}
                />
                <Icons
                  url="//www.yelp.ca/biz/shoestring-cafe-richmond"
                  icon={<FaYelp />}
                />
              </div>
            </Col>
          </Row>
        </div>

        <Row className="trademark">
          <div>© {new Date().getFullYear()} Shoestring Cafe</div>
        </Row>
      </footer>
    </>
  );
}
