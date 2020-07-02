import React from "react";
import Hero from "../components/Hero";
import Services from "../components/HomePage/Services";
import Featured from "../components/HomePage/Featured";

import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link style={{ margin: "2rem" }} className="main-link" to="/products">
          Our Products
        </Link>
      </Hero>
      <Services />
      <Featured />
    </>
  );
}
