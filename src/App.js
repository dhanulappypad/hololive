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
import Blog from './pages/Blog';
import Blogdetail from './pages/Blogdetail';
import Career from './pages/Career';
import Contact from './pages/Contact';
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
