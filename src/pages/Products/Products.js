import React, { Component } from "react";
import "../../App.scss";
import "./Products.scss";
import Filter from "../../components/Filter/Filter";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import { connect } from "react-redux";

export class Products extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div id="products">
          <div className="section">
            <div className="all-products-container">
              <Filter />
              <ProductContainer />
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

export default connect(mapStateToProps)(Products);
