// import logoPic from "../Assests/25.png";
import { GoThreeBars } from "react-icons/go";
import "./navbar.css"

const Navbar = () => {
  const slideOpen = () => {
    if (document.getElementById("mySidebar").style.display == "block") {
      document.getElementById("mySidebar").style.display = "none";
    } else {
      document.getElementById("mySidebar").style.display = "block";
    }
  };

  return (
    <div className="header">
      <div className="header-nav col-md-12">
        <div className="logo-head">
          {/* <img src={logoPic} height="70px"></img> */}
        </div>
        <div to="/" className="ourGames font-style-header">
          Home
        </div>
        <div to="/ourgames" className="ourGames font-style-header">
          Our Games
        </div>
        <div className="marketPlace font-style-header" to="/marketPlace">
          Market Place
        </div>
        <div to="/support" className="font-style-header">
          Support
        </div>
        <div to="/careers" className="font-style-header">
          Careers
        </div>

        <div to="/contactus" className="font-style-header">
          Contact Us
        </div>

        <div className="header-buttons-outer-flex">
          <button className="header-price-button-style font-style-header">
            $ 0.00005
          </button>
        </div>
      </div>
      <div className="header-nav-sml col 12">
        <div className="logo-head">
          {/* <img src={logoPic} height="50px"></img> */}
        </div>

        <div>
          <button className="header-price-button-style font-style-header">
            $ 0.00005
          </button>
        </div>

        <p className="menu-btn" onClick={slideOpen}>
          <GoThreeBars size={35} />
        </p>
      </div>
      <div className="slides" id="mySidebar">
        <div className="slide-down">
          <p className="font-style-header">Home </p>
        </div>
        <div className="slide-down">
          <p className="font-style-header"> Our Games </p>
        </div>
        <div className="slide-down">
          <p className="font-style-header">Market Place </p>
        </div>
        <div className="slide-down">
          <p className="font-style-header">Support</p>
        </div>
        <div className="slide-down">
          <p className="font-style-header"> Careers</p>
        </div>
        <div className="slide-down">
          <p className="font-style-header"> Contact Us </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
