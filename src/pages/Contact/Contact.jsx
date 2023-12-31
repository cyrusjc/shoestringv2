import { Container } from "react-bootstrap";

import "./Contact.scss";
import "../../styles/_global.scss";

const Contact = () => {
  return (
    <div className="background">
      <div className="divCenter maxWidth contactContainer">
        <div>
          <h1>Address</h1>
          <p> 1234 Address street, Richmond B.C.</p>
          <h1>Hours</h1>
          <p> 10pm 10pm</p>
          <h1>Phone</h1>
          <p> 666-6666-6666</p>
          <h1>Email</h1>
          <p> email@hotmail.com</p>
          <h1>Parking</h1>
          <p> Parking is available somewhere palce holder place holder</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.0524810393475!2d-123.06972116073673!3d49.17956213042419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486759e6c21d885%3A0x5e2ef173da2a3c86!2sThe%20Shoestring%20Cafe!5e0!3m2!1sen!2sca!4v1698292193979!5m2!1sen!2sca"
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
