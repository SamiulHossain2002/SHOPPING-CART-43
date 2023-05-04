import React from "react";
import logo from "../../Images/logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";
import "../About/About";

const Header = () => {
  return (
    <div className="fixed-top bg-white">
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              <img className="logo-image" src={logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link fw-bold text-black"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className=" nav-item">
                  <NavLink
                    className="nav-link fw-bold text-black"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>

                <li className="nav-item sign-in">
                  <NavLink className="nav-link fw-bold text-black" to="/signin">
                    Sign In
                  </NavLink>
                </li>

                <li className="nav-item sign-up">
                  <NavLink className="nav-link fw-bold text-white" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
