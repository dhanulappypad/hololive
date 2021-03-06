import React from "react";

const About = () => {
  return (
    <main>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <h4>Who we are?</h4>
            <p>
              HOLO is a well-known IT Staffing Company that bestows the quality
              and timely services such as Web Development, Web Designing,
              SEO/Content Writing, etc.
            </p>
            <br />
            <h4>Who we do?</h4>
            <p>
              We seek to innovate in a way that minimizes the gap between our
              offerings and client needs. Thus, Zero distance between our
              services and client requirements.Our company experts provide the
              full support and hard work regarding the completion of the
              projects and execute the solution to a problem in the minimum time
              period.
            </p>
            <p>
              Our Vision is to bring the world-class technology solutions and
              sustainable business solutions for a better technology. We build
              the trainees at the best for the upcoming new advancements in the
              technology that brings up the company to its new level in the
              latest technology.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <div className="video-block">
              <a
                href="#"
                className="vdo-thumb red-shadow"
                data-toggle="modal"
                data-target=".video-modal"
              >
                <img
                  src={process.env.PUBLIC_URL + "/assets/img/about.jpg"}
                  className="img-responsive"
                  alt="video image"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-md-6 col-12">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/img-about-man.png"}
                className="img-responsive w-100"
                alt="video image"
              />
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="block-wrapper">
                    <div className="section-title text-left">
                        <h1 className="h4">We do things different way...</h1>
                    </div>
                    <div className="media left-icon-style">
                        <div className="media-left media-middle">
                            <i className="fa fa-bar-chart icon-circle" aria-hidden="true"></i>
                        </div>
                        <div className="media-body media-middle">
                            <h5 className="media-heading">High Performance and Maintenance </h5>
                            <p>The experts and the technical staff involves quality and time management services. They provide the quality engineering and assurance team work and provide the unique development to the clients</p>
                        </div>
                    </div>

                    <div className="media left-icon-style">
                        <div className="media-left media-middle">
                            <i className="fa fa-life-ring icon-circle" aria-hidden="true"></i>
                        </div>
                        <div className="media-body media-middle">
                            <h5 className="media-heading">Innovative &amp; top notch IT solutions</h5>
                            <p>The super quality and unique innovations are highlighted and in demand. The IT experts and technicians at HOLO bestow the full leading technologies and all the IT solutions as per the customer’s requirements. </p>
                        </div>
                    </div>

                    <div className="media left-icon-style">
                        <div className="media-left media-middle">
                            <i className="fa fa-thumbs-up icon-circle" aria-hidden="true"></i>
                        </div>
                        <div className="media-body media-middle">
                            <h5 className="media-heading">Marketing</h5>
                            <p>The professionals of the company work in tandem to formulate a plan and accomplish the marketing goals as laid out by the customer. We hold the security management, data integration, reports and much more. </p>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
