import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      cartOpen: false,
      cartItems: 0,
      links: linkData,
      socialData: socialData,
      cart: [],
      cartItems: 0,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      storeProducts: [],
      filteredProducts: [],
      featuredProducts: [],
      singleProducts: {},
      loader: true,
    };
  }
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };
  handleCloseCart = () => {
    this.setState({ cartOpen: false });
  };
  handleOpenCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          handleCloseCart: this.handleCloseCart,
          handleOpenCart: this.handleOpenCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
