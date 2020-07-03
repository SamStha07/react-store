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
      singleProduct: {},
      loading: true,
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
    this.setState(
      {
        storeProducts,
        filteredProducts: storeProducts,
        featuredProducts,
        cart: this.getStorageCart(),
        singleProduct: this.getStorageProduct(),
        loading: false,
      },
      () => {
        this.getTotals();
      }
    );
  };
  //get cart items from local storage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };

  //get product from local storage
  getStorageProduct = () => {
    return localStorage.getItem("singleProduct")
      ? JSON.parse(localStorage.getItem("singleProduct"))
      : {};
  };

  //stores the carts items in local storage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };

  //get Total
  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      subTotal += item.total;
      cartItems += item.count;
    });
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.15;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    // return {
    //   cartItems,
    //   subTotal,
    //   tax,
    //   total,
    // };
    this.setState({
      cartItems: cartItems,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };

  // add total
  // addTotals = () => {
  //   const totals = this.getTotals();
  //   this.setState({
  //     cartItems: totals.cartItems,
  //     cartSubTotal: totals.subTotal,
  //     cartTax: totals.tax,
  //     cartTotal: totals.total,
  //   });
  // };

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
        this.getTotals();
        this.syncStorage();
        this.handleOpenCart();
      }
    );
  };

  //set single product
  setSingleProduct = (id) => {
    let product = this.state.storeProducts.find((item) => item.id === id);
    localStorage.setItem("singleProduct", JSON.stringify(product));
    this.setState({
      singleProduct: {
        ...product,
        loading: false,
      },
    });
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
