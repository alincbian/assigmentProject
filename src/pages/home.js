import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <center>
        <div className="container-fluid">
        <div className="px-4 py-5 text-center">
              <h3 className="">
                The 1<sup>st</sup> Social Network where<br/> likes have value
              </h3>
              <div className="col-lg-6 mx-auto">
                <p className=" mb-4">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    className="btn-grad"
                  >
                    Primary 
                  </button>
                  <button
                    type="button"
                    className="btn-grad2 "
                  >
                    Secondary
                  </button>
                </div>
              </div>
            </div>
        </div>
      </center>
      <div className="custom-shape-divider-bottom-1601395945">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
}
export default Home;
