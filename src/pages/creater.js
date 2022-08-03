import React from "react";
import "./creater.css";
import creator from "../assets/creator.png";
const Creater = () => {
  return (
    <div className="col-md-12 creater-outer">
      <div className="offset-2 col-md-4">
        <h3 className="h3">
          Creator-To-Consumer <br />
          Decentralize Platform
        </h3>
        <br />
        <b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi
        </p>
      </div>

      <div className="panel-default  col-md-4 creater-img-outer">
        <img src={creator} alt="" className="creater-img" />
      </div>
    </div>
  );
};
export default Creater;
