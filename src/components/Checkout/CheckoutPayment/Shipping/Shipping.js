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
            aria-label='NXT clothing next day delivery'
          />
          <label htmlFor="next-day" aria-label='NXT clothing next day delivery'>DHL Next Day Delivery (1 day)</label>
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
            aria-label='NXT clothing economy delivery'
          />
          <label htmlFor="economy" aria-label='NXT clothing economy delivery'>DHL Economy Delivery (2+ days)</label>
          <p className="price">Free</p>
        </div>
      </div>
    );
  }
}

export default Shipping;
