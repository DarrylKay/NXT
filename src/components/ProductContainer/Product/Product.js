import React, { Component } from "react";
import "./Product.scss";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TimelineMax } from "gsap";

export class Product extends Component {
  constructor(props) {
    super(props);

    this.myProduct = null;
  }

  componentDidMount = () => {
    new TimelineMax().from(this.myProduct, 1.5, { x: 100, opacity: 0 });
  };

  render() {
    return (
      <div id="product">
        <div className="product-box" ref={div => (this.myProduct = div)}>
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
