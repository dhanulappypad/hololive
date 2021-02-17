import React from 'react'

const Service = () => {
  return (
    <main>
      <div className="container">
        <h4 className="text-center">Our Services</h4>
        <h5 className="text-center mb-4">Digital marketing along With A-Z Business & It Solutions. We serve small businesses & emerging brands.</h5>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="white_bg red-top-border_s red-shadow">
                <img className="w-100" src="assets/img/home1.jpg" alt="Saving Solutions" />
                <div className="caption">
                    <h3>Online Marketing</h3>
                    <p>Online marketing or web advertising is a marketing strategy using the internet to obtain website traffic and deliver promotional messages about product or services to your target customers, helping to take your business to the next level. While traditional marketing methods are still being used, many prefer online marketing as it provides a wider range of marketing elements with the use of internet.  With the combination of social media and google tools your business will emerge as a brand.:</p>
                    <ul className="service_ul">
                        <li><strong>Reaches wider audience</strong></li>&lrm;&lrm;
                        <li><strong>Flexible and convenient for consumer to research about products</strong></li>&lrm;
                        <li><strong>Organizations can target consumer demographically</strong></li>&lrm;
                        <li>&lrm;<strong>Easy to get efficient statistical results</strong></li>&lrm;
                    </ul>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
            <div className="white_bg green-top-border_s green-shadow">
                <img className="w-100" src="assets/img/home2.jpg" alt="Saving Solutions" />
                <div className="caption">
                    <h3>WebSite Design / Mobile Applications</h3>

                    <p>When it comes to designing UI, no one can beat our record of delivering everything perfectly hand-coded, W3C compliant &amp; responsive to global brands. Implementing enhanced UX for both desktops &amp; mobile users and perfect conversion optimization to boost engagement is what our creative team boasts of.
                    Using the latest coding methodologies along with mobile friendly functions, customers and users will be more engaged on your website.  We customize your website designs with strategic insights to generate greater brand engagement, higher conversions and measurable results.:</p>

                    <ul className="service_ul">
                        <li><strong>Web Design</strong></li>&lrm;
                        <li><strong>Graphic Design</strong></li>&lrm;
                        <li><strong>Logo Design</strong></li>&lrm;
                        <li>&lrm;<strong>Responsive + Mobile Websites</strong></li>&lrm;
                        <li><strong>Custom web design</strong></li>&lrm;
                    </ul>
                </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-12">
                <div className="white_bg blue-top-border_s blue-shadow">
                    <img className="w-100" src="assets/img/home3.jpg" alt="Saving Solutions" />

                    <div className="caption">
                        <h3>SEO &amp; Google tools</h3>
                        <p>Search Engine Optimization is the latest trend being adopted by big brands. We are experts in SEO &amp; variety of google tools. We help you rank your business on the 1<sup>st</sup> page of google search. With our guidance, SEO will easily become your sustainable business model.</p>
                        <p>Through our on-page and off-page optimization techniques, we first make your website visible to the search engines.</p>
                        <p>We then follow it up with our effective link building tactics ensuring that your website gets the first page ranking for your desired keywords. Our SEO Services Help You Get:</p>
                        <ul className="service_ul">
                            <li><strong>Better visibility in search engines</strong></li>&lrm;
                            <li><strong>More targeted traffic to your website</strong></li>&lrm;
                            <li><strong>Higher number of qualified leads from your website</strong></li>&lrm;
                            <li><strong>Huge savings on cost per lead</strong></li>&lrm;
                            <li><strong>Return on Investment</strong></li>
                        </ul>

                    </div>
                </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default Service;
