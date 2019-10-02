import React, { Component } from "react";
import "./LinkBoxes.scss";
import Boxes from "./Boxes/Boxes";
import mens from "../../assets/Various/mens-box-img.jpg";
import womens from "../../assets/Various/womens-box-img.jpg";
import children from "../../assets/Various/children-box-img.jpg";
import home from "../../assets/Various/home-box-img.jpg";
import { connect } from "react-redux";
import { addingProductDisplay } from "../../redux/actions/allActions";

export class LinkBoxes extends Component {
  showMensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "mens") {
        return product;
      } else return null;
    });
    return (
      <Boxes
        name="mens"
        info="formal and casual peices with fashion-forward attitude"
        image={mens}
        clicked={this.props.addingProductDisplay.bind(null, data)}
      />
    );
  };

  showWomensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "womens") {
        return product;
      } else return null;
    });
    return (
      <Boxes
        name="womens"
        info="formal and casual peices with fashion-forward attitude"
        image={womens}
        clicked={this.props.addingProductDisplay.bind(null, data)}
      />
    );
  };

  showChildrensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "childrens") {
        return product;
      } else return null;
    });
    return (
      <Boxes
        name="childrens"
        info="formal and casual peices with fashion-forward attitude"
        image={children}
        clicked={this.props.addingProductDisplay.bind(null, data)}
      />
    );
  };

  showHomeAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "home") {
        return product;
      } else return null;
    });
    return (
      <Boxes
        name="home"
        info="formal and casual peices with fashion-forward attitude"
        image={home}
        clicked={this.props.addingProductDisplay.bind(null, data)}
      />
    );
  };

  render() {
    return (
      <div className="section-boxes">
        {this.showMensAll()}
        {this.showWomensAll()}
        {this.showChildrensAll()}
        {this.showHomeAll()}
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
)(LinkBoxes);
