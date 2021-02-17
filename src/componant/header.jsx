import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className="topHeader d-none d-md-block m-auto">
            <div className="container">
              <ul>
                <li><a href="#">Online Branding & Marketing</a></li>
                <li><a href="#">SEO & Google Tools</a></li>
                <li><a href="#">Website/Mobile App/IT solutions</a></li>
                <li><a href="#">Social Media Marketing</a></li>
              </ul>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink to='/' className="navbar-brand">
                <img width="100" src="/assets/img/logoholo.png" alt=""/>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link" href="#">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/about" className="nav-link" href="#">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/portfolio" className="nav-link" href="#">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/service" className="nav-link" href="#">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/virtualassistant" className="nav-link" href="#">
                    Virtual Assistant
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/blog" className="nav-link" href="#">
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/career" className="nav-link" href="#">
                    Career
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact to="/contact" className="nav-link" href="#">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
