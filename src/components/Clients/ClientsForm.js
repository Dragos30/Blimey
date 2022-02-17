import React, { Component } from 'react';
import Terms from '../TERMS/terms';
import axios from 'axios';


const API_PATH = '/api/clients.php';
class ClientsForm extends Component {

    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            company: '',
            email: '',
            phone: '',
            address: '',
            message: '',
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
            data: this.state,
        })

            .then(result => {
                if (this.state.email && this.state.name && this.state.company && this.state.phone && this.state.address && this.state.message && this.state.checkbox)
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
                    <form id="form" action="/api/clients.php" onSubmit={e => this.handleFormSubmit(e)}>
                        <p id="title">Hi! Let us know how we can help and we’ll respond shortly.</p>
                        <input type="text" id="name" name="name" placeholder="Name*"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })}
                        />
                        <input type="text" id="companyName" name="company" placeholder="Company*"
                            value={this.state.company}
                            onChange={e => this.setState({ company: e.target.value })}
                        />

                        <input type="email" id="email" name="email" placeholder="Email*"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <input type="text" id="phone" name="phone" placeholder="Phone number*"
                            value={this.state.phone}
                            onChange={e => this.setState({ phone: e.target.value })}
                        />
                        <input type="text" id="address" name="address" placeholder="Address line*"
                            value={this.state.address}
                            onChange={e => this.setState({ address: e.target.value })}
                        />


                        <textarea id="message" name="message" placeholder="Enquiry*"
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
export default ClientsForm;