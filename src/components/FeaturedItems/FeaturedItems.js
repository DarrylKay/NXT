import React, { Component } from "react";
import "./FeaturedItems.scss";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addingFeaturedDisplay,
  addingNewDisplay,
  openingProductInfo
} from "../../redux/actions/allActions";

export class FeaturedItems extends Component {
  filterMensData = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "mens" && product[this.props.title] === true) {
        return product;
      } else return null;
    });
    return (
      <button
        onClick={
          this.props.title === "Featured"
            ? this.props.addingFeaturedDisplay.bind(null, data)
            : this.props.addingNewDisplay.bind(null, data)
        }
      >
        mens
      </button>
    );
  };

  filterWomensData = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "womens" && product[this.props.title] === true) {
        return product;
      } else return null;
    });
    return (
      <button
        onClick={
          this.props.title === "Featured"
            ? this.props.addingFeaturedDisplay.bind(null, data)
            : this.props.addingNewDisplay.bind(null, data)
        }
      >
        womens
      </button>
    );
  };

  filterChildrensData = () => {
    const data = this.props.productData.filter(product => {
      if (
        product.category === "childrens" &&
        product[this.props.title] === true
      ) {
        return product;
      } else return null;
    });
    return (
      <button
        onClick={
          this.props.title === "Featured"
            ? this.props.addingFeaturedDisplay.bind(null, data)
            : this.props.addingNewDisplay.bind(null, data)
        }
      >
        childrens
      </button>
    );
  };

  displayFeaturedData = () => {
    if (this.props.title === "Featured") {
      if (this.props.globalState.FeaturedDisplay.length <= 0) {
        return this.props.productData.map(product => {
          if (
            product.category === `${this.props.category}` &&
            product[this.props.title] === true
          ) {
            return (
              <FeaturedProduct
                key={product.id}
                image={product.mainImage}
                name={product.productName}
                price={product.price}
                openInfo={this.props.openingProductInfo.bind(null, product)}
              />
            );
          } else return null;
        });
      } else {
        return this.props.globalState.FeaturedDisplay.map(product => {
          return (
            <FeaturedProduct
              key={product.id}
              image={product.mainImage}
              name={product.productName}
              price={product.price}
              openInfo={this.props.openingProductInfo.bind(null, product)}
            />
          );
        });
      }
    } else {
      if (this.props.globalState.NewDisplay.length <= 0) {
        return this.props.productData.map(product => {
          if (
            product.category === `${this.props.category}` &&
            product[this.props.title] === true
          ) {
            return (
              <FeaturedProduct
                key={product.id}
                image={product.mainImage}
                name={product.productName}
                price={product.price}
                openInfo={this.props.openingProductInfo.bind(null, product)}
              />
            );
          } else return null;
        });
      } else {
        return this.props.globalState.NewDisplay.map(product => {
          return (
            <FeaturedProduct
              key={product.id}
              image={product.mainImage}
              name={product.productName}
              price={product.price}
              openInfo={this.props.openingProductInfo.bind(null, product)}
            />
          );
        });
      }
    }
  };

  render() {
    return (
      <div id="featured-section">
        <div className="featured-header">
          <h4>{this.props.title} Products</h4>
          <hr />
          <div className="btn-box">
            {this.filterMensData()}
            {this.filterWomensData()}
            {this.filterChildrensData()}
          </div>
        </div>
        <div className="featured-products">{this.displayFeaturedData()}</div>
        <div className="more-container">
          <Link to="/products" className="more-btn">
            View More Products
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
  { addingFeaturedDisplay, addingNewDisplay, openingProductInfo }
)(FeaturedItems);
