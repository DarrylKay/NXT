import React, { Component } from "react";
import "../../App.scss";
import "./Login.scss";
import SignIn from "../../components/SignIn/SignIn";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import { TimelineMax } from "gsap";

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.myLogin = null;
  }

  componentDidMount() {
    new TimelineMax().from(this.myLogin, 1, { y: 50, opacity: 0 });
  }

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="login-container" ref={div => (this.myLogin = div)}>
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
