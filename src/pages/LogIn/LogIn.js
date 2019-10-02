import React, { Component } from "react";
import "../../App.scss";
import "./Login.scss";
import SignIn from "../../components/SignIn/SignIn";
import CreateAccount from "../../components/CreateAccount/CreateAccount";

export class LogIn extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="login-container">
            <div className="sign-in-container">
              <SignIn />
            </div>
            <div className="create-account-container">
              <CreateAccount />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
