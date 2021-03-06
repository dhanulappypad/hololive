import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

const Personalassistant = () => {
    return(
        <main>
            <section className="breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="va_breadcrumb">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/virtualassistant">Virtual Assistant</NavLink></li>
                                <li>Personal Virtual Assistance</li>
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
                                <h1>Personal Virtual Assistance</h1>
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

                    <div className="row">
                        <div className="col-md-12">
                            <div className="child_services">
                                <p>Included Services</p>
                            </div>
                            <div className="box pl-10">
                                <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Bookkeeping and payroll</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Monitoring payments to salaried employees, reconciling and paying commissions and processing wage garnishments</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Receptionist duties</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Answering calls, leaving voicemails and checking messages</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Database Management</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Database building, entry and updates (sales, contacts, CRM, etc.)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Banking Management</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Performing all banking needs like paying bills and transferring funds etc.</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Invoices Management</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>managing, reconciling and invoicing all revenue secured by the Market Research Team</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Email Management</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Checking email, responding to customer inquiries and managing spam</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Schedule Meetings</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Scheduling appointments with clients, businesses and salespeople</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Training Manuals </h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Preparing training manuals for new staff members or remote workers</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Manage cloud computing accounts</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Launching and maintaining cloud computing accounts (DropBox, OneDrive, Google)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                            <div className="box-part text-center">
                                                <div className="title">
                                                    <h4>Prepare Customer Records</h4>
                                                </div>
                                                <hr className="service_d_hr"/>
                                                <div className="text">
                                                    <span>Open and maintain customer accounts,Prepare reports by collecting and analyzing customer information</span>
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
    )
}

export default Personalassistant;