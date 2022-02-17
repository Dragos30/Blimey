import React, { Component } from "react";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import smoothscroll from 'smoothscroll-polyfill';
import "./Menu.css";

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();
class Menu extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#about">ABOUT</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#whyUs">WHY US?</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#candidates">CANDIDATES</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#clients">EMPLOYERS</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" smooth to="/Main/#contact">CONTACT</NavLink></p>
                <div className="Icons">
                    <a href={"https://www.facebook.com/blimeyrecruitment/"}>
                        <FontAwesomeIcon icon={['fab', 'facebook']} color="white" />
                    </a>
                    <a href={"https://www.instagram.com/blimeyrecruitment/?hl=ro"} >
                        <FontAwesomeIcon icon={['fab', 'instagram']} color="white" />
                    </a>
                    <a href={"https://www.linkedin.com/company/blimey-recruitment/"} >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" />
                    </a>
                </div>
            </ul>
        );
    }
}

export default Menu;