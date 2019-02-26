import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class Login extends Component {
  render() {
    return (
      <div className="formCon">
        <h2>Account Login</h2>
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
					  <div className="innerBox">
						  <Form.Group controlId="formBasicChecbox">
						    <Form.Check type="checkbox" label="Check me out" />
						  </Form.Group>
						  <div className="forgotLink">
						  	<a href="">Forgot Password</a>
						  </div>
					  </div>

					  <Button variant="primary" type="submit">
					    Log in
					  </Button>
					</Form>
        </div>
      </div>
    );
  }
}

export default Login;
