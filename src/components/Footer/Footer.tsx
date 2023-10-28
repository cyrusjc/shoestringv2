import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Icons from "../Icons/Icons";
import { FiInstagram } from "react-icons/fi";

export default function FooterWithLogo() {
  return (
    <footer className="text-center text-lg-start footer">
      <Container>
        <Row>
          <div className="logo">
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
          <div className="icons">
            <Icons url="www.google.com" icon={<FiInstagram />} />
            <Icons url="www.google.com" icon={<FiInstagram />} />
            <Icons url="www.google.com" icon={<FiInstagram />} />
          </div>
        </Row>
        <Row>
          <Col lg="6" md="12" className="mb-4 mb-md-0">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
      </Container>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Company Name
      </div>
    </footer>
  );
}
