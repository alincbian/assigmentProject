import React from "react";

function Navbars() {
  return (
    <>
      <div className="container-fluid">
        <nav
          className="navbar navbar-expand-lg navbar-light text-white"
          style={{ backgroundColor: "#ADC93D" }}
        >
          <a className="navbar-brand text-white" href="#">
            LEMONET
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Why
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Benifit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Token Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  FAQ's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div>
              <button type="button" className="btn-grad">
                Join Us
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbars;
