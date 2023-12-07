import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1 className="container__heading">The Shoestring Café</h1>
          <p className="container__text">
            Welcome to Shoestring Cafe, a family owned restaurant nestled in the
            industrial area of Richmond. Our menu features dishes crafted with
            fresh, locally-sourced ingredients. Each dish we serve is a
            celebration of our love for food and our desire to share this with
            our guests.
          </p>
          <Link to="/Menu">View our menu</Link>
        </div>
      </div>

      {/* <div className="information">
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
        </div> */}
    </>
  );
}

export default Home;
