import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="footer-boxes">
          <div className="box">
            <h3>Help</h3>
            <div className="link-box">
              <p>Frequently asked questions</p>
              <p>contact us</p>
              <p>delivery information</p>
              <p>product recall</p>
              <p>arrange a return</p>
            </div>
          </div>
          <div className="box">
            <h3>shopping with us</h3>
            <div className="link-box">
              <p>NXTPay credit account</p>
              <p>NXT unlimited</p>
              <p>E-vouchers</p>
              <p>Gift cards</p>
              <p>Gift Experiences</p>
            </div>
          </div>
          <div className="box">
            <h3>privacy & Legal</h3>
            <div className="link-box">
              <p>cookies & privacy policy</p>
              <p>terms & condistions</p>
              <p>careers @ nxt</p>
            </div>
            <input
              type="email"
              placeholder="subscribe to our newsletter"
            ></input>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
      <div id='signature'>
          <h5>&copy; Designed & Developed By Darryl Kay 2019</h5>
      </div>
    </>
  );
}

export default Footer;
