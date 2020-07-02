import React, { Component } from "react";
import Title from "../Title";

export default class Featured extends Component {
  render() {
    return (
      <div>
        <Title
        //   style={{ marginTop: "5rem" }}
          title="featured products"
          center="true"
        />
      </div>
    );
  }
}
