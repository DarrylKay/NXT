import React, { Component } from "react";
import "./MainNav.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { connect } from "react-redux";
import {
  addingProductDisplay,
  openingWishList,
  closingWishList
} from "../../../redux/actions/allActions";

export class MainNav extends Component {
  toggleWishList = () => {
    if (this.props.globalState.wishListOpen) {
      return <FaHeart className="icon" onClick={this.props.closingWishList} />;
    } else {
      return (
        <FaHeart
          className="icon"
          onClick={this.props.openingWishList}
          style={{
            color: this.props.globalState.wishList.length > 0 ? "red" : "white"
          }}
        />
      );
    }
  };

  showMensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "mens") {
        return product;
      } else return null;
    });
    return (
      <Link
        onClick={this.props.addingProductDisplay.bind(null, data)}
        to="/products"
        className="link"
      >
        Mens
      </Link>
    );
  };

  showWomensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "womens") {
        return product;
      } else return null;
    });
    return (
      <Link
        onClick={this.props.addingProductDisplay.bind(null, data)}
        to="/products"
        className="link"
      >
        Womens
      </Link>
    );
  };

  showChildrensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "childrens") {
        return product;
      } else return null;
    });
    return (
      <Link
        onClick={this.props.addingProductDisplay.bind(null, data)}
        to="/products"
        className="link"
      >
        Childrens
      </Link>
    );
  };

  showHomeAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "home") {
        return product;
      } else return null;
    });
    return (
      <Link
        onClick={this.props.addingProductDisplay.bind(null, data)}
        to="/products"
        className="link"
      >
        Home
      </Link>
    );
  };

  render() {
    return (
      <div className="main-nav">
        <Link to="/" className="logo">
          NXT
        </Link>
        <div className="link-box">
          {this.showMensAll()}
          {this.showWomensAll()}
          {this.showChildrensAll()}
          {this.showHomeAll()}
        </div>
        <div className="icon-box">
          <input className="search-bar" type="text" placeholder="Search..." />
         
          {this.toggleWishList()}
          <Link to="/checkout" className="icon">
            <FaShoppingCart
              className="icon"
              style={{
                color: this.props.globalState.cart.length > 0 ? "red" : "white"
              }}
            />
          </Link>
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
  { addingProductDisplay, openingWishList, closingWishList }
)(MainNav);
