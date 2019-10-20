import React, { Component } from "react";
import "./WishlistItem.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { closingWishList } from "../../../redux/actions/allActions";
import { Link } from "react-router-dom";

export class WishlistItem extends Component {
  render() {
    return (
      <div id="item-box">
        <div className="image-box">
          <Link to="/productdetails">
            <img
              src={this.props.image}
              alt="NXT clothing wishlist item"
              onClick={this.props.openInfo}
            ></img>
          </Link>
        </div>
        <div className="info-box">
          <div className="top-box">
            <Link to="/productdetails" className="link">
              <h1
                onClick={() => {
                  this.props.openInfo();
                  this.props.closingWishList();
                }}
              >
                {this.props.name}
              </h1>{" "}
            </Link>
            <h4>£ {this.props.price}</h4>
          </div>
          <div className="bottom-box">
            <button
              onClick={() => {
                this.props.addCart();
                this.props.removeItem();
              }}
            >
              Add To Cart
            </button>
            <FaRegTrashAlt className="icon" onClick={this.props.removeItem} />
          </div>
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
  { closingWishList }
)(WishlistItem);
