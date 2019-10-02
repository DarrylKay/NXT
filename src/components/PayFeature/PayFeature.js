import React, { Component } from "react";
import "./PayFeature.scss";
import PayBox from "./PayBox/PayBox";

export class PayFeature extends Component {
  constructor(props) {
    super(props);

    this.state = {
      payTypes: [
        {
          title: `NXT unlimited`,
          subtitle: "The annual delivery pass",
          description: "Unlimited free home delivery for just £20 a year",          
          backgroundColor1: "89, 127, 163",
          backgroundColor2: "36, 196, 161"
        },
        {
          title: "NXT pay",
          subtitle: "Credit account",
          description: "Flexible monthly payments -23.9% APR representative",
          backgroundColor1: "105, 174, 238",
          backgroundColor2: "117, 223, 200"
        },
        {
          title: "NXT day delivery",
          subtitle: "To home or store",
          description: "Order before midnight for next day delivery",
          backgroundColor1: "143, 187, 228",
          backgroundColor2: "61, 155, 134"
        },
        {
          title: "NXT collect",
          subtitle: "Shopmy local store",
          description: "Reserved in-store. Ready from under 1 hour",
          backgroundColor1: "53, 78, 102",
          backgroundColor2: "141, 230, 210"
        }
      ]
    };
  }

  displayPayOptions = () => {
    return this.state.payTypes.map(item => {
      return (
        <PayBox
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          color1={item.backgroundColor1}
          color2={item.backgroundColor2}
          key={item.title}
        />
      );
    });
  };

  render() {
    return (
      <div id="pay-feature">
        <div className="pay-container">
          <div className="title-box">
            <h1>More great ways to shop at <span>NXT</span></h1>
            <p>
              Whether it’s unlimited delivery all year long, or the ability to
              spread the cost a little, we have several options that might be
              right for you.
            </p>
          </div>
          <div className="pay-boxes">{this.displayPayOptions()}</div>
        </div>
      </div>
    );
  }
}

export default PayFeature;
