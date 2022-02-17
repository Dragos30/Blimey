import React, { Fragment, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './terms.css';

function Terms() {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <div id="terms">
            <Fragment>
                <div className="terms" >
                    <span className="check">
                    <button className="modalBtn" onClick={handleShow}>
                            Terms and Conditions and Privacy Policy</button>
                    </span>
                </div>
                <Modal className="modal" show={show} onHide={handleClose}
                    dialogClassName="modal-100vw"
                    aria-labelledby="example-custom-modal-styling-title">
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Terms and Conditions and Privacy Policy</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="container">
                        <ul id="list1">
                            <li><b>Company Name:</b></li><b></b>                           
                            <li><b>Company</b></li>
                            <li><b>Contact details:</b></li>
                            <li><b>Document DP5A:</b></li>
                            <li><b>Topic:</b></li>
                            <li><b>Date:</b></li>
                            <li><b>Version:</b></li>
                        </ul >
                                <ul id="list">
                            <li>Blimey Recruitment  ltd</li> 
                            <li>For all data compliance queries and requests email privacy@blimeyreceuitment.co.uk</li>                           
                            <li>Privacy Notice (when personal data is obtained from the data subject)</li><br></br>
                            <li>Data protection</li>                            
                            <li>10 October 2020</li>
                            <li>1.0</li>
                            </ul>
                            </div>
                            <p>&nbsp;&nbsp;The Company is a recruitment business which provides work-finding services to its 
                            clients and work-seekers.<br></br>&nbsp;&nbsp; The Company must process personal data 
                            (including sensitive personal data) so that it can provide these services – in
                            doing so, the Company acts as a data controller.

                            &nbsp;&nbsp;You may give your personal details to the Company directly, such as on an application
                            or registration form or via our website, or we may collect them from another source
                            such as a jobs board.<br></br>&nbsp;&nbsp; The Company must have a legal basis for processing your personal data. 
                            For the purposes of providing you with work-finding services and/or information relating to roles
                            relevant to you we will only use your personal data in accordance with the terms of the following 
                               statement. </p> 
                        <ol>
                            <li>Collection and use of personal data</li>
                        </ol>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.Purpose of processing and legal basis </p>

                            <p>&nbsp;&nbsp;The Company will collect your personal data (which may include 
                            sensitive personal data) and will process your personal data for
                            the purposes of providing you with work-finding services.&nbsp;&nbsp; The legal bases
                        we rely upon to offer these services to you are:</p>
                            <ul>
                                <li>Consent</li>
                                <li>Legal obligation</li>
                                <li>Contractual obligation</li>
                            </ul>
                            
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.Legitimate interest</p>
                         
                            <p>&nbsp;&nbsp;Where the Company has relied on a legitimate interest to process your personal
                        data our legitimate interests is/are as follows:</p>
                   
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.Recipient/s of data</p>
                  
                       

                            <p>&nbsp;&nbsp;The Company may where applicable process your personal data with the following recipients:</p>
                                <ul>
                                    <li>Freelance: timesheet processing portals; umbrella or other payment agents; HMRC; client portals and reports</li>
                                    <li>CRM and statistical SAAS systems</li>
                                    </ul>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;d.Statutory/contractual requirement</p>

                            <p>&nbsp;&nbsp;Your personal data is not required as part of a statutory and/or contractual requirement, and/or
                        a requirement necessary to enter into a contract. </p>

                      
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Overseas Transfers </p>
                 

                            <p>&nbsp;&nbsp;The Company may transfer only the information you provide to us to countries outside the European
                            Economic Area (‘EEA’) for the purposes of providing you with work-finding services. We will take
                            steps to ensure adequate protections are in place to ensure the security of your information. 
                        The EEA comprises the EU member states plus Norway, Iceland and Liechtenstein. </p>
                  
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Data retention</p>
                    
                        

                            <p>&nbsp;&nbsp;The Company will retain your personal data only for as long as is necessary. Different laws require 
                            us to keep different data for different periods of time.<br></br>

                            &nbsp;&nbsp;The Conduct of Employment Agencies and Employment Businesses Regulations 2003, require us to keep 
                            work-seeker records for at least one year from (a) the date of their creation or (b) after the date
                            on which we last provide you with work-finding services.<br></br>

                            &nbsp;&nbsp;We must also keep your payroll records, holiday pay, sick pay and pensions auto-enrolment records
                            for as long as is legally required by HMRC and associated national minimum wage, social security 
                            and tax legislation.<br></br>

                            &nbsp;&nbsp;Where the Company has obtained your consent to process your personal data, we will do so in line
                            with our retention policy. Upon expiry of that period the Company will seek further consent from you. 
                        Where consent is not granted the Company will cease to process your personal data. </p><br></br>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.Your rights </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please be aware that you have the following data protection rights:</p>
                            <ul>
                                <li>The right to be informed about the personal data the Company processes on you;</li>
                                <li>The right of access to the personal data the Company processes on you;</li>
                                <li>The right to rectification of your personal data;</li>
                                <li>The right to erasure of your personal data in certain circumstances;</li>
                                <li>The right to restrict processing of your personal data;</li>
                                <li>The right to data portability in certain circumstances;</li>
                                <li>The right to object to the processing of your personal data that was based on a public or
                                legitimate interest;</li>
                                <li>The right not to be subjected to automated decision making and profiling; and</li>
                                <li>The right to withdraw consent at any time.</li>
                                </ul>

             
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.Complaints or queries </p>
                   

                            <p>&nbsp;&nbsp;If you wish to complain about this privacy notice or any of the procedures set out in it, 
                            please email at Kujtim@blimeyrecruitment.co.uk</p>


                            <h3> Annex A</h3>
                            <ol>
                                <p>a)The lawfulness of processing conditions for personal data are:</p>
                        

                                <li>Consent of the individual for one or more specific purposes.</li>
                                <li> Processing is necessary for the performance of a contract with the individual or in order to 
                                take steps at the request of the individual to enter into a contract.</li>
                                <li>Processing is necessary for compliance with a legal obligation that the controller is subject to.</li>
                                <li>Processing is necessary to protect the vital interests of the individual or another person.</li>
                                <li>Processing is necessary for the performance of a task carried out in the public interest or in
                                the exercise of official authority vested in the data controller.</li>
                                <li>Processing is necessary for the purposes of legitimate interests pursued by the controller or a
                                third party, except where such interests are overridden by the interests or fundamental rights
                                or freedoms of the individual which require protection of personal data, in particular where 
                        the individual is a child.</li>
                            </ol>
                            <ol>
                                <p> b)  The lawfulness of processing conditions for sensitive personal data are:</p>
                                <li>Explicit  consent of the individual for one or more specified purposes, unless reliance on consent
                        is prohibited by EU or Member State law.</li>
                                <li>Processing is necessary for carrying out data controller’s obligations under employment, social
                                security or social protection law, or a collective agreement, providing for appropriate safeguards 
                        for the fundamental rights and interests of the individual.</li>
                                <li>Processing is necessary to protect the vital interests of the individual or another individual where
                        the individual is physically or legally incapable of giving consent.</li>
                                <li>In the course of its legitimate activities, processing is carried out with appropriate safeguards
                                by a foundation, association or any other not-for-profit body, with a political, philosophical,
                                religious or trade union aim and on condition that the processing relates only to members or 
                                former members (or those who have regular contact with it in connection with those purposes) 
                        and provided there is no disclosure to a third party without the consent of the individual.</li>
                                <li>Processing relates to personal data which are manifestly made public by the individual.</li>
                                <li>Processing is necessary for the establishment, exercise or defence of legal claims or whenever 
                        courts are acting in their judicial capacity.</li>
                                <li>Processing is necessary for reasons of substantial public interest on the basis of EU or
                                Member State law which shall be proportionate to the aim pursued, respects the essence of
                                the right to data protection and provide for suitable and specific measures to safeguard 
                        the fundamental rights and interests of the individual.</li>
                                <li>Processing is necessary for the purposes of preventative or occupational medicine, for 
                                assessing the working capacity of the employee, medical diagnosis, the provision of health or 
                                social care or treatment or the management of health or social care systems and services on the 
                                basis of EU or Member State law or a contract with a health professional and subject to the necessary 
                        conditions and safeguards. </li>
                                <li>Processing is necessary for reasons of public interest in the area of public health, such as protecting
                                against serious cross-border threats to health or ensuring high standards of quality and safety of
                                healthcare and of medicinal products or medical devices, on the basis of EU or Member State law 
                                which provides for suitable and specific measures to safeguard the rights and freedoms of the individual,
                        in particular professional secrecy. </li>
                                <li>Processing is necessary for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes,
                                which shall be proportionate to the aim pursued, respect the essence of the right to data protection and provide for suitable and 
                        specific measures to safeguard fundamental rights and interests of the individual.</li>
                              </ol>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>
            </Fragment>
        </div>
    )
}
export default Terms;