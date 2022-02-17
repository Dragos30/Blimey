import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import smoothscroll from 'smoothscroll-polyfill';
import '../Navlink/Navlink.css';

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();
const Navlink = () => (
<div className="links-header">
        <a href="https://blimeyrecruitment.co.uk" alt="blimey">
            <img id="logomenu2" src="/LOgo.png" alt="hire builders" />
        </a>     
        <p><NavLink exact smooth to="/#about">ABOUT</NavLink></p>
        <p><NavLink exact smooth to="/Main/#whyUs">WHY US?</NavLink></p>
        <p><NavLink exact smooth to="/Main/#candidates">CANDIDATES</NavLink></p>
        <p><NavLink exact smooth to="/Main/#clients">EMPLOYERS</NavLink></p>
        <p><NavLink exact smooth to="/Main/#contact">CONTACT</NavLink></p>
    </div>
)
export default Navlink;