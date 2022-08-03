import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div
          className="container"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div style={{ paddingTop: "20px" }}>
            <hr className="line" />
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>FEATURES</h5>
              <p>Live Chat</p>
              <p>Email Marketing</p>
              <p>User Analytics</p>
              <p>Crypto Exchange</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>RESOURCES</h5>
              <p>Watch Demo</p>
              <p>Whitepaper</p>
              <p>Intigrations & API</p>
              <p>IOS & Android Apps</p>
              <p>Privacy & Policy</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>COMPANY</h5>
              <p>Home</p>
              <p>Blog</p>
              <p>FAQ</p>
              <p>Contact Us</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <h5>SUBSCRIBE NEWSLETTER</h5>
              <p>Follow our newsletter to stay updated about ourself.</p>
              <form className="row g-3">
                <div className="col-auto d-flex">
                  <label for="inputPassword2" className="visually-hidden">
                    Password
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputPassword2"
                    placeholder="Enter Email"/>
                  <button type="submit" className="btn-gradd">
                    Send
                  </button>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
