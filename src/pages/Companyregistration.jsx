import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Companyregistration = () => {
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
                <li>Company Registration and Legal Compliances</li>
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
                <h1>Company Registration and Legal Compliances</h1>
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
                        <h4>Company Registration</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Acquire DIN, Acquire DSC, Create a account on MCA
                          Portal,Apply for registration
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>DIN Generation</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Create your account,fill application correctly,Submit
                          all proof,Paying fees, getting acknowledgement{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Trademark Registration</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Filling all application forms for registration, Submit
                          all douments,Paying fees, getting acknowledgement{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Legal Risk Management</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Risk tolerance, identifies potential risks and
                          prioritizes the tolerance for risk ,manages and
                          mitigates risks throughout the organization
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

export default Companyregistration;
