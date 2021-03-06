import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Recruitment = () => {
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
                <li>Recruitment</li>
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
                <h1>Recruitment</h1>
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
                        <h4>Applicant Tracking</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Colloect resumes from different sources, picking up
                          details and manually entering into database{" "}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Selection</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Sourcing, screening, shortlisting and selecting the
                          right candidates for the required vacant positions.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>New Hire Processing</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Reviewing applications, selecting candidates to
                          interview, performing various pre-employment tests and
                          checks
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Compensation Planning</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Benchmarking, ensuring current documentation, and
                          strategizing compensation and benefits with
                          performance
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Onboarding</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Train candidate about attitudes, knowledge, skills,
                          and behaviors required to function within an
                          organization
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Reporting</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Manage employment concerns like firing and
                          disciplining staff, generate the progress report
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

export default Recruitment;
