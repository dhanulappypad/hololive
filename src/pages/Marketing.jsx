import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Marketing = () => {
  return (
    <main>
      <section className="breadcrumb_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="va_breadcrumb">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/virtualassistant">Virtual Assistant</NavLink>
                </li>
                <li>Marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <section>
          <div className="row">
            <div className="col-md-9 col-12">
              <div className="service_name">
                <h1>Marketing</h1>
                <h2>Best Virtual service provider </h2>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <div className="call_btn mt-3">
                <NavLink to="/contact">Request Call Back</NavLink>
              </div>
            </div>
          </div>

          <hr />

          <div class="row">
            <div class="col-md-12">
              <div class="child_services">
                <p>Included Services</p>
              </div>
              <div class="box pl-10">
                <div class="row">
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Search Engine Marketing</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Developing, updating and optimizing an SEO and web
                          marketing strategy
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Pay Per Click Management</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Launching and optimizing PPC campaigns,producing
                          reports for management
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Google Adwords &amp; Facebook Ads</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Designing advertisements,Launching &amp; producing
                          reports
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Keyword Analysis and Optimization</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Conducting a keyword research for website and
                          performing a blog analysis
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Bidding Management</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Provide Website content and image updating support as
                          needed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Basic Design Changes</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Prepare Proposals,Manage Databases,Provide Customer
                          Service,Oversee Bid Pricing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Meta Tag &amp; Title Optimization</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Research meta tag &amp; title for website and set that
                          data in website page
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Sitemaps Building &amp; Submission</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Review pages structure,Code &amp; Validate URLs,Add
                          sitemap to robots.txt,Submitting sitemap
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Off-page Optimization</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Commenting on other blogs, responding to the public on
                          YouTube and news websites
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Updating All Social Media Accounts</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Updating all social media accounts on a regular basis
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Marketing;
