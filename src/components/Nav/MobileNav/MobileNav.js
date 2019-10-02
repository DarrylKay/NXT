import React, { Component } from "react";
import "./MobileNav.scss";
import { FaShoppingCart, FaSearch, FaHeart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addingProductDisplay,
  openingWishList,
  closingWishList } from "../../../redux/actions/allActions";

export class MobileNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false,
      menuOpen: false
    };
  }

  handleMobileSearch = () => {
    this.setState({ search: !this.state.search });
  };

  handleMenuToggle = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
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

  render() {
    return (
      <nav id="nav">
        <div className="mobile-nav">
          <div className="icon-box">
            <FaBars
              className={this.state.menuOpen ? "icon menu-active" : "icon"}
              onClick={this.handleMenuToggle}
            />
            <FaSearch className="icon" onClick={this.handleMobileSearch} />
          </div>
          <Link to="/" className="logo">
            NXT
          </Link>
          <div className="icon-box">
            {this.toggleWishList()}
            <Link to="/checkout">
              <FaShoppingCart
                className="icon"
                style={{
                  color:
                    this.props.globalState.cart.length > 0 ? "red" : "white"
                }}
              />
            </Link>
          </div>
        </div>
        <div
          className={
            this.state.search ? "mobile-search search-active" : "mobile-search"
          }
        >
          <input className="search-bar" type="text" placeholder="Search..." />
          <div className="search-btn">
            <FaSearch className="icon" />
          </div>
        </div>
        <div
          className={
            this.state.menuOpen
              ? "mobile-links mobile-links-active"
              : "mobile-links"
          }
        >
          {this.showMensAll()}
          {this.showWomensAll()}
          {this.showChildrensAll()}
          {this.showHomeAll()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { addingProductDisplay,
    openingWishList,
    closingWishList }
)(MobileNav);
