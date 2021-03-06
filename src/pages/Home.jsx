import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel2';
import '../../node_modules/react-owl-carousel2/src/owl.carousel.css';
import service1 from '../images/img/home1.jpg';
import service2 from '../images/img/home2.jpg';
import service3 from '../images/img/home3.jpg';
import $ from "jquery";
window.jquery = $;


class Home extends React.Component{
    constructor(props, context) {
		super(props, context);

		this.state = {
			items: [
				<div key={1} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/1.png"} alt="1" /></div>,
				<div key={2} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/2.png"} alt="1" /></div>,
				<div key={3} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/3.png"} alt="1" /></div>,
                <div key={4} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/4.png"} alt="1" /></div>,
				<div key={5} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/5.png"} alt="1" /></div>,
                <div key={6} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/6.png"} alt="1" /></div>,
				<div key={7} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/7.png"} alt="1" /></div>,
                <div key={8} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/8.png"} alt="1" /></div>,
				<div key={9} className="item"><img src={process.env.PUBLIC_URL +"/assets/img/logo/9.png"} alt="1" /></div>,
			],

			itemNo: 5,
			loop: true,
			nav: false,
            dotsEach: false,
			autoplay: true,
            autoWidth: true,
		};
	}

    componentDidMount(){
        $(".option").on('click', function(){
            $(".option").removeClass("active");
            $(this).addClass("active");
        });
    };

    render() {
        const options = {
			items: this.state.itemNo,
			loop: this.state.loop,
			nav: this.state.nav,
			autoplay: this.state.autoplay,
            autoWidth: this.state.autoWidth,
		};

		const events = {
			onDragged: function(event) { console.log('onDragged: ' + event.type); },
			onChanged: function(event) { console.log('onChanged: ' + event.type); },
			onTranslate: function(event) { console.log('onTranslate: ' + event.type); }
		};

        return (
            <main>
                <section className="landing">
                    <div className="homeImg">
                        <div className="options">
                            <div className="option">
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Website Design</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option active">
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Digital Marketing</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option">
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Web Devlopment</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option">
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">IT Solutions</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option">
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fa fa-arrow-circle-right"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Test</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="call-to-action-variant-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="action-content">
                                    <div className="action-text desktop_view">
                                        <h1> We help you grow your business. Let's build your brand </h1>
                                    </div>
                                    <div className="action-button">
                                        <NavLink className="btn btn-default" exact to="/contact">Request Free Quotation</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="values_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-6 col-12">
                            <div className="per_wrap d-flex justify-content-start">
                                <div className="wrap_img right float-left">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/per1_1.png"} alt="Start" />
                                </div>
                                <div className="wrap_box botm float-right">
                                    <p> Started in </p>
                                    <h5> 2016 </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col-12">
                            <div className="per_wrap">
                                <div className="wrap_img right">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/per2_2.png"} alt="Work" />
                                </div>
                                <div className="wrap_box">
                                    <p> Worked with over </p>
                                    <h5> 100 +</h5> <div> Teams</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col-12">
                            <div className="per_wrap">
                                <div className="wrap_img right">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/per3_3.png"} alt="products" />
                                </div>
                                <div className="wrap_box">
                                    <p> Helped Launch </p>
                                    <h5> 50 +</h5> <div> Products</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-xs-6 col-12">
                            <div className="per_wrap">
                                <div className="wrap_img right">
                                    <img src={process.env.PUBLIC_URL + "/assets/img/per4_4.png"} alt="Happy Clients" />
                                </div>
                                <div className="wrap_box">
                                    <p> Satisfied Clients </p>
                                    <p className="marg_bottom0"> Happy Clients </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <section className="how-can_section mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mb-20">
                                <h3 className="main_title"> How can we build your Product and Brand? </h3>
                                <p className="how-can_section_h4">We focus on High Velocity Product Development, and have helped over 100 teams launch over 50 products. Our thought leaders handle the entire lifecycle of high velocity product development from assessment, to Agile training and coaching and including A+ front-end engineers, UX designers, DevOps &amp; QA professionals.</p>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col text-center">
                                <div className="icon">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/assets/img/uidesign.svg"} alt="UX/UI Design" />
                                </div>
                                <h5 className="box_title"> UX/UI Design </h5>
                                <p className="how-can_section_p"> Within a week our UX practitioners will work with the team to create a user tested clickable MVP prototype.  </p>
                            </div>

                            <div className="col text-center">
                                <div className="icon">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/assets/img/frontend-backend.png"} alt="Front-End / Back-End" />
                                </div>
                                <h5 className="box_title"> Front-End / Back-End</h5>
                                <p className="how-can_section_p"> Accelerate Web &amp; Mobile Application Design, Development &amp; Deployment  </p>
                            </div>

                            <div className="col text-center">
                                <div className="icon">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/assets/img/organization.png"} alt="Organization Assessment" />
                                </div>
                                <h5 className="box_title"> Organizational Assessment </h5>
                                <p className="how-can_section_p"> Roadmaps to Reducing Lead Time &amp; Accelerating Product Development </p>
                            </div>

                            <div className="col text-center">
                                <div className="icon">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/assets/img/cms_training.png"} alt="Training" />
                                </div>
                                <h5 className="box_title"> CMS and Training </h5>
                                <p className="how-can_section_p"> Fast-Track Agile Adoption &amp; Accelerate Product Development  </p>
                            </div>

                            <div className="col text-center">
                                <div className="icon">
                                    <img className="img-responsive" src={process.env.PUBLIC_URL + "/assets/img/statistics.png"} alt="Statistics" />
                                </div>
                                <h5 className="box_title"> statistics &amp; Analytical Reports </h5>
                                <p className="how-can_section_p"> Accelerate Product Development &amp; Establish Servant Leadership  </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pad-bottom-50 pt-4 gray-bg">
                    <div className="container">
                        <div className="section-title text-center mb-4">
                            <p>Digital marketing along With A-Z Business &amp; It Solutions. We serve small businesses &amp; emerging brands.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-12">
                                <div className="thumbnail-variant-1 thumbnail red-top-border red-shadow">
                                    <img src={service1} alt="Saving Solutions" />
                                    <div className="caption">
                                        <h5>Online Marketing</h5>
                                        <p>Combination of social media &amp; google tools which makes it possible for your business to emerge as a brand.</p>
                                        <br/>
                                        <NavLink exact to="/service" className="btn btn-link" role="button">Read More <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="thumbnail-variant-1 thumbnail green-top-border green-shadow">
                                    <img src={service2} alt="Saving Solutions" />
                                    <div className="caption">
                                        <h5>WebSite Design / Mobile Applications</h5>
                                        <p>Latest coding methodologies along with responsive, mobile friendly &amp; faster will attract more customers &amp; users on your website. </p>
                                        <br/>
                                        <NavLink exact to="/service" className="btn btn-link" role="button">Read More <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <div className="thumbnail-variant-1 thumbnail blue-top-border blue-shadow">
                                    <img src={service3} alt="Saving Solutions" />
                                    <div className="caption">
                                        <h5>SEO &amp; Google tools</h5>
                                        <p>Search Engine Optimization is latest &amp; popular trend being adopted by big brands. We are expert in SEO &amp; all google tools. We help you rank your business on the 1<sup>st</sup> page  of google search.</p>
                                        <br/>
                                        <NavLink exact to="/service" className="btn btn-link" role="button">Read More <i className="fa fa-chevron-right" aria-hidden="true"></i> </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-statistics">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center h2_fff">
                                <h2>We take care of IT part of your business.</h2>
                                <h2>We also take care of Branding &amp; Online marketing for your campaigns.</h2>
                                <div className="action-button mt-4">
                                    <NavLink className="btn btn-default" exact to="/contact">Inquire Today</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="tech_section ptb-30">
                    <div className="container">
                        <h2 className="main_title text-center mb-5"> Technologies We Use</h2>
                        <div className="row">
                            <div className="owl-carousel mt-15 owl-loaded owl-drag" id="tech_slider">
                                <OwlCarousel className="techCarousel" ref="car" options={options} events={events} >
                                    {this.state.items}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="value_section pt-25 pb-25">
                    <div className="container">
                        <h2 className="title mt-4 mb-4"> Our Values </h2>
                        <div className="row">

                            <div className="value_box col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value1.png"} className="img" alt="value1"/>
                                <p className="m-0"> <strong>Ownership</strong> </p>
                                <div className="value_cnt">
                                    <p> We deliver on our commitments and are responsible for our actions. </p>
                                </div>
                            </div>

                            <div className="value_box col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value2.png"} className="img" alt="value2"/>
                                <p className="m-0"> <strong>Positivity</strong> </p>
                                <div className="value_cnt">
                                    <p> We take a glass half-full approach, avoid negative energy. </p>
                                </div>
                            </div>

