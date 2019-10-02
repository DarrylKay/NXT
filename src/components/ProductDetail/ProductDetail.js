import React, { Component } from "react";
import "./ProductDetail.scss";
import { FaHeart, FaAngleDoubleLeft } from "react-icons/fa";
import { connect } from "react-redux";
import {
  closingProductInfo,
  addingProductWishlist,
  addingProductCart
} from "../../redux/actions/allActions";
import { withRouter } from "react-router-dom";

export class ProductDetail extends Component {
  handleBulletDetails = () => {
    if (this.props.globalState.openProductInfo.bulletDetails) {
      return this.props.globalState.openProductInfo.bulletDetails.map(
        (item, i) => {
          return <li key={i}>{item}</li>;
        }
      );
    } else {
      return null;
    }
  };

  handleSize = () => {
    if (this.props.globalState.openProductInfo.size) {
      return this.props.globalState.openProductInfo.size.map((item, i) => {
        return <p key={i}>{item}</p>;
      });
    } else {
      return null;
    }
  };

  handleColor = () => {
    if (this.props.globalState.openProductInfo.color) {
      return this.props.globalState.openProductInfo.color.map((item, i) => {
        return <li key={i}>{item}</li>;
      });
    } else {
      return null;
    }
  };

  handleAdditionalImages = () => {
    if (this.props.globalState.openProductInfo.additionalImages) {
      return this.props.globalState.openProductInfo.additionalImages.map(
        (img, i) => {
          return (
            <img
              src={img}
              className="image"
              key={i}
              alt="alternative versions of product"
            />
          );
        }
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="section">
            <div className="back-container">
              <FaAngleDoubleLeft onClick={this.props.history.goBack} />
              <h4 onClick={this.props.history.goBack}>Back</h4>
            </div>
            <div className="product-container">
              <div className="image-box">
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(${this.props.globalState.openProductInfo.mainImage})`
                  }}
                />
              </div>
              <div className="info-box">
                <h5 className="type">
                  {this.props.globalState.openProductInfo.type}
                </h5>
                <h2 className="name">
                  {this.props.globalState.openProductInfo.productName}
                </h2>
                <div className="price-details">
                  <p className="item-number">
                    {this.props.globalState.openProductInfo.productNumber}
                  </p>
                  <p className="price">
                    £ {this.props.globalState.openProductInfo.price}
                  </p>
                </div>
                <p className="description">
                  {this.props.globalState.openProductInfo.productDescription}
                </p>
                <ul className="bullet-details">{this.handleBulletDetails()}</ul>
                <h3>Select size</h3>
                <div className="size-box">{this.handleSize()}</div>
                <div className="color-box">
                  <ul className="bullet-details">{this.handleColor()}</ul>
                </div>
                <div className="actions">
                  <button
                    className="cart"
                    onClick={this.props.addingProductCart.bind(
                      null,
                      this.props.globalState.openProductInfo
                    )}
                  >
                    Add to cart
                  </button>
                  <div
                    className="heart"
                    onClick={this.props.addingProductWishlist.bind(
                      null,
                      this.props.globalState.openProductInfo
                    )}
                  >
                    <FaHeart />
                  </div>
                </div>
              </div>
            </div>
            <div className="additional-images-box">
              {this.handleAdditionalImages()}
            </div>
            <div className="back-container">
              <FaAngleDoubleLeft onClick={this.props.history.goBack} />
              <h4 onClick={this.props.history.goBack}>Back</h4>
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

export default withRouter(
  connect(
    mapStateToProps,
    {
      closingProductInfo,
      addingProductWishlist,
      addingProductCart
    }
  )(ProductDetail)
);
