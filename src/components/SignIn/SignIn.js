import React from "react";
import "./SignIn.scss";

function SignIn() {
  return (
    <div className="sign-container">
      <div className="sign-box">
        <div className=" sign-header">
          <h1 className="title">Sign in to your account</h1>
        </div>
        <div className="info-section">
          <p>
            If you have an existing account with us, enter your details to view
            your dashboard. If you have forgotten your email or password, Simply
            select 'Forgot Your Password?' below to reset your details .
          </p>
        </div>
        <div className="input-section">
          <div className="box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email"></input>
          </div>
          <div className="box">
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password"></input>
          </div>
        </div>
        <div className="forgot-details-section">
          <p>forgot your password?</p>
        </div>
        <div className="remember-section">
          <input className='input' type="radio" />
          <p>Remember me</p>
        </div>
        <button className="sign-button">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
