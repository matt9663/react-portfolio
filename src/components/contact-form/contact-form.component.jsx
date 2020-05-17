import React from "react";
import "./contact-form.style.scss";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="contact-section" id="contact">
        <h2 className="section-title">Contact</h2>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mbjzlkvg"
          method="POST"
          className="contact-form"
        >
          <label>Email:</label>
          <input
            type="email"
            className="form-input email"
            name="email"
            placeholder="Email Address"
            required
          />
          <label>Message:</label>
          <textarea
            className="form-input message"
            type="text"
            name="message"
            placeholder="Don't be shy"
            rows={7}
            required
          />
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="project-button form-submit" type="submit">
              SUBMIT
            </button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
