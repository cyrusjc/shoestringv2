import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import Icons from "../Icons/Icons";
import { FiInstagram } from "react-icons/fi";

export default function FooterWithLogo() {
  return (
    <footer className="text-center text-lg-start footer">
      <Container>
        <Row>
          <div className="logo text-center">
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
          <div className="icons text-center">
            <Icons url="//www.google.com" icon={<FiInstagram />} />
            <Icons url="//www.google.com" icon={<FiInstagram />} />
            <Icons url="//www.google.com" icon={<FiInstagram />} />
          </div>
        </Row>
        <Row>
          <div className="text-center">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </Row>
      </Container>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Shoestring Cafe
      </div>
    </footer>
  );
}
