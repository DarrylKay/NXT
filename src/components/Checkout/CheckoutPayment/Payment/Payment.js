import React, { Component } from "react";
import "./Payment.scss";
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";

export class Payment extends Component {
  render() {
    return (
      <div className="payment-method">
        <div className="payment-method-title">
          <h5>Payment Method</h5>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="card-payment"
            name="payment"
            value="Card Payment"
            className="input"
            aria-label="NXT clothing card payment"
          />
          <label htmlFor="card-payment" aria-label="NXT clothing card payment">
            Card Payment
          </label>
          <p className="icon">
            {" "}
            <FaCcVisa /> <FaCcMastercard />
          </p>
        </div>
        <div className="payment-option">
          <input
            type="radio"
            id="paypal"
            name="payment"
            value="paypal"
            className="input"
            aria-label="NXT clothing paypal payment"
          />
          <label htmlFor="paypal" aria-label="NXT clothing paypal payment">
            PayPal
          </label>
          <p className="icon">
            <FaCcPaypal />
          </p>
        </div>
      </div>
    );
  }
}

export default Payment;
