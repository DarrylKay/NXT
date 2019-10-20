import React, { Component } from "react";
import "./FeaturedProduct.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class FeaturedProduct extends Component {
  render() {
    return (
      <div id="product-box">
        <div className="image-box">
          <img
            src={this.props.image}
            alt="NXT clothing display of product"
            className="featured-image"
          />
          <div className="featured-btn">
            <Link
              to="/productdetails"
              className="button"
              onClick={this.props.openInfo}
            >
              Details
            </Link>
          </div>
        </div>
        <div className="featured-info">
          <p className="title">{this.props.name}</p>
          <p className="price">£ {this.props.price}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(FeaturedProduct);
