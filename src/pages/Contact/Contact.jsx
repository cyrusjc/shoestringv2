import "./Contact.scss";
import "../../styles/_global.scss";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="background">
      <div className="container_contact">
        <div className="container_contact_element">
          <div className="container_contact_forms">
            <div className="container_contact_forms_header">
              <div className="container_contact_text">
                <p>Have a question or need more information?</p>
              </div>
              <div className="container_contact_forms_heading">
                <h1> Contact us!</h1>
              </div>
            </div>

            <div className="container_contact_forms_fields">
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="container_contact_forms_field"
              >
                <div className="mb-3 container_contact_forms_split">
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationCustom01"
                    className="mb-3 container_contact_forms_split_item"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="5"
                    controlId="validationCustom02"
                    className="mb-3 container_contact_forms_split_item"
                  >
                    <Form.Label>Phone (optional)</Form.Label>
                    <Form.Control type="text" placeholder="" />
                  </Form.Group>
                </div>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="10"
                    controlId="validationCustom03"
                    className="container_contact_forms_field"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="email@email.com"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide your contact email so we can reach you.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    md="10"
                    controlId="validationCustom04"
                    className="container_contact_forms_field"
                  >
                    <Form.Label>What is your question?(*)</Form.Label>
                    <Form.Control
                      as="textarea"
                      type="text"
                      rows={3}
                      placeholder="Question here!"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please fill this field.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button type="submit" className="container_contact_forms_field">
                  Submit form
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className="container_contact_element">
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
