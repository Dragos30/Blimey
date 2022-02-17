import React from 'react';
import ContactForm from "./ContactForm";
import './Contact.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, fas } from '@fortawesome/free-solid-svg-icons';
import Footer from "../BaseLayout/Footer";

library.add(fas, faMobileAlt);
const Contact = () => {

    return (
    <div id="contact"> 
            <div className="text-container2"> 
            <h1>Contact Us</h1>
                <p>OUR CONSTRUCTION RECRUITMENT TEAM IS READY TO HELP AT ANYTIME. </p>
            <div className="ContactForm">
                <ContactForm />
                </div>
                <div className="Icons" >
                    <p>Info@blimeyrecruitment.co.uk</p>
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
                
                <h3 id="phone"><FontAwesomeIcon icon={faMobileAlt} color="white" />&nbsp;<a  href="tel:07467638737" datatype="phone-call" data-content="07467638737">07467638737</a></h3>
                <span>
                    <Footer />
                </span>
                
            </div>
           
            
        </div > 
)    
    }
export default Contact;