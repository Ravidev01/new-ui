import React from "react";

import "../navbar/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NEWUI
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarText">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/industries">
                Industries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/resources">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="navbar-text login">
              <a className="nav-link" href="/resources">
              Log in
              </a>
          
            <button style={{borderRadius:"14px",fontSize:"14px",color:"white",backgroundColor:"orange"}}>Free Trial</button>
      </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
