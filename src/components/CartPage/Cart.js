import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import CartList from "./CartList";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

export default function Cart() {
  return <div>
    <CartColumn />
    <CartList />
    <CartTotals />
  </div>;
}
