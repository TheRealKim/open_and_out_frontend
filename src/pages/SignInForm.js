import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div classname="Description">
                <label className="FormField_Description">The Open&amp;Out team will send you a newsletter about LGBTQ topics and events once a month.<br></br>Make sure to subscribe to not miss any of the interesting updates!</label>
            </div>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" autocomplete="off" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div className="FormField">
                  <button className="FormField__Button mr-20">Sign up</button> <Link to="/" className="FormField__Link">I would like to join Yammer instead</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
