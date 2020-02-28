import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import moment from "moment"
import './scss/App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navigation from "./components/Navigation";

import one from "./static/1.jpg"
import two from "./static/2.jpg"
import three from "./static/3.jpg"
import four from "./static/4.jpg"
import five from "./static/5.jpg"
import six from "./static/6.jpg"

import About from './sections/About'
import Party from './sections/Party';
import Music from './sections/Music';
import TimelineX from './sections/TimelineX';

function App() {
    AOS.init({
        duration: 1200,
        mirror: true,
    });

    const a = moment();
    const b = moment("2018-08-04T05:30-0700");

    const years = a.diff(b, 'year');
    b.add(years, 'years');

    const months = a.diff(b, 'months');
    b.add(months, 'months');

    const days = a.diff(b, 'days');

    return (
        <Router>
            <div className="App">
            <Navigation />
            <div id="home" className="container-fluid hero background-tint">
                {/*<div className="container h-100">*/}
                {/*    <div className="row h-100">*/}
                {/*        <div className="col-sm-12 col-md-6 introduction my-auto">*/}
                {/*            <h1 className="text-white">*/}
                {/*                Michael and Sydney<br/>*/}
                {/*                got married<br/>*/}
                {/*                {' ' + years + ' years ' + months + ' months ' + days + ' days ago'}<br/>*/}
                {/*                on August 4th, 2018!*/}
                {/*            </h1>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
            <About />
            <div className="wedding-hero background-tint" />
            <Party />
            <div className="music-hero background-tint" />
            <Music />
            <div className="container-fluid blend-bg">
                <div className="row">
                    <img src={one} className="col p-0 wall img-fluid blend-overlay" />
                    <img src={two} className="col p-0 wall img-fluid blend-overlay" />
                    <img src={three} className="col p-0 wall img-fluid blend-overlay" />
                </div>
                <div className="row">
                    <img src={four} className="col p-0 wall wall-top img-fluid blend-overlay" />
                    <img src={five} className="col p-0 wall wall-top img-fluid blend-overlay" />
                    <img src={six} className="col p-0 wall img-fluid blend-overlay" />
                </div>
            </div>
            <TimelineX />
            <div className="footer-hero background-tint">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-6 my-auto">
                            <div data-aos="typewriter" 
                                 data-aos-once="true" 
                                 data-aos-anchor-placement="bottom-bottom">
                                More to Come...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer bg-dark py-3">
                <div className="container-fluid text-right">
                    <span class="text-muted">
                        Michael & Sydney est. 2009
                    </span>
                </div>
            </footer>
            </div>
        </Router>
    );
}

export default App;
