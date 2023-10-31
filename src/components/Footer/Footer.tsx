import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Icons from "../Icons/Icons";

import { FiInstagram } from "react-icons/fi";
import { FaFacebook, FaYelp } from "react-icons/fa";

export default function FooterWithLogo() {
  return (
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
  );
}
