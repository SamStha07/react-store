import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

export default function CartItem({ cartItem, increment, decrement, remove }) {
  const { id, title, price, quantity, total, image, count } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="image-fluid" alt="product" />
      </div>
      {/* end image */}
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product: </span>
        {title}
      </div>
      {/* end title */}
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price: </span>
        Rs.{price}
      </div>
      {/* end price */}
      {/* count control */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => increment(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleDown
              className="cart-icon text-primary"
              onClick={() => decrement(id)}
            />
          </div>
        </div>
      </div>
      {/* end of count control */}
      {/* remove */}
      <div className="col-10 mx-auto col-lg-2 ">
        <FaTrash className="text-danger cart-icon" onClick={() => remove(id)} />
      </div>
      {/* end remove */}
      {/*  total */}
      <div className="col-10 mx-auto col-lg-2 ">
        <strong className="text-muted">item total: Rs.{total}</strong>
      </div>
      {/* end total */}
    </div>
  );
}
