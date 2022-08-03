import React from "react";

import Pexels from "../assets/pexel.mp4";
import "./about.css";

const About = () => {
  return (
    <div>
      <div className="col-md-12 about-outer">
        <div className="col-md-6">
          <h3>About Lemonent</h3>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
          <video
            className="video-style"
            src={Pexels}
            loop={true}
            muted={true}
            autoPlay={true}
          />
        </div>
        {/* <div className="col-md-3"></div> */}
      </div>
    </div>
  );
};

export default About;
