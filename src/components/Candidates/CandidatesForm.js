import React, { Component } from 'react';
import axios from 'axios';
import Terms from '../TERMS/terms';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

library.add(faFileUpload);
class CandidatesForm extends Component {
    state = { message: "" };
    onSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('uploadFile', event.target.uploadFile.files[0]);
        formData.append('name', event.target.name.value);
        formData.append('lname', event.target.lname.value);
        formData.append('email', event.target.email.value);
        formData.append('message', event.target.message.value);

        // axios.post('/api/candidates.php', formData).then(console.log);
        axios.post('https://blimeyrecruitment.co.uk/api/candidates.php', formData).then(console.log);
        event.target.reset();
        this.setState({
            message: 'Thank you for contacting us, our recruitment team is working on finding the suitable role for you.'
        });
  }
    render() {
       
        return (
            <div>
                <form id="form" encType="multipart/form-data" onSubmit={this.onSubmit} name="fileinfo">
                <p id="title">Hi! Let us know how we can help and we’ll respond shortly.</p>
                <input type="text" className="neumorphic" required name="name" placeholder="First name*" />
                    <input type="text" className="neumorphic" required name="lname" placeholder="Last name*" />
                    <input type="text" className="neumorphic" required name="email" placeholder="Email address*" />
                    <input type="text" className="neumorphic" required name="message" placeholder="Specialism*" />
                <label for="file-upload" class="custom-file-upload">
                    <FontAwesomeIcon icon="file-upload" color="black"/> Select CV or Portfolio
                </label>
                <input id="file-upload" required name="uploadFile" type="file" />  
                <label for="checkbox">
                        <input type="checkbox" className="neumorphic" required name="checkbox" />
                    I have read and agree to the T&C*
                </label>
                    <Terms/>
                    <input type="submit" className="neumorphic" value="Send Message" />
               
                </form>
                <div className="thanks">
                    {!!this.state.message && <h3>{this.state.message}</h3>}
                </div>
            </div>
            
       
        )
       
    }
    
}

export default CandidatesForm;