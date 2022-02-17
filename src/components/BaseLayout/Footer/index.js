//Dependencies
import React from 'react';
//Internals
import './index.css';

const Footer = () => (
  <footer className="footer" id="footer">
    {/* <div id="footer-footer"> */}
        <div className="grid">
        <span>
          <p id="company">309 Bowes Road, London, England, N11 1BD<br></br>
     Copyright &copy; 2020 Blimey LTD.<br></br> All rights reserved. <br></br>Website by: <a href={"https://finitdev.com"}>FinIT</a> <br></br></p>
          </span>   
      <div className="logo-container">
        <img id="logo" src="/LOgo.png" alt="hire builders" />
        </div>
    </div>
  </footer>
)

export default Footer;
