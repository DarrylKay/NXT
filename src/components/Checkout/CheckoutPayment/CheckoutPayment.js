import React, { Component } from "react";
import "./CheckoutPayment.scss";
import Shipping from "./Shipping/Shipping";
import Payment from "./Payment/Payment";

export class CheckoutPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shipping: 0
    };
  }

  updateShippingFee = fee => {
    this.setState({ shipping: fee });
    this.props.getShipping(this.state.shipping);
  };

  render() {
    return (
      <div className="payment-box">
        <div className="payment-header">
          <h3>Shipping & Payment Method</h3>
        </div>
        <div className="shipping-section">
          <Shipping updateShipping={this.updateShippingFee} />
        </div>
        <div className="payment-section">
          <Payment />
        </div>
      </div>
    );
  }
}

export default CheckoutPayment;
