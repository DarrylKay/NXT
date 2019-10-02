import React, { Component } from "react";
import "../../App.scss";
import "./Checkout.scss";
import CheckoutDetails from "../../components/Checkout/CheckoutDetails/CheckoutDetails";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import CheckoutPayment from "../../components/Checkout/CheckoutPayment/CheckoutPayment";
import { connect } from "react-redux";

export class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0,
      shipping: 0,
      total: 0
    };
  }



  getShipping = fee => {
    this.setState({ shipping: fee });
    
  };

  render() {
    return (
      <div className="container">
        <div className="section">
          <div className="checkout-container">
            <div className="details-payment-section">
              <CheckoutDetails />
              <CheckoutPayment getShipping={this.getShipping} />
            </div>
            <div className="sum-section">
              <CheckoutSummary shippingFee={this.state.shipping}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Checkout);
