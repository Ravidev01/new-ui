import React from "react";
import {Link} from 'react-router-dom'

import "../navbar/navbar.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NEWUI
        </Link>
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
              <Link className="nav-link active " aria-current="page" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Industries
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="navbar-text login">
              <a className="nav-link" href="/#">
              Log in
              </a>
          
            <button className="btn" style={{borderRadius:"14px",fontSize:"14px",color:"white",backgroundColor:"orange"}}>Free Trial</button>
      </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
