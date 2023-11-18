import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-bootstrap-icons';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  // const navLinks = document.querySelectorAll('.nav-link');
  // const activate = (event) =>{
  //   navLinks.forEach(nav => {
  //     nav.classList.remove("active");
  //     if (event.target.classList.contains('logo')) {
  //       navLinks[0].classList.add("active");
  //     } else {
  //       event.target.classList.add("active");
  //     }
  //   });
  // }

  return (
    <nav className={`navbar sticky-top navbar-expand-lg border-bottom navbar-${props.mode} bg-${props.mode === "light" ? "white" : "black"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={props.logo} alt="Logo" height="30" className="logo d-inline-block align-text-top" style={props.filterStyle} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-4 mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-2 fw-medium">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item me-2 fw-medium">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button className={`btn btn-${props.mode === "light" ? "dark" : "light"} my-1 me-2`} onClick={props.modeToggler}>
            {props.icon === "MoonStarsFill" ? <Icon.MoonStarsFill size={24} /> : <Icon.SunFill size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  logo: PropTypes.string
}