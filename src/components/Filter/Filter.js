import React, { Component } from "react";
import "./Filter.scss";
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";
import { connect } from "react-redux";
import { addingProductDisplay } from "../../redux/actions/allActions";

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mensMenuOpen: false,
      womensMenuOpen: false,
      childrensMenuOpen: false,
      homeMenuOpen: false,
      mensType: [
        "jackets and coats",
        "jeans and trousers",
        "shirts and tops",
        "shorts and trunks",
        "shoes",
        "suits",
        "underwear",
        "accessories"
      ],
      womensType: [
        "shoes",
        "underwear",
        "shirts and tops",
        "dresses and skirts",
        "bikinis and swimwear",
        "jackets and coats",
        "accessories",
        "jeans and trousers",
        "suits"
      ],
      childrensType: [
        "underwear",
        "shoes",
        "jeans and trousers",
        "skirts and dresses",
        "shirts and tops",
        "jackets and coats",
        "accessories",
        "shorts and swimwear",
        "school uniform"
      ],
      homeType: [
        "sofa",
        "table and chairs",
        "mats and rugs",
        "lights and lamps",
        "curtains",
        "beds",
        "bathroom",
        "kitchen"
      ]
    };
  }

  toggleMensMenu = () => {
    this.setState({
      mensMenuOpen: !this.state.mensMenuOpen
    });
  };

  toggleWomensMenu = () => {
    this.setState({
      womensMenuOpen: !this.state.womensMenuOpen
    });
  };

  toggleChildrensMenu = () => {
    this.setState({
      childrensMenuOpen: !this.state.childrensMenuOpen
    });
  };

  toggleHomeMenu = () => {
    this.setState({
      homeMenuOpen: !this.state.homeMenuOpen
    });
  };

  showMensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "mens") {
        return product;
      } else return null;
    });
    return (
      <button onClick={this.props.addingProductDisplay.bind(null, data)}>Mens</button>
    );
  };

  showMensSearch = () => {
    return this.state.mensType.map((type, index) => {
      const data = this.props.productData.filter(product => {
        if (product.category === "mens" && product.type === type) {
          return product;
        }
        return null;
      });
      return (
        <div className="category-item" key={index}>
          <FaAngleRight />
          <button onClick={this.props.addingProductDisplay.bind(null, data)}>
            {type}
          </button>
        </div>
      );
    });
  };

  showWomensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "womens") {
        return product;
      } else return null;
    });
    return (
      <button onClick={this.props.addingProductDisplay.bind(null, data)}>Womens</button>
    );
  };

  showWomensSearch = () => {
    return this.state.womensType.map((type, index) => {
      const data = this.props.productData.filter(product => {
        if (product.category === "womens" && product.type === type) {
          return product;
        }
        return null;
      });
      return (
        <div className="category-item" key={index}>
          <FaAngleRight />
          <button onClick={this.props.addingProductDisplay.bind(null, data)}>
            {type}
          </button>
        </div>
      );
    });
  };

  showChildrensAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "childrens") {
        return product;
      } else return null;
    });
    return (
      <button onClick={this.props.addingProductDisplay.bind(null, data)}>
        Childrens
      </button>
    );
  };

  showChildrensSearch = () => {
    return this.state.childrensType.map((type, index) => {
      const data = this.props.productData.filter(product => {
        if (product.category === "childrens" && product.type === type) {
          return product;
        }
        return null;
      });
      return (
        <div className="category-item" key={index}>
          <FaAngleRight />
          <button onClick={this.props.addingProductDisplay.bind(null, data)}>
            {type}
          </button>
        </div>
      );
    });
  };

  showHomeAll = () => {
    const data = this.props.productData.filter(product => {
      if (product.category === "home") {
        return product;
      } else return null;
    });
    return (
      <button onClick={this.props.addingProductDisplay.bind(null, data)}>Home</button>
    );
  };
  showHomeSearch = () => {
    return this.state.homeType.map((type, index) => {
      const data = this.props.productData.filter(product => {
        if (product.category === "home" && product.type === type) {
          return product;
        }
        return null;
      });
      return (
        <div className="category-item" key={index}>
          <FaAngleRight />
          <button onClick={this.props.addingProductDisplay.bind(null, data)}>
            {type}
          </button>
        </div>
      );
    });
  };

  render() {
    return (
      <div id="filter-section">
        <div className="heading">
          <h3>short cuts</h3>
        </div>
        <div className="filter-menu-group">
          <h5>category</h5>
          <div className="category">
            <FaAngleDoubleRight onClick={this.toggleMensMenu} />
            {this.showMensAll()}
            <div
              className="category-submenu"
              style={{
                display: this.state.mensMenuOpen ? "block" : "none"
              }}
            >
              {this.showMensSearch()}
            </div>
          </div>
          <div className="category">
            <FaAngleDoubleRight onClick={this.toggleWomensMenu} />
            {this.showWomensAll()}
            <div
              className="category-submenu"
              style={{
                display: this.state.womensMenuOpen ? "block" : "none"
              }}
            >
              {this.showWomensSearch()}
            </div>
          </div>
          <div className="category">
            <FaAngleDoubleRight onClick={this.toggleChildrensMenu} />
            {this.showChildrensAll()}
            <div
              className="category-submenu"
              style={{
                display: this.state.childrensMenuOpen ? "block" : "none"
              }}
            >
              {this.showChildrensSearch()}
            </div>
          </div>
          <div className="category">
            <FaAngleDoubleRight onClick={this.toggleHomeMenu} />
            {this.showHomeAll()}
            <div
              className="category-submenu"
              style={{
                display: this.state.homeMenuOpen ? "block" : "none"
              }}
            >
              {this.showHomeSearch()}
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

export default connect(
  mapStateToProps,
  { addingProductDisplay }
)(Filter);
