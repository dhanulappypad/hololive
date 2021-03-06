import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Seo = () => {
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
                <li>SEO</li>
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
                <h1>SEO</h1>
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
                        <h4>Article &amp; Blog Post Creation</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Writing, editing, publishing, and promoting content
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Guest Posting &amp; Guest Blogging</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Writing content for company's website in order to:
                          Attract traffic
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Composing Newsletters</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Plan, organize, edit and write parts of the content of
                          each month’s newsletter
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Content Marketing Material</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Developing a campaign that drives traffic, improves
                          customer engagement, leads &amp; sales
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Designing Brochures</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Prepares work to be accomplished by gathering
                          information and materials
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Book Reviews</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Publishing extensive how-to guides and
                          industry-related book reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Writing op-ed Pieces</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Writing and submitting op-ed pieces to newspapers
                          &amp; websites
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Responding Business Blog</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Generating, researching &amp; pitching ideas for
                          posts.Writing, editing, publishing &amp; promoting
                          content
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Interviewing Industry Sources</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Interviewing industry sources to write an in-depth
                          report on market
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div class="box-part text-center">
                      <div class="title">
                        <h4>Interviewing Previous Customers</h4>
                      </div>
                      <hr class="service_d_hr" />
                      <div class="text">
                        <span>
                          Interviewing previous customers to compose case
                          studies
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

export default Seo;
