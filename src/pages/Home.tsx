import { Col, Container, Row } from "react-bootstrap";
import background from "/pic.jpg";
import Button from "react-bootstrap/Button";

import "./Home.css";

function Home() {
  return (
    <>
      <div className="background">
        <Container className="homebox">
          <div className="centerbuttons">
            <Row>
              <Col>
                <Button className="homebutton" variant="light">
                  Link 1
                </Button>
              </Col>
              <Col>
                <Button className="homebutton" variant="light">
                  Link 2
                </Button>
              </Col>
              <Col>
                <Button className="homebutton" variant="light">
                  Link 3
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
