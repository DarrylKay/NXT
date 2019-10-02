import React from "react";
import "./PayOptionsHero.scss";

function PayOptionsHero() {
  return (
    <div className="pay-hero">
      <div className="hero-title-box">
        <h1 className="title">
          NXT<strong> Unlimited</strong>
        </h1>
        <h3 className="subtitle">The annual delivery pass</h3>
      </div>
      <div className="hero-description">
        <p>
          Unlimited <strong>FREE</strong> home delivery for just
          <strong> £20 a year*</strong>
        </p>
      </div>
      <div className="hero-button">Add To Bag</div>
    </div>
  );
}

export default PayOptionsHero;
