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
                                <div class="footer-widget">
                                    <h5 class="widget-title">Services</h5>
                                    <ul class="footer-list-menu">
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
                                <div class="footer-widget design align">
                                    <NavLink class="effect" exact to="/">Home</NavLink>
                                    <NavLink class="effect" exact to="/about" title="Holo about us ">About Us</NavLink>
                                    <NavLink class="effect" exact to="/portfolio" title="Holo about us">Portfolio</NavLink>
                                    <NavLink class="effect" exact to="/service" title="Holo services">Services</NavLink>
                                    <NavLink class="effect" exact to="/blog" title="Holo blog">Blog</NavLink>
                                    <NavLink class="effect" exact to="/career" title="Holo career">Career</NavLink>
                                    <NavLink class="effect" exact to="/contact" title="Holo contact us">Contact Us</NavLink>
                                    <NavLink class="effect" exact to="#" title="Holo contact us">Sitemap</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-12 mb-3 mb-md-0">
                                <ul class="social-icons">
                                    <li class="social-icons-facebook">
                                        <NavLink to="https://www.facebook.com/holoonline/" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></NavLink>
                                    </li>
                                    <li class="social-icons-twitter">
                                        <NavLink to="https://twitter.com/holoconnect" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></NavLink>
                                    </li>
                                    <li class="social-icons-linkedin">
                                        <NavLink to="https://www.linkedin.com/company/11256189/" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></NavLink>
                                    </li>
                                    <li class="social-icons-instagram">
                                        <NavLink to="https://www.instagram.com/holoofficial/" target="_blank" title="instagram"><i class="fa fa-instagram"></i></NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg_copyright text-center detail">
                    <p class="m-0">© Copyright 2020 by <a class="wh_color" href="https://holo.in.net/"> Holo.in.net.</a> All Rights Reserved</p>
                </div>
        </footer>
    </>
  );
};

export default Header;
