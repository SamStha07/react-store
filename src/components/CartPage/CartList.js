import React from "react";
import { ProductConsumer } from "../../context/context";
import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {(value) => {
              const { cart, increment, decrement, remove } = value;
              if (cart.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    your cart is currently empty
                  </h1>
                );
              } else {
                return (
                  <>
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        remove={remove}
                      ></CartItem>
                    ))}
                  </>
                );
              }
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
