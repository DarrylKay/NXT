import React, { Component } from "react";
import "../../App.scss";
import "./PayOptions.scss";
import PayOptionsHero from "../../components/PayOptionsHero/PayOptionsHero";
import PayOptionsIcon from "../../components/PayOptionsIcon/PayOptionsIcon";
import { connect } from "react-redux";
import { TimelineMax } from "gsap";

export class PayOptions extends Component {
  constructor(props) {
    super(props);

    this.myPay = null;
  }


  componentDidMount() {
    new TimelineMax().from(this.myPay, 1, { y: 50, opacity: 0 });
  }

  render() {
    return (
      <div className="container">
        <div className="section" ref={div => (this.myCheckout = div)}>
          <div className="pay-options-container">
            <PayOptionsHero />
            <div className="pay-options-box">
              <div className="pay-info">
                <h4>
                  <span>NXT</span> unlimited
                </h4>
                <p>
                  Sign up for unlimited <span>free</span> home delivery for{" "}
                  <span>£20 a year*.</span>
                </p>
                <p>
                  It’s <span>quick, easy</span> and it includes
                  <span> free returns</span> and <span>furniture assembly</span>
                  .
                </p>
              </div>
              <div className="pay-icon-box">
                <PayOptionsIcon />
              </div>
            </div>
            <div className="pay-terms-box">
              <p>
                <span>*Exceptions, terms and conditions apply.</span>
                Subscription period is 12 months and costs £20. Excludes Precise
                Home Delivery. Next day delivery is subject to stock, courier
                availability and courier area.
              </p>
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

export default connect(mapStateToProps)(PayOptions);
