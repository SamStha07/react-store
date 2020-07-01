import React from "react";
import Hero from "../components/Hero";
import aboutBcg from "../images/aboutBcg.jpeg";
import Info from "../components/AboutPage/Info";
// import Title from "../components/Title";

export default function AboutPage() {
  return (
    <>
      <Hero img={aboutBcg}  />
      <Info />
    </>
  );
}
