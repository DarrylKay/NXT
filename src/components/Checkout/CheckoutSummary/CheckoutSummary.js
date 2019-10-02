import React, { Component } from "react";
import "./CheckoutSummary.scss";
import SummaryItem from "./SummaryItem/SummaryItem";
import SummaryTotal from "./SummaryTotal/SummaryTotal";
import { connect } from "react-redux";
import { removingProductCart } from "../../../redux/actions/allActions";

export class CheckoutSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0
    };
  }

  componentDidMount() {
    const sub = this.props.globalState.cart.map(item => {
      return item.price;
    });
    const subtotal = sub.reduce((acc, val) => acc + val, 0);
    this.setState({ subtotal: subtotal });
  }

  addToSubtotal = price => {
    this.setState({ subtotal: this.state.subtotal + price });
  };

  minusToSubtotal = price => {
    this.setState({
      subtotal: this.state.subtotal - price
    });
  };

  displayCheckoutSummary = () => {
    if (this.props.globalState.cart.length > 0) {
      return this.props.globalState.cart.map((item, i) => {
        return (
          <SummaryItem
            image={item.mainImage}
            name={item.productName}
            price={item.price}
            key={i}
            removeItem={this.props.removingProductCart.bind(null, item)}
            updatePrice={this.addToSubtotal}
            decreasePrice={this.minusToSubtotal}
          />
        );
      });
    } else return <h2 className="empty">Please add a product to the cart.</h2>;
  };

  render() {
    return (
      <div className="summary-section">
        <div className="summary-header">
          <h3>Order Summary</h3>
        </div>
        <div className="summary-item-container">
          {this.displayCheckoutSummary()}
        </div>
        <hr />
        <div className="total-section">
          <SummaryTotal
            subtotal={this.state.subtotal.toFixed(2)}
            shipping={this.props.shippingFee.toFixed(2)}
            total={this.state.subtotal + this.props.shippingFee}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { removingProductCart }
)(CheckoutSummary);
