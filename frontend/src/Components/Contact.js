// import React, { Component } from 'react'

// export class Contact extends Component {
//   render() {
//     return (
//       <div>Contact</div>
//     )
//   }
// }

// export default Contact
import React from "react";

function onClickButton(event) {
  event.preventDefault();
  const form = document.getElementById('my_form');
  form.reset();
}

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form id="my_form">
              <div className="form-group">
                <label for="exampleFormControlInput1">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="+1-"
                />
              </div>
              <div className="form-group pt-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group pt-3">
                <label for="exampleFormControlTextarea1">
                  Type your Message Here
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;