import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { createContact } from "../store/actions/contact";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function GridB() {
  const [validated, setValidated] = useState(false);
  const [contact, setContact] = useState({
    firstName: null,
    lastName: null,
    email: null,
    message: null,
    isRCNJStudent: false,
  });

  const successNotify = () =>{
    toast.success("Message Sent Successfully");
  };

  const handleFieldChange = (field, value) => {
    const newState = { ...contact };
    newState[field] = value;
    setContact(newState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      const status = await createContact(contact);
      if(status.status === 'success')
      {
        successNotify();
        setTimeout(()=>{
          window.location.reload(true);
        }, 5000);
      }
    }
  };
  return (
    <>
        <Form
      validated={validated}
      className="contactForm"
      onSubmit={handleSubmit}
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            onChange={(event) =>
              handleFieldChange("firstName", event.target.value)
            }
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="validationLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Last Name"
            onChange={(event) =>
              handleFieldChange("lastName", event.target.value)
            }
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => handleFieldChange("email", event.target.value)}
            required
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="validationMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Message"
            onChange={(event) =>
              handleFieldChange("message", event.target.value)
            }
            required
          />
        </Form.Group>
      </Row>
      <Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check
          type="checkbox"
          label="Click if you are a RCNJ student"
          onChange={() =>
            setContact(...contact, contact.isRCNJStudent = !contact.isRCNJStudent)
          }
        />
      </Form.Group>
          </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <ToastContainer />
    </>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = {
  createContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(GridB);
