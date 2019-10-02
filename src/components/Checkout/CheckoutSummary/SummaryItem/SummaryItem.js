import React, { Component } from "react";
import "./SummaryItem.scss";
import { connect } from "react-redux";

import { FaRegTrashAlt } from "react-icons/fa";

export class SummaryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: this.props.price
    };
  }

  addPrice = () => {
    this.setState({ price: this.state.price + this.props.price });
  };

  minusPrice = () => {
    this.setState({ price: this.state.price - this.props.price });
  };

  render() {
    return (
      <div className="item-section">
        <div className="image-box">
          <img src={this.props.image} alt="product selected"></img>
        </div>
        <div className="info-box">
          <p className="product-name">{this.props.name}</p>
        </div>
        <div className="price-box">
          <button
            onClick={() => {
              this.props.updatePrice(this.props.price);
              this.addPrice();
            }}
          >
            +
          </button>
          <p className="price">£ {this.state.price.toFixed(2)}</p>
          <button
            onClick={() => {
              this.props.decreasePrice(this.props.price);
              this.minusPrice();
            }}
            style={{ visibility: this.state.price === 0 ? "hidden" : "visible" }}
          >
            -
          </button>

          <FaRegTrashAlt
            onClick={() => {
              this.props.removeItem();
              this.props.decreasePrice(this.state.price);
              this.setState({ price: this.props.price });
            }}
            className="delete"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SummaryItem);
