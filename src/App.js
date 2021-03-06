import React from 'react';
import "jquery/dist/jquery";
import 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Service from './pages/Service';
import Virtualassistant from './pages/Virtualassistant';
import Technology from './pages/Technology';
import Marketing from './pages/Marketing';
import Seo from './pages/Seo';
import Recruitment from './pages/Recruitment';
import Editing from './pages/Editing';
import Ecommerce from './pages/Ecommerce';
import Dataentry from './pages/Dataentry';
import Tax from './pages/Tax';
import Companyregistration from './pages/Companyregistration';
import Business from './pages/Business';
import Blog from './pages/Blog';
import Blogdetail from './pages/Blogdetail';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Personalassistant from './pages/Personalassistant';
import Header from "./componant/header";
import Footer from "./componant/footer";
import '../node_modules/font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/service" exact component={Service}/>
          <Route path="/virtualassistant" exact component={Virtualassistant}/>
          <Route path="/personalassistant" exact component={Personalassistant}/>
          <Route path="/technology" exact component={Technology}/>
          <Route path="/marketing" exact component={Marketing}/>
          <Route path="/seo" exact component={Seo}/>
          <Route path="/recruitment" exact component={Recruitment}/>
          <Route path="/editing" exact component={Editing}/>
          <Route path="/ecommerce" exact component={Ecommerce}/>
          <Route path="/dataentry" exact component={Dataentry}/>
          <Route path="/tax" exact component={Tax}/>
          <Route path="/companyregistration" exact component={Companyregistration}/>
          <Route path="/business" exact component={Business}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blogdetail" exact component={Blogdetail}/>
          <Route path="/career" exact component={Career}/>
          <Route path="/contact" exact component={Contact}/>
          <Redirect to="/"/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
