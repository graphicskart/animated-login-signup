import React, { Component } from 'react';
import Login from './Login'
import Signup from './Signup'
import './index.css';
import {Form, Button} from 'react-bootstrap'

class LoginSignup extends Component {
  constructor(props){
    super(props)
    this.state = {
      opened: false
    }
  }
  toggleSignup(){
    this.setState({opened: !this.state.opened})
  }
  render() {
    return (
      <div className={this.state.opened ? "authCon openedBar" : "authCon"}>
      <div className="outterCon">
        <div className="authBox outterBox">
          <Login />
          <div className="signupCon">
            <div className="leftBar" onClick={this.toggleSignup.bind(this)}></div>
            <span className="closeBtn" onClick={this.toggleSignup.bind(this)}><i class="fa fa-times"></i></span>
            <Signup />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default LoginSignup;
