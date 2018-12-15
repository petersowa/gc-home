import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
} from 'react-router-dom';

import { Layout, Nav, Body, Side, RSide, Foot } from './components/Layout/ui';

import About from './components/about';
import Project from './components/project';
import Notes from './components/notes';
import Links from './components/links';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Nav>DevSPeter Homepage</Nav>

        <Router>
          <React.Fragment>
            <Body>
              <Switch>
                <Route exact path="/" component={Project} />
                <Route path="/about" component={About} />
                <Route path="/notes" component={Notes} />
                <Route path="/links" component={Links} />
              </Switch>
            </Body>

            <Side>
              <NavLink className="nav-link" exact to="/">
                Projects
              </NavLink>
              <NavLink className="nav-link" to="/notes">
                Notes
              </NavLink>
              <NavLink className="nav-link" to="/links">
                Links
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </Side>
          </React.Fragment>
        </Router>
        <RSide>right side</RSide>
        <Foot>This is the footer area. It should be near the bottom.</Foot>
      </Layout>
    );
  }
}

export default App;
