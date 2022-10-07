import React from "react";
import {NavLink} from 'react-router-dom'

import "../navbar/navbar.css";

function Navbar() {
  let activeStyle = {
    // textDecoration: "underline",
    color: '#265BCB'
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          NEWUI
        </NavLink>
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
              <NavLink className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined} aria-current="page" to="/features">
                Features
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/resources">
                Industries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/resources">
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined}  to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" style={({ isActive }) =>
              isActive ? activeStyle : undefined} to="/resources">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
          {/* <div className=" d-none d-md-block row "> */}

              <a className="nav-link mt-md-1 me-4 d-md-none d-md-block   md-row " to="/about">
              Log In
              </a>
            <button className="btn d-md-none  d-md-block " style={{borderRadius:"14px",fontSize:"14px",color:"white",backgroundColor:"orange"}}>Free Trial</button>
          {/* </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
