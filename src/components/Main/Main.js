import React, { Component } from "react";
import {
    HashRouter
} from "react-router-dom";
import Contact from "../Contact/Contact";
import About from "../About/About";
import WhyUs from "../WhyUs/WhyUs";
import Candidates from "../Candidates/Candidates";
import Clients from "../Clients/Clients";
import Navlink from "../Navlink/Navlink";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                    <div className="content">
                        <Navlink/>
                        <About exact path="/#about" component={About}/>
                        <WhyUs path="/#whyUs"  component={WhyUs} />
                        <Candidates path="/candidates"  component={Candidates} />
                        <Clients path="/clients"  component={Clients} />
                        <Contact path="/contact" component={Contact} />
                    </div>
            </HashRouter>
        );
    }
}

export default Main;