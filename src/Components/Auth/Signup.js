import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class Signup extends Component {
  render() {
    return (
      <div className="formCon">
        <h2>Register Login</h2>
        <div className="formBox">
        	<Form>
					  <Form.Group controlId="formBasicEmail">
					    <Form.Label>Username</Form.Label>
					    <Form.Control type="text" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Password</Form.Label>
					    <Form.Control type="password" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Confirm Password</Form.Label>
					    <Form.Control type="password" />
					  </Form.Group>

					  <Form.Group controlId="formBasicPassword">
					    <Form.Label>Email Address</Form.Label>
					    <Form.Control type="email" />
					  </Form.Group>
					  

					  <Button variant="primary" type="submit">
					    Register
					  </Button>
					</Form>
				</div>
      </div>
    );
  }
}

export default Signup;
