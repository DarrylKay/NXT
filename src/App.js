import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Checkout from "./pages/Checkout/Checkout";
import LogIn from "./pages/LogIn/LogIn";
import PayOptions from "./pages/PayOptions/PayOptions";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Wishlist from './components/Wishlist/Wishlist';
import ProductDetail from "./components/ProductDetail/ProductDetail";
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Wishlist/>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/productdetails" component={ProductDetail} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/payoptions" component={PayOptions} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
