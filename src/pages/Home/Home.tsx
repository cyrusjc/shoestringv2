import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="background">
        <Container className="homebox">
          <div className="centerbuttons">
            <Row>
              <Col>
                <Link to="/Menu">
                  <Button className="homebutton" variant="light">
                    Menu
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/About">
                  <Button className="homebutton" variant="light">
                    About
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/Contact">
                  <Button className="homebutton" variant="light">
                    Contact
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
