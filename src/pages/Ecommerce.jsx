import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Ecommerce = () => {
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
                <li>eCommerce Assistant</li>
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
                <h1>eCommerce Assistant</h1>
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
                        <h4>Amazon Product Listing</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Listing product on amazon, add description &amp; image
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Magento Data Entry</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Entering simple, configurable and grouped products
                          into your Magento back-end system
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>eBay Listing Service</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Listing product on eBay, add description &amp; image
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Bulk Product Upload</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Entering simple, configurable and grouped products
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Shopify Product Upload</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Listing product on eBay, add description &amp; image
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Product Description Writing</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Describes most of the features and benefits of a given
                          product
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

export default Ecommerce;
