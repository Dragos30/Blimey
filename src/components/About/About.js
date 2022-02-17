import React from 'react';
import './About.css';
// import Navlink from '../Navlink/Navlink';
import disableScroll from 'disable-scroll';
import CSCS from "./CSCS.jpg";

disableScroll.off();
const About = () => {
    return (
        <div id="about">
            <div className="text-container2">
                <h1>About Us</h1>
                <p>Blimey Recruitment ltd is a contract trades and labour agency for all areas
                of the construction industry, all over the UK. Our professional
                team works hard to understand your needs and fulfill them in a
                very quick and efficient way. Finding the right workforce to keep
                   your build on track wouldn’t be easier with our labour agency knowledge and expertise.</p>
                        <br></br>
                    <p>Blimey Recruitment  provides you with the best recruitment services in UK.
                Our agency works with clients in the construction sector to provide both semi-skilled
                     and skilled candidates to meet your requirements.</p>
                <h3>Trades we supply:</h3>
                <ul>
                    <li>Bricklayers</li>
                    <li>Joiners</li>
                    <li>Plasterers</li>
                    <li>Electricians</li>
                    <li>Labourers</li>
                    <li>Forklift Drivers</li>
                    <li>Groundworkers</li>
                    <li>Painters</li>
                    <li>Tilers</li>
                    <li>Plumbers</li>
                    <li>Roofers</li>
                </ul>
                <p>All of our traders have the necessarily qualification and are CSCS approved</p>
                <img className="work" src={CSCS} alt="CSCS" />
            </div>
        </div>
    )
}

export default About;