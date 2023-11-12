import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toogleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };

  return (
    <div className={`header ${showNav ? "show-nav" : ""}`}>
      <div className="header-logo">
        <img src={logo} alt="header-logo" />
      </div>
      <button type="button" className="toogle-btn" onClick={toogleNav}>
        ☰
      </button>
      <ul className={`nav ${showNav ? "show" : ""}`}>
        <li>Services</li>
        <li>Industries</li>
        <li>Careers</li>
        <li>Contact Us</li>
      </ul>
      <button className="action-btn">Let's Talk</button>
    </div>
  );
}

export default Header;
