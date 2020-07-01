import React, { Component } from "react";
import Title from "../Title";

import infoSection from "../../images/infoSection.jpeg";

export default class Info extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={infoSection}
                className="img-fluid img-thumbnail"
                alt="about company"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about us" center="true" />
              <p className="text-lead text-muted my-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <button
                style={{ marginTop: "2rem" }}
                className="main-link"
                type="button"
              >
                more info
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
