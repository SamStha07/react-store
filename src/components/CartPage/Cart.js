import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
  return (
    <section className="py-5">
      {/* title */}
      <div className="container">
        <Title title="your cart items" center="true" />
      </div>
      <CartColumn />
      <CartList />
      <CartTotals />
    </section>
  );
}
