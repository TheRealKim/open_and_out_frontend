import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div classname="Description">
                <label className="FormField_Description">The Open&amp;Out team will regularly post news about LGBTQ topics and events on Yammer.<br></br>Make sure to follow us to not miss any of the interesting updates!</label>

              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" autocomplete="off" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Join</button> <Link to="/sign-in" className="FormField__Link">I would like to receive info anonymously</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
