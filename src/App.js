import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import PrideForm from './pages/PrideForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/open-and-out/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/newsletter" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Newsletter</NavLink>
              <NavLink exact to="/yammer" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Yammer</NavLink>
              <NavLink exact to="/pride" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Pride</NavLink>
            </div>
            <div className="FormTitle">
              <NavLink to="/newsletter" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Newsletter</NavLink> or <NavLink to="/yammer" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Yammer</NavLink> or <NavLink to="/pride" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Pride</NavLink>
            </div>
              
              <Route path="/yammer" component={SignUpForm}></Route>
              <Route path="/newsletter" component={SignInForm}></Route>
              <Route path="/pride" component={PrideForm}></Route>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
