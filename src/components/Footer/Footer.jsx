import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import Icons from "../Icons/Icons";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaYelp } from "react-icons/fa";

export default function FooterWithLogo() {
  return (
    <>
    <div className="information">
    <h2>Hours and Location</h2>
      <h3>Dinner</h3>
      <p>10pm</p>
      <h3>Lunch</h3>
      <p>Currently Closed</p>

      <h2>Contact </h2>
      <p> 604 232-0900</p>
      <p>shoestringcafe@gmail.com</p>
      
      <h2>Reservations</h2>
      <p> Please call our phone number to make reservations.</p>
    </div>
    <footer className="text-center text-lg-start footer main-colour-text">
      <Container className="text-center">
        <Row>
          <div className="title-row">
            <img
              alt=""
              src="/public/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Shoestring
          </div>
        </Row>
        <Row>
          <div className="icons-row">
            <Icons url="//www.google.com" icon={<FiInstagram />} />
            <Icons url="//www.google.com" icon={<FaFacebook />} />
            <Icons url="//www.google.com" icon={<FaYelp />} />
          </div>
        </Row>
        <Row className="trademark-row">
          <div>© {new Date().getFullYear()} Shoestring Cafe</div>
        </Row>
      </Container>
    </footer>
    </>
  );
}
