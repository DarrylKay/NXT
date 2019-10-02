import React, { Component } from "react";
import "./SummaryTotal.scss";
import { connect } from "react-redux";

export class SummaryTotal extends Component {
  render() {
  
    return (
      <div className="total-section">
        <div className="total-title">
          <p>Subtotal</p>
          <p>{this.props.subtotal}</p>
        </div>
        <div className="total-title">
          <p>Shipping</p>
          <p>{this.props.shipping}</p>
        </div>
        <div className="total-title">
          <p>Total</p>
          <p>
            <span>{this.props.total.toFixed(2)}</span>
          </p>
        </div>
        <button
          onClick={() => {
            alert(
              "If this was a real site, You would be looking stylish and we would be making money!"
            );
          }}
        >
          Confirm & Pay Now
        </button>

        <div className="terms">
          <p>
            *By clicking Confirm & Pay Now, you agree to the Terms and
            Conditions
          </p>
        </div>
      </div>
    );
  }
}

const mapStatToProps = state => {
  return state;
};

export default connect(mapStatToProps)(SummaryTotal);
