import React from "react";
import {Link, NavLink} from 'react-router-dom';
import logo from '../images/img/logoholo.png';

const Header = () => {
  return (
    <>
      <header>
        <div className="topHeader d-none d-md-block m-auto">
            <div className="container">
              <ul>
                <li><NavLink to="#">Online Branding & Marketing</NavLink></li>
                <li><NavLink to="#">SEO & Google Tools</NavLink></li>
                <li><NavLink to="#">Website/Mobile App/IT solutions</NavLink></li>
                <li><NavLink to="#">Social Media Marketing</NavLink></li>
              </ul>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <NavLink to='/' className="navbar-brand">
                <img width="100" src={logo} alt=""/>
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
