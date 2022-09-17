import "./index.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import SideBar from './SideBar'
import NavBar from './NavBar'

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
  
        <Form className="sign-up-box">
          <h1 className="sign-up-title">Sign In</h1>
          
          <Form.Group className="mb-3 sign-up-input" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group
            className="mb-3 sign-up-input"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="sign-up-button">
            Sign In
          </Button>
        </Form>
          <center><Link to="/signup">Not a Jreamer? Sign up!</Link> </center>
        </>
  )
}

export default SignIn
