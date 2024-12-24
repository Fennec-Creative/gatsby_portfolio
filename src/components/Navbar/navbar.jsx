import React from "react";
import { Link } from "gatsby";
import { handleDropdown, handleMobileDropdown } from "common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mr-auto">
           
            <li className="nav-item">
              <Link to={`/`} className="nav-link">
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Case Studies
              </span>
              <div className="dropdown-menu">
                <Link to={`/`} className="dropdown-item">
                  MyEverBright
                </Link>
                <Link to={`/`} className="dropdown-item">
                  Axil Design System
                </Link>
                <Link to={`/`} className="dropdown-item">
                  Improved Search
                </Link>
                <Link to={`/`} className="dropdown-item">
                  Chore Quest 
                </Link>
              </div>
            </li>
            <li className="nav-item">
              
              <Link to={`/#case_studies`} className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
