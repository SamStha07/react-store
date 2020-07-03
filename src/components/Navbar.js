import React, { Component } from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context/context";
import logo from "../images/logo.svg";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { cartItems, handleCart, handleSidebar } = value;
          return (
            <NavWrapper>
              <div className="nav-center">
                <FaBars className="nav-icon" onClick={handleSidebar} />
                <Link to="/">
                  <img src={logo} alt="store logo" />
                </Link>

                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  position: sticky;
  position: --webkit-sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .cart-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: 9px;
    right: 13px;
    padding: 0 5px;
    border-radius: 50%;
  }
  img {
    cursor: pointer;
  }
`;
