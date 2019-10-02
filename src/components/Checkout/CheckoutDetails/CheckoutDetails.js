import React, { Component } from "react";
import "./CheckoutDetails.scss";

export class CheckoutDetails extends Component {
  render() {
    return (
      <div className="details-box">
        <div className="details-header">
          <h3>Details</h3>
          <p>Edit</p>
        </div>
        <div className="details-address">
          <h3>
            Shipping Address
          </h3>
          <p>Mr Ima Dev</p>
          <p>1 Made Up Street</p>
          <p>London</p>
          <p>NW11 8WD</p>
        </div>
      </div>
    );
  }
}

export default CheckoutDetails;
