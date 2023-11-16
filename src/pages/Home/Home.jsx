import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <div className="landing background">
          <Container>
            <div className="content divCenter">
              <h1>The Shoestring Cafe</h1>

              <p>Some title text</p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
