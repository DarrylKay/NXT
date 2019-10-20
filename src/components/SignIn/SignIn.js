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
            <label htmlFor="email" aria-label='NXT clothing email label'>Email</label>
            <input type="email" id="email" name="email" aria-label='NXT clothing email input'></input>
          </div>
          <div className="box">
            <label htmlFor="password" aria-label='NXT clothing password label'>Password</label>
            <input type="text" id="password" name="password" aria-label='NXT clothing password input'></input>
          </div>
        </div>
        <div className="forgot-details-section">
          <p>forgot your password?</p>
        </div>
        <div className="remember-section">
          <input className='input' type="radio" aria-label='NXT clothing remember me button'/>
          <p>Remember me</p>
        </div>
        <button className="sign-button">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
