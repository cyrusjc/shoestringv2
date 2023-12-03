import { Button, Col, Container, Row } from "react-bootstrap";

import "./Home.scss";
import "../../styles/_global.scss";

import Fluid from "../../components/Figure/Figure";
import Blog from "../../components/Blog/Blog";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

function Home() {
  const blogPost = {
    title: "ABOUT",
    content:
      "Welcome to our family-owned gem, Shoestring Cafe, nestled in the heart of Richmond, British Columbia.\n As a family, we have a passion for food and a commitment to providing our guests with a unique dining experience. Our menu is a culinary journey, featuring dishes crafted with fresh, locally-sourced ingredients. Each dish we serve is a celebration of our love for food and our desire to share this with our guests.",
  };

  const blogPost2 = {
    title: "",
    content:
      "The ambiance at Shoestring Cafe is warm and inviting, reflecting our family’s hospitality. Whether you’re looking for a cozy spot for a meal or a venue to celebrate special occasions, Shoestring Cafe is the perfect place. Experience the joy of dining at Shoestring Cafe, where good food and great experiences come together in a family-friendly environment. We look forward to welcoming you to our family!",
  };

  const picture1 = "/temp3.jpg";
  const picture2 = "/temp3.jpg";

  return (
    <>
      <div>
        <div className="landing">
          <div className="background">
            <Container>
              <div className="content divCenter">
                <h1>The Shoestring Café</h1>

                <p>Subsidiary of Youngstown sardines</p>
                <Link to="/Contact">
                  <Button variant="secondary" className="menuButton">
                    {" "}
                    <p>View our menu</p>
                  </Button>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="storyContainer divCenter maxWidth">
        <div className="aboutContainer">
          <Blog {...blogPost} />
        </div>
        <div className="aboutContainer">
          <Blog {...blogPost2} />
        </div>
        <div className="aboutContainer">
          <Fluid path={picture1} />
        </div>
        <div className="information">
          <h3>Hours and Location</h3>
          <div>
            <h4>Dinner</h4>
            <p> 10pm 10pm</p>
            <h4>Lunch</h4>
            <p> Currently Closed </p>

            <h4>Contact </h4>
            <p> 604 232-0900 | shoestringcafe@gmail.com</p>
            <h3>Reservations</h3>
            <p> Please call our phone number to make reservations.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
