import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Header from "../Local Components/Header1.js";
import ITSNavbar from "../Local Components/Navbar1.js";
import Footer from "../Local Components/Footer1.js";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import {login} from '../store/actions/auth';
import { Navigate } from "react-router-dom";

function Login(props) {
  const { isAuthenticated, user, redirect } = props;
  const [values, setValues] = useState({ name: '', password: '' });
  

  const handleFieldChange = e =>
  setValues({
    ...values,
    [e.target.name]: e.target.value
  });


  return (
    <>
        {isAuthenticated && (
          <Navigate to="/dashboard" replace={true} />
        )}
        <Header />
        <ITSNavbar/>
        <Card className='Login'>
            <Card.Body>
                <Form className='login'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="name" onChange={event => handleFieldChange(event)} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={event => handleFieldChange(event)}  type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => {event.preventDefault(); props.login(values.name, values.password)}} >
                    Submit
                </Button>
                </Form>
            </Card.Body>
        </Card>
      <Footer/>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.authState.isAuthenticated,
  user: state.authState.user
});


export default connect(mapStateToProps, { login })(
  Login
);