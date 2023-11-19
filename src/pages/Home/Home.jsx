import { Button, Col, Container, Row } from "react-bootstrap";

import "./Home.scss";
import "../../styles/_global.scss";

import Fluid from "../../components/Figure/Figure";
import Blog from "../../components/Blog/Blog";
import { Link } from "react-router-dom";

function Home() {
  const blogPost = {
    title: "Lorem Ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const blogPost2 = {
    title: "Lorem Ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  const picture1 = "/temp3.jpg";
  const picture2 = "/temp3.jpg";

  return (
    <>
      <div>
        <div className="landing background">
          <Container>
            <div className="content divCenter">
              <h1>The Shoestring Cafe</h1>

              <p>Some title text</p>
              <Link to="/Menu">
                <Button variant="secondary" className="menuButton">
                  {" "}
                  View our menu
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      </div>
      <div className="storyContainer divCenter maxWidth">
        <Blog {...blogPost} />
        <Fluid path={picture1} />
        <Fluid path={picture2} />
        <Blog {...blogPost2} />
      </div>
    </>
  );
}

export default Home;
