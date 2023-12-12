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
        <div className="section">
          <div className="section__container">
            <h2 className="section__heading">Hours & Location</h2>
            <div className="section__times">
              <h3 className="section__subheading">Dinner:</h3>
              <p className="section__paragraph section__hours">10pm</p>
              <h3 className="section__subheading section__lunch">Lunch:</h3>
              <p className="section__paragraph">Currently Closed</p>
            </div>
          </div>
          <div className="section__container">
            <h2 className="section__heading">Contact </h2>
            <div className="section__info">
              <p className="section__paragraph">604-232-0900</p>
              <p className="section__paragraph">shoestringcafe@gmail.com</p>
            </div>
          </div>
          <div className="section__container">
            <h2 className="section__heading">Reservations</h2>
            <p className="section__paragraph">
              Please call our phone number to make reservations.
            </p>
          </div>
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
