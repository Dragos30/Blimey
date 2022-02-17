import React, { Component } from 'react';
import Terms from '../TERMS/terms';
import axios from 'axios';


const API_PATH = '/api/contact.php';
class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            email: '',
            message: '',
            checkbox: '',
            mailSent: false,
            error: null
        };
        this.state = this.initialState;
    }
    handleFormSubmit = e => {
        e.preventDefault();
        this.setState(this.initialState);
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: this.state
        })

            .then(result => {
                if (this.state.email && this.state.name && this.state.message && this.state.checkbox)
                    console.log('result', result);
                this.setState({
                    mailSent: result.data.sent,
                    error: result.data.message

                })
                
            });
        
    };
    render() {

        return (
            <div className="Form">

                <div>
                    <form id="form" action="/api/contact.php" onSubmit={e => this.handleFormSubmit(e)}>
                        <p id="title">Hi! Let us know how we can help and we’ll respond shortly.</p>
                        <input type="text" id="Name" name="name" placeholder="Name*"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />


                        <input type="email" id="email" name="email" placeholder="Email*"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />



                        <textarea id="message" name="message" placeholder="How can we help?*"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}
                        ></textarea>

                        <label for="terms" className="checkbox-inline">
                            <input type="checkbox" required name="checkbox" value="check" id="terms"
                                onChange={e => this.setState({ terms: e.target.value })}
                            />I have read and agree to the T&C
                            </label>
                        <Terms />

                        <input type="submit" value="Send Message" />
                    </form >

                    <div>
                        {this.state.error && <div>{this.state.error}</div>}
                        {this.state.mailSent &&
                            <div className="thanks"><h3>Thank you for contacting us.</h3></div>
                        }
                    </div>
                </div>
            </div>
        );
    }
    
}
export default ContactForm;