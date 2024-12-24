import React from "react";
import { Link } from "react-scroll";
import { handleDropdown, handleMobileDropdown } from "common/navbar";

const NavbarArch = ({ navbarRef, theme }) => {
  
  return (
    <nav className="navbar navbar-expand-lg" ref={navbarRef}>
      <div className="container">
        

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
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
          <ul className="navbar-nav m-auto">

          <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Case Studies
              </span>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href={`/case-studies/myeverbright`}
                >
                  MyEverBright
                </a>
                <a
                  className="dropdown-item"
                  href={`/case-studies/axil-design-system`}
                >
                  Axil Design System
                </a>
                <a
                  className="dropdown-item"
                  href={`/case-studies/search-feature`}
                >
                  A Better Search 
                </a>
                <a
                  className="dropdown-item"
                  href={`/case-studies/quest-for-a-clean-house`}
                >
                  Chore Quest
                </a>
                
              </div>
            </li>

            
            <li className="nav-item">
            <a className="nav-link" href="/about">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
