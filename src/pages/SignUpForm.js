import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ToastsContainer, ToastsStore} from 'react-toasts';


class SignUpForm extends Component {
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
    if (this.state.email === "") {
      ToastsStore.error("Please enter a valid JnJ e-mail address");
    } else { 
      fetch('http://localhost:3001/yammer', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.state)
      
      }).then(function(res) {
        if (res.status === 200) {
          ToastsStore.success("Are you sure you weren't a member already? Thanks anyway!");
        
        } else if (res.status === 201) {
          ToastsStore.success("Thank you for joining our Yammer page!");
        
        } else if (res.status === 400) {
          ToastsStore.error("It seems like an incomplete e-mail address. Please check.");
        
        } else if (res.status === 403) {
          ToastsStore.error("Only JnJ addresses ( ... @its.jnj.com) are permitted.");          
        
        } else {
          ToastsStore.error("You will be added to our Yammer group by the end of the week!");
        }

      }).catch(function(e) {
        ToastsStore.warning("Write to file failed. Please check if backend is up and running.");
      });

      this.setState({
        email: ''
      });
    }
  }

  render() {
    return (
    <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="Description">
            <label className="FormField_Description">The Open&amp;Out team will regularly post news about LGBTQ topics and events on Yammer.<br></br>Make sure to join our page to not miss any of the interesting updates!</label>

          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" autoComplete="off" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
          </div>

          <div className="FormField">
              <button className="FormField__Button mr-20">Join</button> <Link to="/newsletter" className="FormField__Link">I would like to receive info via e-mail on a monthly base</Link>
              <ToastsContainer classname="FormField__Button mr-20" store={ToastsStore} position="bottom_center"/>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
