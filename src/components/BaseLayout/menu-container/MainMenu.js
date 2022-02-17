import React from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
import "./MainMenu.css";

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();
class MainMenu extends React.Component {
    render() {
        return (
            <nav >  
                <div id="main">
                    <a href="https://blimeyrecruitment.co.uk" alt="blimey">
                        <img id="logomenu" src="/LOgo.png" alt="hire builders" />
                    </a>                   
                    <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#about">ABOUT</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#whyUs">WHY US?</NavLink></p> 
                    <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#candidates">CANDIDATES</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#clients">EMPLOYERS</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#contact">CONTACT</NavLink></p>
                </div>
            </nav>
        );
    }
}
export default MainMenu;