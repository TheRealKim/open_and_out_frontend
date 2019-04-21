import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Newsletter</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Yammer</NavLink>
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Newsletter</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Yammer</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
