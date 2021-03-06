import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Virtualassistant = () => {
  return (
    <main>
      <div className="container pt-3">
        <h5 className="text-center">OUR VIRTUAL ASSISTANT SERVICES</h5>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="/personalassistant">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/personal_assistant.jpg" alt="personal_assistant" />
                <h6 className="text-center service_title">Personal Virtual Assistance</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Bookkeeping &amp; Payroll</li>
                  <li><i className="fa fa-square fa_sqare"></i> Receptionist Duties</li>
                  <li><i className="fa fa-square fa_sqare"></i> Database Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Banking Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Invoice Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Email Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Schedule Meetings</li>
                  <li><i className="fa fa-square fa_sqare"></i> Training Manuals </li>
                  <li><i className="fa fa-square fa_sqare"></i> Manage Cloud Computing Accounts</li>
                  <li><i className="fa fa-square fa_sqare"></i> Prepare Customer Records</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="technology">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/it_technology.jpg" alt="IT_technology"/>
                <h6 className="text-center service_title">IT &amp; Technology</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> WordPress Virtual Assistant</li>
                  <li><i className="fa fa-square fa_sqare"></i> Responsive Design / Mobile Optimization</li>
                  <li><i className="fa fa-square fa_sqare"></i> Mobile App Development</li>
                  <li><i className="fa fa-square fa_sqare"></i> Mobile Game Development</li>
                  <li><i className="fa fa-square fa_sqare"></i> Content &amp; Image Update</li>
                  <li><i className="fa fa-square fa_sqare"></i> Basic Design Changes</li>
                  <li><i className="fa fa-square fa_sqare"></i> Website &amp; Database Backup/Migration</li>
                  <li><i className="fa fa-square fa_sqare"></i> Blog Posting</li>
                  <li><i className="fa fa-square fa_sqare"></i> Affiliate Marketing </li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="marketing">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/marketing.jpg" alt="IT_technology"/>
                <h6 className="text-center service_title">Marketing</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Search Engine Marketing</li>
                  <li><i className="fa fa-square fa_sqare"></i> Pay Per Click Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Google Adwords &amp; Facebook Ads</li>
                  <li><i className="fa fa-square fa_sqare"></i> Keyword Analysis &amp; Optimization</li>
                  <li><i className="fa fa-square fa_sqare"></i> Bidding Management</li>
                  <li><i className="fa fa-square fa_sqare"></i> Meta Tag &amp; Title Optimization</li>
                  <li><i className="fa fa-square fa_sqare"></i> Sitemaps Building &amp; Submission</li>
                  <li><i className="fa fa-square fa_sqare"></i> Off-page Optimization</li>
                  <li><i className="fa fa-square fa_sqare"></i> Updating All Social Media Accounts</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="seo">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/seo.png" alt="seo"/>
                <h6 className="text-center service_title">SEO</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Article &amp; Blogs Post Creation</li>
                  <li><i className="fa fa-square fa_sqare"></i> Guest Posting &amp; Guest Blogging</li>
                  <li><i className="fa fa-square fa_sqare"></i> Composing Newsletters</li>
                  <li><i className="fa fa-square fa_sqare"></i> Content Marketing Material</li>
                  <li><i className="fa fa-square fa_sqare"></i> Designing Brochures</li>
                  <li><i className="fa fa-square fa_sqare"></i> Book Reviews</li>
                  <li><i className="fa fa-square fa_sqare"></i> Writing op-ed Pieces</li>
                  <li><i className="fa fa-square fa_sqare"></i> Responding Business Blog</li>
                  <li><i className="fa fa-square fa_sqare"></i> Interviewing Industry Source</li>
                  <li><i className="fa fa-square fa_sqare"></i> Interviewing Previous Customers</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="recruitment">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/hr.png" alt="hr"/>
                <h6 className="text-center service_title">Recruitment & Staffing</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Applicant Tracking</li>
                  <li><i className="fa fa-square fa_sqare"></i> Selection</li>
                  <li><i className="fa fa-square fa_sqare"></i> New Hire Processing</li>
                  <li><i className="fa fa-square fa_sqare"></i> Compensation Planning</li>
                  <li><i className="fa fa-square fa_sqare"></i> Onboarding</li>
                  <li><i className="fa fa-square fa_sqare"></i> Reporting</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="editing">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/audio_video_edit.png" alt="Video"/>
                <h6 className="text-center service_title">Audio & Video Editing</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Basic Video Editing</li>
                  <li><i className="fa fa-square fa_sqare"></i> Uploading Video</li>
                  <li><i className="fa fa-square fa_sqare"></i> Editing Audio</li>
                  <li><i className="fa fa-square fa_sqare"></i> Footage Editing</li>
                  <li><i className="fa fa-square fa_sqare"></i> Podcasts For Webpage</li>
                  <li><i className="fa fa-square fa_sqare"></i> Image Editing </li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="ecommerce">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/eCommerce.png" alt="eCommerce"/>
                <h6 className="text-center service_title">eCommerce Assistant</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Amazon Product Listing</li>
                  <li><i className="fa fa-square fa_sqare"></i> Magento Data Entry</li>
                  <li><i className="fa fa-square fa_sqare"></i> eBay Listing Service</li>
                  <li><i className="fa fa-square fa_sqare"></i> Bulk Product Upload</li>
                  <li><i className="fa fa-square fa_sqare"></i> Shopify Product Upload</li>
                  <li><i className="fa fa-square fa_sqare"></i> Product Description Writing</li>
                </ul>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="dataentry">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/data-entry.jpg" alt="data"/>
                <h6 className="text-center service_title">Data Entry & Market Research</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Online Data Entry</li>
                  <li><i className="fa fa-square fa_sqare"></i> eBook Data Entry</li>
                  <li><i className="fa fa-square fa_sqare"></i> Microsoft Excel</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="tax">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/tax_accounting.png" alt="tax_accounting"/>
                <h6 className="text-center service_title">Tax & Accounting</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Bookkeeping/Write-Up</li>
                  <li><i className="fa fa-square fa_sqare"></i> Financial Statements</li>
                  <li><i className="fa fa-square fa_sqare"></i> Audits, Reviews and Compilations</li>
                  <li><i className="fa fa-square fa_sqare"></i> Accounting Services</li>
                  <li><i className="fa fa-square fa_sqare"></i> Tax Services</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="companyregistration">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/company_registration.png" alt="company_registration"/>
                <h6 className="text-center service_title">Company Registration and Legal Compliances</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Company Registration</li>
                  <li><i className="fa fa-square fa_sqare"></i> DIN Generation</li>
                  <li><i className="fa fa-square fa_sqare"></i> Trademark Registration</li>
                  <li><i className="fa fa-square fa_sqare"></i> Legal Risk Management</li>
                </ul>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-12">
            <NavLink className="nohover" exact to="business">
              <div className="bg_gray">
                <img className="circle_img" src="assets/img/business_consultants.png" alt="business_consultants"/>
                <h6 className="text-center service_title">Business Consultants & Analysts</h6>
                <ul className="services_ul">
                  <li><i className="fa fa-square fa_sqare"></i> Business Entity Selection</li>
                  <li><i className="fa fa-square fa_sqare"></i> Business Succession Planning</li>
                  <li><i className="fa fa-square fa_sqare"></i> Estate Planning</li>
                </ul>
              </div>
            </NavLink>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Virtualassistant;
