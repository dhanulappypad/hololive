import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Technology = () => {
    return(
        <main>
            <section className="breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="va_breadcrumb">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/virtualassistant">Virtual Assistant</NavLink></li>
                                <li>IT & Technology</li>
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
                                <h1>IT & Technology</h1>
                                <h2>Best Virtual service provider </h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="call_btn mt-3">
                                <NavLink to="/contact">Request Call Back</NavLink>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div class="row">
						    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>WordPress Virtual Assistant</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Planning, designing and developing WordPress websites (if there is no business website)</span>
									</div>
								 </div>
							</div>

							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Responsive Design/Mobile optimization</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Design the website, offering a seamless experience on any device</span>
									</div>
								 </div>
							</div>

							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Mobile App Development</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Create, maintain and implement the source code to develop mobile apps and programs that meet the needs</span>
									</div>
								 </div>
							</div>

							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Mobile Game Development</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Plan, design, and produce video games for computers, mobile devices or game consoles</span>
									</div>
								 </div>
							</div>

							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Content &amp; Image update</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Provide Website content and image updating support as needed</span>
									</div>
								 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Basic Design Changes</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Planning, redesigning and developing websites/app as needed</span>
									</div>
								 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Website &amp; Database Backup/Migration</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Doing regular backups to prevent data loss.</span>
									</div>
								 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Blog Posting</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Adding tags and images to website and blog posts</span>
									</div>
								 </div>
							</div>
							<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
								<div class="box-part text-center">
									<div class="title">
										<h4>Affiliate Marketing</h4>
									</div>
									<hr class="service_d_hr"/>
									<div class="text">
										<span>Knowing how start affiliate marketing and launching for the company</span>
									</div>
								 </div>
							</div>
					</div>
                </section>
            </div>
        </main>
    )
}

export default Technology;