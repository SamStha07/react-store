import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {/* navbar, sidebar, cart, footer */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>
    </>
  );
}

export default App;
