import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/context";

export default function SingeProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
      <ProductConsumer>
        {(value) => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            console.log("loading");
            return <h1>product loading...</h1>;
          }
          const {
            company,
            description,
            price,
            image,
            id,
            title,
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      src={`../${image}`} //images are in the root folder inside public
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model: {title}</h5>
                    <h5 className="text-capitalize text-muted mb-4">
                      company: {company}
                    </h5>
                    <h5 className="text-main text-capitalize mb-4">
                      price: Rs.{price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some ndo about product:
                    </p>
                    <p>{description}</p>
                    <button
                      type="button"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
