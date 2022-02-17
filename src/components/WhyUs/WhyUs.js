import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <div id="whyUs">
            <div className="text-container2">
                <h1>Why Us?</h1>
                <ul className="disc">For EMPLOYERS:
                <li>Always provide candidates most suitable for the role.
                If you are not happy with anyone we provide to you, we will replace them.</li>
                <li> Ensure communication skills are excellent at all times and that we keep in regular
                contact with you to ensure everything is running smoothly.</li>
                <li> Provide candidates who can cover both short and long term demands.</li>
                <li>Only supply CVs for candidates who fit the role, both in terms of experience and 
                qualifications and fit within the business.</li>
                <li> Respond to any queries within a few hours.</li>
                <li> Screen and interview candidates to determine their suitability for the role.</li>
                </ul>
                <ul className="disc">For CANDIDATES:
                <li>Place you in the most suitable role according to your qualifications and experience.</li>
                <li>Very communicative as responding within few hours.</li>
                <li>Keep in touch with you and check how you are on a regular basis.</li>
                <li>Support you with any concerns you may have about the job.</li>
                <li>Provide you with feedback if you have been unsuccessful. </li>
                <li>Offer support and guidance on your CV.</li>
                </ul>
            </div>
        </div>
    )
}

export default WhyUs;