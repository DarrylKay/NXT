import React, { Component } from "react";
import "./Product.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Product extends Component {
  render() {
    return (
      <div id="product">
        <div className="product-box">
          <Link to="/productdetails" className="link">
            <div
              className="image"
              style={{
                backgroundImage: `url(${this.props.product.mainImage})`
              }}
              onClick={this.props.openInfo}
            ></div>
          </Link>
          <div className="info-box">
            <p className="item" onClick={this.props.openInfo}>
              {this.props.product.productName}
            </p>
            <p className="price">£ {this.props.product.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Product);
