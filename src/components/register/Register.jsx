import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import "./styles.css";

const initialState = {
  name: "",
  email: "",
  password: ""
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // TODO
  };

  return (
    <div className="registration">
      <div className="container">
        <h2 className="title">Evercode Registration</h2>
        <Form onSubmit={handleFormSubmit}>
          <h6 className="subtitle">
            Please enter your details below to register yourself.
          </h6>
          {successMsg && <Alert variant="success">{successMsg}</Alert>}
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={state.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Button variant="secondary" type="submit">
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Register;