                            <div className="value_box col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value3.png"} className="img" alt="value3"/>
                                <p className="m-0"> <strong>Focus</strong></p>
                                <div className="value_cnt">
                                    <p> We keep our attention on our goals and priorities. </p>
                                </div>
                            </div>

                            <div className="value_box  removeline_right col-md-3 col-xs-6 text-center">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value4.png"} className="img" alt="value4"/>
                                <p className="m-0"> <strong>Proactivity</strong> </p>
                                <div className="value_cnt">
                                    <p> We are proactive in our approach and have the highest sense of urgency. </p>
                                </div>
                            </div>

                            <div className="value_box  removeline_bottom removeline_bottom1 col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value5.png"} className="img" alt="value5"/>
                                <p className="m-0"> <strong>Growth</strong> </p>
                                <div className="value_cnt">
                                    <p> We challenge the status quo have a thirst for knowledge. </p>
                                </div>
                            </div>

                            <div className="value_box removeline_bottom removeline_bottom1 col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value6.png"} className="img" alt="value6"/>
                                <p className="m-0"> <strong>Trust</strong> </p>
                                <div className="value_cnt">
                                    <p> We take pride in our work have each other’s backs. </p>
                                </div>
                            </div>

                            <div className="value_box removeline_bottom removeline_right col-md-3 col-xs-6">
                                <img src={process.env.PUBLIC_URL + "/assets/img/value7.png"} className="img" alt="value7"/>
                                <p className="m-0"> <strong>Relationships</strong> </p>
                                <div className="value_cnt">
                                    <p> We build upon and strengthen the connections we have to one another.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
