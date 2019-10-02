import React, { Component } from "react";
import "../Products/Products.scss";
import "../../App.scss";
import Hero from "../../components/Hero/Hero";
import LinkBoxes from "../../components/LinkBoxes/LinkBoxes";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import HomeFeatured from "../../components/HomeFeatured/HomeFeatured";
import PayFeature from "../../components/PayFeature/PayFeature";
import { connect } from "react-redux";

export class Home extends Component {
  render() {
    return (
      <div className="container" >
        <div className="section">
          <Hero />
        </div>

        <div className="section">
          <FeaturedItems title="Featured" category="mens" />
        </div>

        <div className="section">
          <HomeFeatured />
        </div>

        <div className="section">
          <PayFeature />
        </div>

        <div className="section">
          <LinkBoxes />
        </div>

        <div className="section">
          <FeaturedItems title="New" category="womens" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Home);
