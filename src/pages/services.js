import React from "react";
import Gimg from "../assets/gg.png";
import "./services.css";

const Services = () => {
  return (
    <>
      <div className="col-md-12 services-outer">
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          <h3>Our Technology Services</h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="col-md-12 services-inner ">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <div className="col-md-12 services-flex">
            <div className="col-md-6 services-card-outer">
              <div className="col-md-12">
                <div className="col-md-6">
                  <div className="services-card-style">
                    <img
                      src="https://dummyimage.com/600x400/000/fff"
                      alt=""
                      className="card-inner-img"
                    />
                    <h6>Easy to Buy</h6>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services-card-style">
                    <img
                      src="https://dummyimage.com/600x400/000/fff"
                      alt=""
                      className="card-inner-img"
                    />
                    <h6>Responsive Design</h6>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 services-card-outer">
              <div className="col-md-12">
                <div className="col-md-6">
                  <div className="services-card-style">
                    <img
                      src="https://dummyimage.com/600x400/000/fff"
                      alt=""
                      className="card-inner-img"
                    />
                    <h6>Easy to communicate</h6>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="services-card-style">
                    <img
                      src="https://dummyimage.com/600x400/000/fff"
                      alt=""
                      className="card-inner-img"
                    />
                    <h6>Safe and secure </h6>
                    <p>
                      Lorem ipsum is placeholder text commonly used in the
                      graphic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <button type="button" className="btn-grad">
              Download Now
            </button>{" "}
          </div>
        </div>

        <div className="col-md-4 services-img-outer">
          <img src={Gimg} alt="" className="services-img" />
        </div>
        <div className="col-md-2"></div>
      </div>
    </>
  );
};

export default Services;
