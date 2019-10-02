import React, { Component } from "react";
import "./Shipping.scss";

export class Shipping extends Component {
  render() {
    return (
      <div className="shipping-method">
        <div className="shipping-method-title">
          <h5>Shipping Method</h5>
        </div>
        <div className="shipping-option">
          <input
            type="radio"
            id="next-day"
            name="shipping"
            value="DHL Next Day Delivery"
            className="input"
            onClick={() =>{this.props.updateShipping(2.99)}}
          />
          <label htmlFor="next-day">DHL Next Day Delivery (1 day)</label>
          <p className="price">£2.99</p>
        </div>
        <div className="shipping-option">
          <input
            type="radio"
            id="economy"
            name="shipping"
            value="DHL Economy Delivery"
            className="input"
            onClick={() =>{this.props.updateShipping(0)}}
          />
          <label htmlFor="economy">DHL Economy Delivery (2+ days)</label>
          <p className="price">Free</p>
        </div>
      </div>
    );
  }
}

export default Shipping;
