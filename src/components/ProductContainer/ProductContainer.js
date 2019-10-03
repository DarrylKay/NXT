import React, { Component } from "react";
import "./ProductContainer.scss";
import "../../App.scss";
import Product from "./Product/Product";
import { connect } from "react-redux";
import {
  openingProductInfo,
  addingProductWishlist,
  addingProductCart
} from "../../redux/actions/allActions";
import { TimelineMax } from "gsap";

export class ProductContainer extends Component {
  constructor(props) {
    super(props);

    this.myProdCon = null;
  }

  componentDidMount = () => {
    new TimelineMax().from(this.myProdCon, 1, { x: 80, opacity: 0 });
  };

  showAllProducts = () => {
    if (this.props.globalState.productDisplay.length <= 0) {
      return this.props.productData.map(product => {
        return (
          <Product
            product={product}
            key={product.id}
            openInfo={this.props.openingProductInfo.bind(null, product)}
            addWishlist={this.props.addingProductWishlist.bind(null, product)}
            addCart={this.props.addingProductCart.bind(null, product)}
          />
        );
      });
    } else {
      return this.props.globalState.productDisplay.map(product => {
        return (
          <Product
            product={product}
            key={product.id}
            openInfo={this.props.openingProductInfo.bind(null, product)}
            addWishlist={this.props.addingProductWishlist.bind(null, product)}
            addCart={this.props.addingProductCart.bind(null, product)}
          />
        );
      });
    }
  };
  render() {
    return (
      <div id="product-section">
        <div>
          <h1>{this.props.category}</h1>
          <h4>{this.props.type}</h4>
        </div>
        <div className="product-container" ref={div => (this.myProdCon = div)}>
          {this.showAllProducts()}
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
  {
    openingProductInfo,
    addingProductWishlist,
    addingProductCart
  }
)(ProductContainer);
