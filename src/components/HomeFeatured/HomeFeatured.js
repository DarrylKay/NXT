import React, { Component } from "react";
import "./HomeFeatured.scss";
import { Link } from "react-router-dom";
import homeFeatureImage from "../../assets/Various/home-feature-image.jpg";
import { connect } from "react-redux";
import { addingProductDisplay } from "../../redux/actions/allActions";

export class HomeFeatured extends Component {
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
      <div id="home-feature">
        <div className="home-box">
          <div className="home-info">
            <h5>New collection</h5>
            <h1>Build Your Dream Home</h1>
            {this.showHomeAll()}
          </div>
          <div className="image-box">
            <img src={homeFeatureImage} alt='home scene' />
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
  { addingProductDisplay }
)(HomeFeatured);
