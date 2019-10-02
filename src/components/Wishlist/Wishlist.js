import React, { Component } from "react";
import "./Wishlist.scss";
import { connect } from "react-redux";
import {
  closingWishList,
  openingProductInfo,removingProductWishlist,
  addingProductCart
} from "../../redux/actions/allActions";
import WishlistItem from "./WishlistItem/WishlistItem";

export class Wishlist extends Component {
  showWishlistItems = () => {
    if (this.props.globalState.wishList.length <= 0) {
      return (
        <h1 style={{ color: "darkgrey", fontSize: "0.9rem" }}>
          **Click on a products heart icon to add it to your wish list**
        </h1>
      );
    } else {
      return this.props.globalState.wishList.map((item,index) => {
        return (
          <WishlistItem
            image={item.mainImage}
            name={item.productName}
            price={item.price}
            key={index}
            openInfo={this.props.openingProductInfo.bind(null, item)}
            removeItem={this.props.removingProductWishlist.bind(null, item)}
            addCart={this.props.addingProductCart.bind(null, item)}
          />
        );
      });
    }
  };
  render() {
    return (
      <div
        id="wishlist"
        className={this.props.globalState.wishListOpen ? "active" : ""}
      >
        <div className="close-btn" onClick={this.props.closingWishList}>
          <span>Close</span> X
        </div>
        <h1>My Wish List</h1>
        <div className="item-container"></div>
        {this.showWishlistItems()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { closingWishList, openingProductInfo, removingProductWishlist,
    addingProductCart }
)(Wishlist);
