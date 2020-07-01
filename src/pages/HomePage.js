import React from "react";
import { ProductConsumer } from "../context/context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero>
        <Link to='/products'>Products</Link>
      </Hero>
    </>
  );
}
