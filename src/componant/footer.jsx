import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <>
        <footer>
                <div className="mainFooter text-center text-md-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12 mb-3 mb-md-0">
                                <h5>About Us</h5>
                                <p className="mb-2">Holo - Next Gen IT & Advertising platform with Live and dynamic websites.</p>
                                <a href="mailto:contact@holo.in.net"><i className="fa fa-envelope"></i> contact@holo.in.net</a>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12 mb-3 mb-md-0">
                                <div className="footer-widget">
                                    <h5 className="widget-title">Services</h5>
                                    <ul className="footer-list-menu">
                                        <li><a href="#">Social Media Marketing</a></li>
                                        <li><a href="#" title="Holo Mobile Application services">Mobile Application</a></li>
                                        <li><a href="#" title="Holo Google Service &amp; Online Presence services">Google Service &amp; Online  Presence</a></li>
                                        <li><a href="#" title="Holo SEO &amp; content services">SEO &amp; content</a></li>
                                        <li><a href="#" title="Holo WebSite Designing services">WebSite Designing</a></li>
                                        <li><a href="#" title="Holo Visiting Cards &amp; Business Product services">Visiting Cards &amp; Business Product</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-12 mb-3 mb-md-0">
                                <div className="footer-widget design align">
                                    <NavLink className="effect" exact to="/">Home</NavLink>
                                    <NavLink className="effect" exact to="/about" title="Holo about us ">About Us</NavLink>
                                    <NavLink className="effect" exact to="/portfolio" title="Holo about us">Portfolio</NavLink>
                                    <NavLink className="effect" exact to="/service" title="Holo services">Services</NavLink>
                                    <NavLink className="effect" exact to="/blog" title="Holo blog">Blog</NavLink>
                                    <NavLink className="effect" exact to="/career" title="Holo career">Career</NavLink>
                                    <NavLink className="effect" exact to="/contact" title="Holo contact us">Contact Us</NavLink>
                                    <NavLink className="effect" exact to="#" title="Holo contact us">Sitemap</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-12 mb-3 mb-md-0">
                                <ul className="social-icons">
                                    <li className="social-icons-facebook">
                                        <NavLink to="https://www.facebook.com/holoonline/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></NavLink>
                                    </li>
                                    <li className="social-icons-twitter">
                                        <NavLink to="https://twitter.com/holoconnect" target="_blank" title="Twitter"><i className="fa fa-twitter"></i></NavLink>
                                    </li>
                                    <li className="social-icons-linkedin">
                                        <NavLink to="https://www.linkedin.com/company/11256189/" target="_blank" title="Linkedin"><i className="fa fa-linkedin"></i></NavLink>
                                    </li>
                                    <li className="social-icons-instagram">
                                        <NavLink to="https://www.instagram.com/holoofficial/" target="_blank" title="instagram"><i className="fa fa-instagram"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg_copyright text-center detail">
                    <p className="m-0">© Copyright 2020 by <a className="wh_color" href="https://holo.in.net/"> Holo.in.net.</a> All Rights Reserved</p>
                </div>
        </footer>
    </>
  );
};

export default Header;
