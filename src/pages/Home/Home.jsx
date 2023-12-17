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
          <Link to="/Menu">
            <button className="container__button">View our menu</button>
          </Link>
        </div>

        {/* <div className="information">
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
          </div> */}
      </div>
    </>
  );
}

export default Home;
