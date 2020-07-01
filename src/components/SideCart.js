import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";

export default function CartPage() {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, handleCart, cart } = value;
        return (
          <CartWrapper show={cartOpen} onClick={handleCart}>
            <p>cart items</p>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const CartWrapper = styled.div`
  position: fixed;
  top: 56px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
