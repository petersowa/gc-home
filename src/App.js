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
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Nav>DevSPeter Homepage</Nav>

        <Router>
          <Body>
            <Switch>
              <Route exact path="/" component={Project} />
              <Route path="/about" component={About} />
            </Switch>
          </Body>
        </Router>
        <Side>Projects</Side>
        <RSide>right side</RSide>
        <Foot>This is the footer area. It should be near the bottom.</Foot>
      </Layout>
    );
  }
}

export default App;
