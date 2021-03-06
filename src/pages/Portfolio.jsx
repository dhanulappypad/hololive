import React, {useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import $ from 'jquery';

const Portfolio = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <main>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <ul className="category-btn">
              <li><a href="#" className="all" data-filter="all">ALL</a></li>
              <li><a href="#" className="website" data-filter="website">Website Design</a></li>
              <li><a href="#" className="seo" data-filter="seo">SEO</a></li>
              <li><a href="#" className="graphic" data-filter="graphic">Logo/Graphics</a></li>
            </ul>

            <ul className="category-list">
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/lp_wd.jpg"} alt=""/>
              </li>
              <li className="seo" data-category="seo">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/86th.png"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/pe_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/mahi_wd.png"} alt=""/>
              </li>
              <li className="seo" data-category="seo">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/holo_seo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/morris_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/morris_wd.jpg"} alt=""/>
              </li>
              <li className="seo" data-category="seo">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/is_seo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/dr_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/gym_wd.jpg"} alt=""/>
              </li>
              <li className="seo" data-category="seo">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/pathguru_seo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/wifi_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/wifi_wd.jpg"} alt=""/>
              </li>
              <li className="seo" data-category="seo">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/lappypad_seo.png"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/rcftl_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/dr_wd.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/pathguru_logo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/lp_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/sara_wd.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/charming_logo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/holo_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/rit_wd.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/ppl_logo.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/is_logo.jpg"} alt=""/>
              </li>

              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/holo_wd.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/greeen_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/pe_wd.jpg"} alt=""/>
              </li>
              <li className="graphic" data-category="graphic">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/COT_logo.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/global_wd.png"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/path_wd.jpg"} alt=""/>
              </li>
              <li className="website" data-category="website">
                <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/is_wd.jpg"} alt=""/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
