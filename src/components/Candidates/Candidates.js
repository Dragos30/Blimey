import React from 'react';
import CandidatesForm from './CandidatesForm';
import './Candidates.css';
// import Navlink from '../Navlink/Navlink';
import Flip from 'react-reveal/Zoom';


const Candidates = () => (
    <div id="candidates">
        {/* <div className="links-container">
            <Navlink />
        </div> */}
        <div className="text-container2">
        <h1>Candidates</h1>
            <p>Some great news!!
            You are about to be handled for your future by a recruitment agency that definitely don’t believe that clients are more important than our candidates.<br/> 
            <br/>WHEN CHOOSING BLIMEY RECRUITMENT AS YOUR RECRUITMENT AGENCY, YOU WILL
            RECEIVE A DISCREET AND CONFIDENTIAL SERVICE ENSURING THAT YOUR NEXT
            CAREER MOVE IS PROFESSIONAL.
            Blimey Recruitment offers additional services and candidates can be benefited.<br/><br/> Every candidate that is
            registered with Blimey Recruitment will be able to get
            <Flip left cascade>
            <b><p className="offer">20% discount on their annual tax returns from
            professional accountants</p></b>
            </Flip>
            Get in touch today by completing the following form.
            We know you're busy, so to make things easier why not drop one of our recruiters a copy of
            your CV. It really could not be easier to get in touch with us.</p>
            <div className="CandidatesForm">
                <CandidatesForm />
            </div>        
        </div>
    </div>
)
export default Candidates;