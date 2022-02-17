import React from 'react';
import ClientsForm from './ClientsForm';
import './Clients.css';
// import Navlink from '../Navlink/Navlink';

const Clients = () => {
    return (
        <div id="clients">
            {/* <div className="links-container">
                <Navlink />
            </div> */}
            <div className="text-container2">
                <h1>Employers</h1>
                <p>We understand that the nature of construction
                is to work at a fast pace and without the right people
                 to support projects, it can cause projects to fold.
                  We also know that staff can let you down at the last minute,
                   which is why we will always be on hand to provide staff at short notice.
                    Our philosophy is all about building strong relationships with our clients,
                     which is why we want to build trust in our services.
                      All you need to do is give us your requirements and we will do the rest.</p>
                <div className="ClientForm">
                    <ClientsForm/>
                </div>
            </div>
        </div>
    )
}

export default Clients;