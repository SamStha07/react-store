import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center="true" />
          <form
            className="mt-5"
            action="https://formspree.io/samshrestha108@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id=""
                className="form-control"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send" 
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
