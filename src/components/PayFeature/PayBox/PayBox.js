import React from "react";
import "./PayBox.scss";
import { Link } from "react-router-dom";

function PayBox(props) {
  return (
    <div id="pay-box">
      <div
        className="pay-card"
        style={{
          backgroundImage: `linear-gradient(180deg,rgb(${props.color1}),rgb(${props.color2}))`
        }}
      >
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <div className="info-box">
        <h3>{props.description}</h3>
        <p>*Subject to terms and conditions.</p>
      </div>
      <Link to="/payoptions" className="button">
        Find out more
      </Link>
    </div>
  );
}

export default PayBox;
