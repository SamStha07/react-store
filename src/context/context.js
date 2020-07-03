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
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0,
      storeProducts: [],
      filteredProducts: [],
      featuredProducts: [],
      singleProducts: {},
      loading: false,
    };
  }

  componentDidMount() {
    //from contentful items
    this.setProducts(items);
  }
  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });
    // console.log(storeProducts);  show all the products in our productData.js
    //featured Products
    let featuredProducts = storeProducts.filter(
      (item) => item.featured === true
    );
    // console.log(featuredProducts);
    this.setState({
      storeProducts,
      filteredProducts: storeProducts,
      featuredProducts,
      cart: this.getStorageCart(),
      singleProducts: this.getStorageProduct(),
      loading: false,
    });
  };
  //get cart from local storage
  getStorageCart = () => {
    return [];
  };

  //get product from local storage
  getStorageProduct = () => {
    return {};
  };

  //get Total
  getTotals = () => {};

  //add total
  addTotals = () => {};

  //sync storage
  syncStorage = () => {};

  //add to cart
  addToCart = (id) => {
    let tempCart = [...this.state.cart]; //inside the cart
    let tempProducts = [...this.state.storeProducts]; ///gives our all products
    let tempItem = tempCart.find((item) => item.id === id); //find le single item dinxa
    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState(
      () => {
        return {
          cart: tempCart,
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.handleOpenCart();
      }
    );
  };

  //set single product
  setSingleProduct = (id) => {
    console.log(id);
  };

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
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
