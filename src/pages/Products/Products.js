import React, { Component } from "react";
import "../../App.scss";
import "./Products.scss";
import Filter from "../../components/Filter/Filter";
import ProductContainer from "../../components/ProductContainer/ProductContainer";
import { connect } from "react-redux";
import { TimelineMax } from "gsap";

export class Products extends Component {
  constructor(props) {
    super(props);

    this.myProducts = null;
  }

  componentDidMount() {
    new TimelineMax().from(this.myProducts, 1, { y: 50, opacity: 0 });
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div id="products">
          <div className="section">
            <div
              className="all-products-container"
              ref={div => (this.myProducts = div)}
            >
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
