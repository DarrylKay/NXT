import React, { Component } from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addingProductDisplay } from "../../redux/actions/allActions";

export class Hero extends Component {
  showChildrensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "childrens" && product.type === "schoolwear" ) {
        return product;
      } else return null;
    });
    return (
      <Link
        to="/products"
        className="link"
        onClick={this.props.addingProductDisplay.bind(null, data)}
      >
        Shop Now
      </Link>
    );
  };

  render() {
    return (
      <div id="hero">
        <div className="top-section">
          <div className="title-box">
            <h1 className="title">Schools Open!</h1>
            <h3 className="subtitle">
              Grab all the essentials for the new school year.
            </h3>
          </div>

          <div className="link-box">{this.showChildrensAll()}</div>
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
  { addingProductDisplay }
)(Hero);
