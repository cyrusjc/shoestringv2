import "./Contact.scss";
import "../../styles/_global.scss";

import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [lambdaResponse, setLambdaResponse] = useState("Default");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const endpoint =
    "https://dteavhhnh4sz6ikxnt2udtygda0wopey.lambda-url.us-west-2.on.aws/";

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);

    if (formData.email && formData.name && formData.message) {
      const fetchPromise = fetch(endpoint, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(formData),
      });
      fetchPromise.then((response) => {
        if (response.status == "200") {
          console.log(response.body);
          setLambdaResponse("Email has sent successfully!");
          handleShow();
        } else {
          setLambdaResponse("Email has failed, please retry");
          handleShow();
        }
      });
    }
  };

  return (
    <div className="container_wrapper">
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
                {/* <div className="container_contact_forms_split"> */}
                <Form.Group
                  as={Col}
                  controlId="validationCustom01"
                  className="container_contact_forms_field"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <Form.Control.Feedback></Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  controlId="validationCustom02"
                  className="container_contact_forms_field"
                >
                  <Form.Label>Phone (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </Form.Group>
                {/* </div> */}

                <Form.Group
                  as={Col}
                  controlId="validationCustom03"
                  className="container_contact_forms_field"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email@email.com"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your contact email so we can reach you.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  controlId="validationCustom04"
                  className="container_contact_forms_field"
                >
                  <Form.Label>What is your question?(*)</Form.Label>
                  <Form.Control
                    as="textarea"
                    type="text"
                    rows={3}
                    placeholder="Question here!"
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please fill this field.
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  type="button"
                  className="container_contact_forms_field"
                  onClick={handleSubmit}
                >
                  Submit form
                </Button>
              </Form>
            </div>
          </div>
        </div>
        {/* <div className="container_contact_element">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.0524810393475!2d-123.06972116073673!3d49.17956213042419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486759e6c21d885%3A0x5e2ef173da2a3c86!2sThe%20Shoestring%20Cafe!5e0!3m2!1sen!2sca!4v1698292193979!5m2!1sen!2sca"
            width="600"
            height="600"
            loading="lazy"
          />
        </div> */}

        <Modal
          show={show}
          onHide={handleClose}
          className="container_contact_modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{lambdaResponse}</Modal.Title>
          </Modal.Header>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
